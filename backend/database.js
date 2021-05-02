const mongoose = require('mongoose');

//console.log(process.env.MONGODB_URI)

var MONGO = "mongodb+srv://test:p897am4dr3@cluster0.igfyh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        .then((db) => console.log('connected to db'))
        .catch((err) => console.log(err));
    