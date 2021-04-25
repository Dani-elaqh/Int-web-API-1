//Defining routes for the server, we will require the method router from express
const { Router } = require('express');
const router = Router(); //executing 

const Music = require('../models/musica');


router.get('/', async (req, res) => {
    const musics = await Music.find();
    res.json(musics);
});

router.post('/', async (req, res) =>{
    const { artist, album} = req.body;
    new Music({artit, album })
    res.send('received')
})

module.exports = router;