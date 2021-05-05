"use strict";

const express = require("express");
const router = express.Router();
const utils = require("../config/utilities");
const User = require("./schema/User");
const Task = require("./schema/Task");
const { 
    deleteUsers, deleteTasks, insertUsers, insertTasks 
} = utils;


router.route("/")
    .get((_req, res) => {
        console.log("GET /");
        res.status(200).send({
            data: "App is running."
        });
    });

///////////////////////////////
// Your code below this line //
///////////////////////////////

router.route("/tasks")
    .get((_req, res) => {
        // implemented for you:
        console.log("GET /tasks");
        Task.find({})
            .then(tasks => {
                res.status(200).send(tasks);
            })
    })
    .post((req, res) => {
        console.log("POST /tasks");
        res.status(501).send();
    });

router.route("/artists/:id")
    .get((req, res) => {
        console.log(`GET /tasks/${req.params.id}`);
        res.status(501).send();
    })
    .patch((req, res) => {
        console.log(`PATCH /tasks/${req.params.id}`);
        res.status(501).send();
    })
    .delete((req, res) => {
        console.log(`DELETE /tasks/${req.params.id}`);
        res.status(501).send();
    });


router.route("/users")
    .get((_req, res) => {
        console.log("GET /users");
        // implemented for you:
        User.find({})
            .then(users => {
                res.status(200).send(users);
            })
    })
    .post((req, res) => {
        console.log("POST /users");
        res.status(501).send();
    });

router.route("/users/:id")
    .get((req, res) => {
        console.log(`GET /users/${req.params.id}`);
        res.status(501).send();
    })
    .patch((req, res) => {
        console.log(`PATCH /users/${req.params.id}`);
        res.status(501).send();
    })
    .delete((req, res) => {
        console.log(`DELETE /users/${req.params.id}`);
        res.status(501).send();
    });



///////////////////////////////
// Your code above this line //
///////////////////////////////
router.route("/reset")
    .get((_req, res) => {
        deleteTasks()
            .then(results => {
                console.log('All tasks have been deleted from the database.');
            })
            .then(deleteUsers)
            .then(results => {
                console.log('All users have been deleted from the database.');
            })
            .then(insertUsers)
            .then(results => {
                console.log(results.length + ' users have been inserted into the database.');
            })
            .then(insertTasks)
            .then(results => {
                console.log(results.length + ' tasks have been inserted into the database.');
                res.status(200).send({
                    message: "Data has been reset."
                });
            });
    });
module.exports = router;