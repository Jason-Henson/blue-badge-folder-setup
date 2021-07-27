let express = require('express');
const app = express();
let journal = require("./controllers/journalcontroller");


// app.use("/test", function(req,res){
//     res.send("This is a message form the test endpoint on the server")
// })

// app.use("/jason", (req, res) => {
//     res.send("My name is Jason and I am twee years old... duh")
// })

// Have endpoint of journal/practice
//send a response from taht end point (this is a practice route)

app.use('/journal', journal);

app.listen(3000, function() {
    console.log("App is listening on port 3000");
});