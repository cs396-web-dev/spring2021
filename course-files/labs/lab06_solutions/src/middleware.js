require("dotenv").config()
const jwt = require("jsonwebtoken");


const cors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
    next();
};

const authenticateToken = (req, res, next) => {
    /* STEPS
    1. get the token sent from the user,
    2. verify that this is the correct user, and
    3. pass that user to the route
    */
    const authHeader = req.headers['authorization'] // BEARER TOKEN
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
        res.sendStatus(401);
    }

    // verify the token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            // invalid token. you don't have access:
            //res.sendStatus(403);
            res.redirect('/login.html');
        }
        req.user = user;
        next();
    });
     
};

module.exports = {
    cors: cors,
    authenticateToken: authenticateToken
};