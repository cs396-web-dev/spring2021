const process = require("process");
require("dotenv").config();
const env = "" + process.env.NODE_ENV;
const configObj = require("../../config/config")
const config = configObj[env || "development"];
const mongoose = require("mongoose");
const resetDB = require("../../config/scripts/populateDB");
const axios = require("axios");
const Doctor = require("../../src/schema/Doctor");
const Companion = require("../../src/schema/Companion");


const Utils = function () {

    this.fixtures = {};

    this.mockDoctor = {
        "name": "Wonder Woman",
        "seasons": [3, 4, 5, 6]
    };

    this.mockCompanion = {
        "name": "Sponge Bob",
        "character": "Square Pants",
        "seasons": [99, 100, 101, 102],
        "alive": true
    };

    this.mockId = "this_is_a_fake_id";

    this.mockPatchData = {
        name: "new_name",
        seasons: [0]
    };
    this.pickRandomNumber = function (min, max) { 
        return Math.floor(Math.random() * (max - min) + min);
    };
    
    this.simplify = function (item) {
        const newItem = JSON.parse(JSON.stringify(item));
        delete newItem._id;
        delete newItem.__v;
        delete newItem.doctors;
        delete newItem.doc_id;
        delete newItem.old_doctor_ids;
        return newItem;
    };

    this.mockPatchCompanion = {
        name: "new_name",
        "seasons": [12, 13],
        "character": "Zer0",
    };

    this.route = function (route) {
        const endpoint = (process.env.CURRENT_ENDPOINT || "http://localhost:8081") + route;
        // console.log('ENDPOINT:', endpoint);
        return endpoint;
    };

    this.testImplemented = function(response, done) {
        if (response.status === 501) {
            done("Status code 501 received: Not Implemented.");
        }
    };

    this.areArraysEqual = function (a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    };

    this.areSameDoctorsInBothArrays = function (actual, expected) {
        const matched = actual.filter(a => {
            const matches = expected.filter(b => {
                return a.name == b.name && 
                    JSON.stringify(a.seasons) === JSON.stringify(b.seasons);
            });
            return matches.length === 1;
        });
        return matched.length === expected.length;
    };

    this.areSameCompanionsInBothArrays = function (actual, expected) {
        const matched = actual.filter(a => {
            const matches = expected.filter(b => {
                return a.name == b.name && 
                    JSON.stringify(a.seasons) === JSON.stringify(b.seasons) &&
                    a.alive == b.alive && 
                    a.character == b.character;
            });
            return matches.length === 1;
        });
        return matched.length === expected.length;
    };
    
    this.expect404 = function (url, done) {
        // Note: the superagent doesn't allow us to test for 404
        // directly so there's an additional error handling chain
        // to account for it. See this thread:
        // https://github.com/chaijs/chai-http/issues/75
    
        // console.log(url);
        axios.get(this.route(url))
            .then(response => {
                expect(response.status).to.equal(404);
                done();
            })
            .catch(err => {
                if (err.response && err.response.status == 404) {
                    done();
                } else {
                    throw err;
                }
            })
            .catch(err => done(err));
    }.bind(this);

    this.resetDB = resetDB;

    this.connectToDB = async function () {
        await mongoose.connect(config.database, config.mongoConfig, err => {
            if (err) {
                console.log("Could not connect to database.");
            }
        });
    };
    this.setDoctor = async function () {
        const doc = await Doctor.findOne({"name": "Tom Baker"});
        this.fixtures.doctor = doc;
        this.fixtures.doctorD4 = doc;
    };
    this.setDoctorD11 = async function () {
        const doc = await Doctor.findOne({"name": "Matt Smith"});
        this.fixtures.doctorD11 = doc;
    };
    this.setDoctorD9 = async function () {
        const doc = await Doctor.findOne({"name": "Christopher Eccelson"});
        this.fixtures.doctorD9 = doc;
    };
    this.setCompanion = async function () {
        const companion = await Companion.findOne({"name": "Elisabeth Sladen"});
        this.fixtures.companion = companion;
    };
    this.setCompanionSS = async function () {
        const companionSS = await Companion.findOne({"name": "Sarah Sutton"});
        this.fixtures.companionSS = companionSS;
    };
    this.initFixtures = (function (done) {
        this.connectToDB()
            .then(this.setDoctor.bind(this))
            .then(this.setDoctorD9.bind(this))
            .then(this.setDoctorD11.bind(this))
            .then(this.setCompanion.bind(this))
            .then(this.setCompanionSS.bind(this))
            .then(done);
    }).bind(this);
};
module.exports = new Utils();