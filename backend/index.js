const express =  require('express');
const morgan = require('morgan');
//init
//server for the app
const app= express();

app.set('port', 3000);

//middleware, every petition will pass trhought morgan
app.use(morgan());

//server start
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})


