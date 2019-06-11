// Dependencies
const express = require("express");
const router = express.Router();
const path = require("path");
const request = require("request");
const cheerio = require("cheerio");
const Comment = require("../models/Comments");
const Article = require("../models/Articles");


