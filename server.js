const express = require('express'); //import/require express 
const mongoose = require('mongoose'); //communicate to mondoDB connection through mongoose
const bodyParser = require('body-parser'); 
//body-parser is used to convert json format information into javascript object.
//Because server can't identify json format informations.
const cors = require('cors');

const app = express(); // create app constructor to make express appliaction as a server

const postRoutes = require('./routes/posts'); //import Post Routes

app.use(bodyParser.json()); //app Middleware (use body-parser to "const app")
app.use(cors()); //import CORS to prevent browser blocking (due to security reasons) when communicating with different ports
app.use(postRoutes); //use Post Routes to "const app" 

const PORT = 8000; // define a port for run server
const DB_URL = 'mongodb+srv://dinuka:dinukamongo@merncrudcluster.gn6ydaw.mongodb.net/mernCrudDB?retryWrites=true&w=majority';

//Connect to database through database connection(DB_URL)
mongoose.set('strictQuery', false);

mongoose.connect(DB_URL)
.then(() => {console.log('Database connected success')})

.catch((err) => console.log('Database connection', err));


//listen the app to run server using port 8000
app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
})

//then apply nodemon for restart server automatically, when we are changing the codes. for that write a new script in package.json file.
//("start": "nodemon server.js") apply this script in package.json. then start the server (npm start). 
//Now the server is running through "nodemon"

