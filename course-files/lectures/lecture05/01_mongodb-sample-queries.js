schemas = require("./schemas");
utils = require("./config/utilities");

const { Artist } = schemas;
const { connectToDB, disconnectFromDB } = utils;

const filterByProperty = () => {
    // returns a promise that resolves to a list of documents
    return Artist.find({name: "Beyonce"});
};

const findById = () => {
    // returns a promise that resolves to a single document
    return Artist.findById("60737a44690fbabe460e1a06");
}

connectToDB
    .then(findById) // your query goes here; 
    .then(results => {
        // do something with the results:
        console.log('results from your query:');
        console.log(results);
    })
    .then(disconnectFromDB);

    

