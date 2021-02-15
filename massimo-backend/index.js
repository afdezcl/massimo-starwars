const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
};

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, options).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Welcome to Massimo-Authentication application."});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});