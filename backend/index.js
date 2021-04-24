const express =  require('express');
const morgan = require('morgan');
const multer  =  require('multer');
const path =  require('path');

//init
//server for the app
const app= express();

app.set('port', 3000);

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

//server start
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})


