//This code is a compilation of classes with the lecturer Mikhail Timofev and the tutorial from Fazt code on Youtube https://www.youtube.com/watch?v=VOx3iON96ew


if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
require('dotenv').config();

const express =  require('express');
const morgan = require('morgan');
const cors = require('cors'); 
const multer  =  require('multer');
const path =  require('path');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

//init
//server for the app
const app= express();
app.use(cors());

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,authorization"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

require('./database');

var port = process.env.PORT || 8000;



//middleware, every petition will pass trhought morgan

app.use(morgan('dev'));

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());



//Routes
app.use('/api/music', require('./routes/music'));

//Statis files
app.use(express.static(path.join(__dirname, 'public')));

//server start
//app.listen(app.get('port'), () => {
//    console.log('Server on port', app.get('port'));
//})

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});
