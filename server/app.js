const express = require("express");
const http = require("http");
const path = require('path');
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const config = require('./config/database');


// connect To Database
mongoose.connect(config.database);


mongoose.connection.on('connected', ()=>{
    console.log('connnected to databse' + config.database);
})


mongoose.connection.on('error', (err)=>{
    console.log('Databse error : ' + err)
})


const app = express();

const port = process.env.PORT || 3001;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
routes(app);

app.listen(port, ()=>{
    console.log(`app is listening on port: ${port}`);
})