"use strict";

const Companion = require("../../src/schema/Companion");
const Doctor = require("../../src/schema/Doctor");
const data = require("../data.json");
require("dotenv").config();

const env = "" + process.env.NODE_ENV;

const configObj = require("../config");
const config = configObj[env || "development"];
const mongoose = require("mongoose");

const clone = item => JSON.parse(JSON.stringify(item));

const populate = (callback) => {
    // console.log(config.database);
    // console.log("Trying to connect to database...");
    mongoose.connect(config.database, config.mongoConfig, err => {
        if (err) {
            console.log("Could not connect to database.");
        }
        // console.log("Clearing database...");
        const schemas = [ Companion, Doctor ];
        Promise
            .all(
                // first delete any data that currently exists:
                schemas.map(schema => schema.deleteMany())
            )
            .then(() => {
                // console.log("Populating database...");
                // then create all of the doctors:
                return Promise.all(
                    // Each of these database commits is 
                    // issued asynchronously. The Promise.all
                    // waits 'til all have completed before moving on...
                    data.doctors.map(obj => {
                        obj.doc_id = obj._id; // important to map the relationships between doc and companion
                        return Doctor.create(obj).save()
                    })
                );
            })
            .then(doctors => {
                // create a lookup table of previous doc ids -> auto-generated ids:
                const docIdLookup = {};
                doctors.forEach(doc => {
                    docIdLookup[doc.doc_id] = doc;
                });
                return docIdLookup;
            })
            .then((docIdLookup) => {
                return Promise.all(
                    // then create all of the companions:
                    data.companions.map(obj => {
                        const item = clone(obj)
                        const docIds = item.doctors.map(id => {
                            return '' + docIdLookup[id]._id
                        });
                        item.doctors = docIds;
                        return Companion.create(item).save();
                    })
                );
            })
            .catch(err => {
                console.log(err);
                process.exit(1);
            })
            .finally(() => {
                // console.log("Database populated successfully.");
                if (callback) {
                    callback();
                    // process.exit(0);
                } else {
                    console.log('Exiting');
                    process.exit(0);
                }
            });
    });
};

module.exports = populate;
