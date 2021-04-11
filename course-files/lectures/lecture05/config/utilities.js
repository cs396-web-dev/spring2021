const mongoose = require("mongoose");
const schemas = require("../schemas");
const data = require("./data.json")
const { Artist } = schemas;
const dotenv = require("dotenv").config();
const env = process.env;

const config = {
    database: `mongodb+srv://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}/lecture05?retryWrites=true&w=majority`,
    mongoConfig: {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
};

// console.log('Here are your environment variables...');
// console.log('DB_USERNAME:', env.DB_USERNAME);
// console.log('DB_PASSWORD:', env.DB_PASSWORD);
// console.log('DB_HOST:', env.DB_HOST);

const connectToDB = new Promise((resolve, reject) => {
    mongoose.connect(config.database, config.mongoConfig, err => {
        if (err) {
            console.log("Could not connect to database." + err);
            if(reject) {
                reject(err);
            }
        } else {
            resolve('Connection successful');
        }
    });
});

const disconnectFromDB = () => {
    return mongoose.disconnect();
};

const deleteArtists = () => {
    // returns a promise:
    return Artist.deleteMany({});
};

const insertArtists = () => {
    // returns a promise:
    return Artist.insertMany(data.artists);
};

const populateDB = () => {
    connectToDB
        .then(deleteArtists)
        .then(insertArtists)
        .then(results => {
            console.log('The database has been populated.');
            // console.log('The following records have been generated:');
            console.log(results);
        })
        .then(disconnectFromDB);
};

module.exports = {
    "populateDB": populateDB,
    "connectToDB": connectToDB,
    "disconnectFromDB": disconnectFromDB
};