//Defining routes for the server, we will require the method router from express
const { Router } = require('express');
const router = Router(); //executing 


router.get('/', (req, res) => res.json({text: 'Hello humans'}));

module.exports = router;