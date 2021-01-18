"use strict";

const express = require("express");

const router = express.Router();

router.route("/")
    .get((_req, res) => {
        res.status(200).send({
            data: "App is running."
        });
    });

// ---------------------------------------------------
// Edit below this line
// ---------------------------------------------------

const data = require("./data");

router.route("/doctor")
    .get((_req, res) => {})
    .post((req, res) => {});

router.route("/doctor/:id")
    .get((req, res) => {})
    .patch((req, res) => {})
    .delete((_req, res) => {});

router.route("/doctor/:id/companions")
    .get((req, res) => {});

router.route("/doctor/:id/companions/longest")
    .get((req, res) => {});

router.route("/doctor/:id/goodparent")
    .get((req, res) => {});

router.route("/companion")
    .get((_req, res) => {})
    .post((req, res) => {});

router.route("/companion/:id")
    .get((_req, res) => {})
    .patch((req, res) => {})
    .delete((_req, res) => {});

router.route("/companion/:id/doctors")
    .get((req, res) => {});

router.route("/companion/:id/friends")
    .get((req, res) => {});

router.route("/companion/crossover")
    .get((_req, res) => {});

router.route("/doctor/:id/favorite")
    .get((req, res) => {})
    .post((req, res) => {})
    .delete((req, res) => {});

router.route("/companion/:id/favorite")
    .get((req, res) => {})
    .post((req, res) => {})
    .delete((req, res) => {});

module.exports = router;
