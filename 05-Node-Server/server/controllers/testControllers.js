// let express = require('express');
// let router = express.Router(); 
// let sequelize = require('../db');
// let Test = sequelize.import('../models/user.js');

let router = require("express").Router(); // Router methid returns and object that contains/allows ups to use HTTP requests 

/*
-POST
-PUT
-DELETE
-GET
*/

// grabbing router, using the post method (which allows us to "post" to the db. Storing info for lter)
router.post("/post", (req, res) => {
    let response = { message: "This is from a post request" }; 
    res.json(response); 
})

module.exports = router; // exporting the moduels for usages outside of this file. 