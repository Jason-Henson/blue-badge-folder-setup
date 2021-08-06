let express = require('express');
let router = express.Router(); 
let validateSession = require('../middleware/validate-session');
const Journal = require('../db').import('../models/journal');

router.get('/practice', validateSession, (req, res) => {
    res.send('Hey!! this is a practice route')
});

/* **************************
*** JOURNAL CREATE ***
*************************** */
router.post('/create', validateSession, (req, res) => {
    const journalEntry = {
        title: req.body.journal.title,
        date: req.body.journal.date,
        entry: req.body.journal.entry,
        owner: req.user.id
    }
    Journal.create(journalEntry)
        .then(journal => res.status(200).json(journal))
        .catch(err => res.status(503).json({ error: err }))
})

/* **************************
*** GET ALL ENTRIES ***
*************************** */
router.get('/', (req, res) => {
    Journal.findAll()
        .then(journals => res.status(200).json(journals))
        .catch(err => res.status(500).json({ error: err }))
});
/* **************************
*** GET ALL ENTRIES ***
*************************** */
router.get('/mine', validateSession, (req, res) => {
    let userid = req.user.id
    Journal.findAll({
        where: { owner: userid }
    })
    .then(journals => res.status(200).json(journals))
    .catch(err => res.status(500).json({ error: err }))
});

/* **************************
*** GET ALL ENTRIES ***
*************************** */
router.get('/:title', (req, res) => {
    let title = req.params.title;

    Journal.find({
        where: { title: title }
    })
    .then()
})

module.exports = router;