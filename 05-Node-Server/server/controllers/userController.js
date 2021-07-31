const { restart } = require('nodemon');

const router = require('express').Router();
const User = require('../db').import('../models/user.js');

/* ******************
 *** USER CREATE ***
******************* */ 

router.post('/create', (req, res) => {

    User.create({
        email: req.body.user.email,
        password: req.body.user.password
    })
    .then(
        function createSuccess(user) {
            res.json({
                user: user
            });
        }
    )
    .catch(err => res.status(500).json({ error: err }))
});

/* ******************
 *** USER SIGNIN ***
******************* */ 

router.post('/login', (req, res) => {

    User.findOne({
        where: {
            email: req.body.user.email
        }
    })

        .then(function loginSuccess(user) {
            if (user) {
                res.status(200).json({
                    user: user
                })
            } else {
                res.status(500).json({ error: 'User does not exist.'})
            }
        })
        .catch(err => res.status(500).json({ error: err }))
}); 

// router.post('/login', (req, res) => {
//     User.findOne({ where: { email: req.body.user.email } }).then(function loginSuccess(user) {
//         if(user){
//             res.status(200).json({ user: user });
//         } else {
//             res.status(500).json('The email address you entered was not found');
//         }  
//     });                 
// });

module.exports = router; 