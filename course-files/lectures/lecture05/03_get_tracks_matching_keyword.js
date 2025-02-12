// note that the import paths are different because
// these answer files are in a nested "answers folder"
Track = require("./schema/Track");
utils = require("./config/utilities");

const { connectToDB, disconnectFromDB } = utils;

const getMatchingTracks = () => {
    // your code here:
    return null;
};

connectToDB
    .then(getMatchingTracks) // pass in some function that returns a promise
    .then(results => {
        // do something with the results:
        console.log('results from your query:');
        console.log(results);
    })
    .catch(err => {
        console.log("This block runs if there's an error:")
        console.log(err);
    })
    .then(disconnectFromDB);