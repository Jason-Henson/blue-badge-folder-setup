let express = require('express');
const app = express();
const sequelize = require('./db');
let journal = require("./controllers/journalcontroller");

sequelize.sync();

app.use('/journal', journal);
app.listen(3000, function() {
    console.log("App is listening on port 3000");
});