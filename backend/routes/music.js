//Defining routes for the server, we will require the method router from express
const { Router } = require('express');
const router = Router(); //executing 
const { unlink } = require('fs-extra');

const path = require('path');

const Music = require('../models/Musica');


router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



router.get('/', async (req, res) => {
    const music = await Music.find();
    res.json(music);
});

router.post('/', async (req, res) =>{
    const { artist, album, imagePath }= req.body;
    //const imagePath = '/uploads/' + req.file.filename;
    const newMusic =  new Music({artist, album, imagePath });
    await newMusic.save();
    res.json({message: 'Music saved'});
});

router.delete('/:id', async (req, res) =>{
    const music = await Music.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public/' + music.imagePath));
    res.json({message: 'Music deleted'});
});
module.exports = router;