//Defining routes for the server, we will require the method router from express
const { Router } = require('express');
const router = Router(); //executing 

const path = require('path');

const Music = require('../models/Musica');


router.get('/', async (req, res) => {
    const music = await Music.find();
    res.json(music);
});

router.post('/', async (req, res) =>{
    const { artist, album, imagePath }= req.body;
    //const imagePath = '/uploads/' + req.file.filename;
    const newMusic =  new Music({artist, album, imagePath });
    console.log(newMusic)
    await newMusic.save();
    res.json({'message': 'Music saved'});
});

router.delete('/:id', async (req, res) =>{
    const music = await Music.findByIdAndDelete(req.params.id);
    res.json({message: 'Music deleted'});
});
module.exports = router;