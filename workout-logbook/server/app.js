require('dotenv').config(); 
let express = require('express'); // import dependancy of express to usee http reqeusts for later. 
const app = express();  // creates a instance of express  vaiable.  Firing off funciton allowing us to ma make and Express app.  It gives us accesss to methods and properties.  
const sequelize = require('./db');
// let user = require('./controllers/userController');
// let test = require('./controllers/testControllers');

app.use(express.json()); 
sequelize.sync();

// .use method is a middleware function that allows us tp create a pathway. 
// app.use('/user', user);
// app.use('/test', test); 

// .listen allows up to listen a specified port on the local host.   
app.listen(3000, function() {
    console.log("App is listening on port 3000");
});