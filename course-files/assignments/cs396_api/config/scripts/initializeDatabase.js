"use strict";

require("dotenv").config();
const env = "" + process.env.NODE_ENV;

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

// Wipe Database

// Upload all data
