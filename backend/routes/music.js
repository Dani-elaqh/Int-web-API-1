//Defining routes for the server, we will require the method router from express
const { Router } = require('express');
const router = Router(); //executing 

const Music = require('../models/Musica');


router.get('/', async (req, res) => {
    const music = await Music.find();
    res.json(music);
});

router.post('/', async (req, res) =>{
    const { artist, album }= req.body;
    const newMusic =  new Music({artist, album })
    await newMusic.save();
    res.json({message: 'Music saved'});
});

//router.delete()
module.exports = router;