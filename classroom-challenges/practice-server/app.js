let express = require("express");
let app = express();

app.use("/test", (req, res) => {
    let response = { message: "This is a test.  This is only a test.  Please turn up the bass on your raidio and high as possible" }

    res.json(response)
})

app.listen(3000, (req, res) => {
    console.log("App is listing on port Andre 3000")
});