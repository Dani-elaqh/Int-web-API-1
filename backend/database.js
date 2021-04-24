const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

//conection
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
})
    