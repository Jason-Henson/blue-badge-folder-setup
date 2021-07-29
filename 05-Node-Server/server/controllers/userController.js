// let express = require('express');
// let router = express.Router(); 
// let sequelize = require('../db');
// let User = sequelize.import('../models/user.js');



const router = require('express').Router();
const User = require('../db').import('../models/user.js');
module.exports = router; 