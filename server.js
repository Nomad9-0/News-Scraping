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
mongoose.connect("mongodb://localhost/News-Scraping");
const db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error"));
db.once("open", function() {
  console.log("Connected to Mongoose");
});

// Port
app.listen(3000, function() {
  console.log("App running on port 3000!");
});