const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/MyApp?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.0"

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const atlasUrl = `mongodb+srv://${username}:${password}@myapp.8cu7vn0.mongodb.net/MyApp?retryWrites=true&w=majority`;

const createConnection = () =>{
console.log(atlasUrl);     
mongoose.connect(atlasUrl)
.then((response)=>{
    console.log("Connected to db... ");
})
.catch((error)=>{
    console.log("Mongoose Error: "+error);
});
}

module.exports = createConnection;