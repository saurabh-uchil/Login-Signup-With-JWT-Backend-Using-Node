require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const createConnection  = require('./helper/mongooseConnection');

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

//Port from .env
const port = parseInt(process.env.PORT);

app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173', // The frontend URL (adjust as needed)
    credentials: true, // Allow cookies to be sent
};
app.use(cors(corsOptions));

app.use(cookieParser());

//Routers
const login = require('./routes/loginRouter');
const register = require('./routes/registerRouter');
const verify = require('./routes/verifyRouter');
const posts = require('./routes/postsRouter');

//Create the db connection
createConnection();


const authenticateToken = (token) =>{
   let isVerified; 
   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          isVerified =  false;
        } 
        else {
          console.log(JSON.stringify(decoded));
          isVerified = true;
        }
      });
    return isVerified;
}

app.get("/verifyToken", (req, res)=>{
    const authenticated = authenticateToken(req.headers.token);
    console.log(req.headers.token);
    res.send("User is authenticated: "+ JSON.stringify(authenticated));
});


//Routes
app.use('/login', login);
app.use('/register', register);
app.use('/verify', verify);
app.use('/posts', posts)

app.listen(port, ()=>{
    try{
        console.log(`App listening on port: ${port}`);
    }
    catch(error){
        console.log("Error: "+error);
    }
});