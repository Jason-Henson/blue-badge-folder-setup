let router = require('express').Router();

router.post('/add', (req, res) => {
    const { number1, number2 } = req.body;

    let response = { total: Number(number1) + Number(number2) };
    res.json(response);
});  

router.post('/subtract', (req, res) => {
    const { number3, number4 } = req.body; 

    let reponse = { total: Number(number3) - Number(number4) };
    res.json(response); 
});

module.exports = router; 