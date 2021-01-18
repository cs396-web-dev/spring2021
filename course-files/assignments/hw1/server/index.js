"use strict";

const bodyParser = require("body-parser");
const express = require("express");

const routes = require("./routes");

const app = express();

const bpConfig = {
    limit: "10mb",
    extended: true
};
app.use(bodyParser.urlencoded(bpConfig));
app.use(bodyParser.json(bpConfig));

app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
    next();
});

app.use("", routes);

const PORT = process.env.PORT || 8081;
app.listen(PORT);
console.log("Application listening on PORT: " + PORT);

module.exports = app;
