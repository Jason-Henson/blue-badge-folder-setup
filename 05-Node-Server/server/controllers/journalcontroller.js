let express = require('express');
// const { restart } = require('nodemon');
let router = express.Router(); 

router.get('/practice', (req, res) => {
    res.send("This is a practice route");
});

// Challenge #1 create route journal/about

router.get('/about', (req, res) => {
    res.send('This is the about route');
});

module.exports = router;