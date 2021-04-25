if(process.env.NODE_ENV === 'development'){
    require('dotenv').config();
}

console.log(process.env.NODE_ENV)
const express =  require('express');
const morgan = require('morgan');
const multer  =  require('multer');
const path =  require('path');

var port = process.env.PORT || 8000;

//init
//server for the app
const app= express();
require('./database');


//middleware, every petition will pass trhought morgan
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename (req, file, cb){
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
