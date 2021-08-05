let express = require('express');
// const { restart } = require('nodemon');
let router = express.Router(); 
// new code 12.2.2
let validateSession = require('../middleware/validate-session');

router.get('/practice', validateSession, (req, res) => {
    res.send('Hey!! this is a practice route')
});

module.exports = router;