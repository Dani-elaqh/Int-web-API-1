//Defining routes for the server, we will require the method router from express
const { Router } = require('express');
const router = Router(); //executing 

const Music = require('../models/musica');


router.get('/', async (req, res) => {
    const musics = await Music.find();
    res.json(musics);
});

router.post('/', async (req, res) =>{
    const { artist, album }= req.body;
    const newMusic =  new Music({artist, album })
    await newMusic.save();
    res.json({message: 'Music saved'});
});

router.delete()
module.exports = router;