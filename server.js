// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

// Initialize Express
const app = express();

app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(express.static(process.cwd() + "/public"));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set("view engine", "handlebars");

// Mongoose connection
const MONGODB_URI = (process.env.MONGODB_URI || "mongodb://localhost/News-Scraping");
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;
// db err catcher
db.on('error', console.error.bind(console, "connection error"));
db.once("open", function() {
  console.log("Connected to Mongoose");
});

// Port
app.listen(3000, function() {
  console.log("App running on port 3000!");
});