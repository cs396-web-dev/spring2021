"use strict";

require("dotenv").config();
const env = "" + process.env.NODE_ENV;
console.log("ENV: " + env);

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const bpConfig = {
    limit: "10mb",
    extended: true
};
app.use(bodyParser.urlencoded(bpConfig));
app.use(bodyParser.json(bpConfig));

const middleware = require("./config/middleware");
app.use(middleware.cors);

const config = require("./config/config")[env || "development"];
const mongoose = require("mongoose");
mongoose.connect(config.database, config.mongoConfig, err => {
    console.log("Trying to connect to database...")
    if (err) {
        console.log("Could not connect to database.");
    } else {
        console.log(`Connected to ${process.env.DB_NAME}.`);
    }
});

const routes = require("./src/routes");
app.use("", routes);

const PORT = process.env.PORT || 8081;
app.listen(PORT);
console.log("Application listening on PORT: " + PORT);

module.exports = app;
