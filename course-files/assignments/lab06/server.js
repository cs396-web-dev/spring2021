const express = require("express");
const path = require("path");

const app = express();
app.use(express.json({ extended: true }));
app.use("/", express.static("./static/"));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/initialize", (req, res) => {
    // clearCookies(req, res);
    if (Object.keys(req.cookies).length === 0) {
        res.cookie("cookies", 0)
           .cookie("robots", 0)
           .cookie("factories", 0);
    }
    res.send();
});

// The "n" parameter indicates the number of cookies to add
app.put("/cookie/:n", (req, res) => {
    const numCookies = +req.cookies.cookies + +req.params.n;
    res.cookie("cookies", numCookies).send();
});

app.put("/robot", (req, res) => {
    const cookies = req.cookies;
    res.cookie("robots", cookies.robots + 1)
       .cookie("cookies", cookies.cookies - 20)
       .send();
});

app.put("/factory", (req, res) => {
    const cookies = req.cookies;
    res.cookie("factories", cookies.factories + 1)
       .cookie("cookies", cookies.cookies - 200)
       .send();
});

function clearCookies(req, res) {
    for (const key of Object.keys(req.cookies)) {
        res.clearCookie(key);
    }
}

const PORT = process.env.PORT || 8081;
app.listen(PORT);
console.log("Application listening on PORT: " + PORT);
