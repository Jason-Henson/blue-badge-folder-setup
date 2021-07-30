const router = require('express').Router();
const User = require('../db').import('../models/user.js');

router.post('/create', (req, res) => {    

    let userModel = { 
        email: req.body.user.email,
        password: req.body.user.email
    };
    User.create(userModel).then(res.send("This is our user create endpoint"));
});

module.exports = router; 