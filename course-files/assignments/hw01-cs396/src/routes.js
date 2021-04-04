"use strict";

const Companion = require("./schema/Companion");
const Doctor = require("./schema/Doctor");

const express = require("express");
const router = express.Router();

router.route("/")
    .get((_req, res) => {
        console.log("GET /");
        res.status(200).send({
            data: "App is running."
        });
    });

// ---------------------------------------------------
// Edit below this line
// ---------------------------------------------------

const data = require("../config/data.json");

router.route("/doctors")
    .get((_req, res) => {
        console.log("GET /doctors");
        res.status(501).send();
    })
    .post((req, res) => {
        console.log("POST /doctors");
        res.status(501).send();
    });

router.route("/doctors/:id")
    .get((req, res) => {
        console.log(`GET /doctors/${req.params.id}`);
        res.status(501).send();
    })
    .patch((req, res) => {
        console.log(`PATCH /doctors/${req.params.id}`);
        res.status(501).send();
    })
    .delete((_req, res) => {
        console.log(`DELETE /doctors/${req.params.id}`);
        res.status(501).send();
    });

router.route("/doctors/:id/companions")
    .get((req, res) => {
        console.log(`GET /doctors/${req.params.id}/companions`);
        res.status(501).send();
    });

// router.route("/doctors/:id/companions/longest")
//     .get((req, res) => {
//         console.log("GET /doctors/:id/companions/longest");
//         res.status(501).send();
//     });

router.route("/doctors/:id/goodparent")
    .get((req, res) => {
        console.log("GET /doctors/:id/goodparent");
        res.status(501).send();
    });

router.route("/companions")
    .get((_req, res) => {
        console.log("GET /companions");
        res.status(501).send();
    })
    .post((req, res) => {
        console.log("POST /companions");
        res.status(501).send();
    });

router.route("/companions/:id")
    .get((_req, res) => {
        console.log(`GET /companions/${req.params.id}`);
        res.status(501).send();
    })
    .patch((req, res) => {
        console.log(`PATCH /companions/${req.params.id}`);
        res.status(501).send();
    })
    .delete((_req, res) => {
        console.log(`DELETE /companions/${req.params.id}`);
        res.status(501).send();
    });

router.route("/companions/:id/doctors")
    .get((req, res) => {
        console.log(`GET /companions/${req.params.id}/doctors`);
        res.status(501).send();
    });

router.route("/companions/:id/friends")
    .get((req, res) => {
        console.log(`GET /companions/${req.params.id}/friends`);
        res.status(501).send();
    });

router.route("/companions/crossover")
    .get((_req, res) => {
        console.log(`GET /companions/crossover`);
        res.status(501).send();
    });

router.route("/doctors/:id/favorite")
    .get((req, res) => {
        console.log(`GET /doctors/${req.params.id}/favorite`);
        res.status(501).send();
    })
    .post((req, res) => {
        console.log(`POST /doctors/${req.params.id}/favorite`);
        res.status(501).send();
    })
    .delete((req, res) => {
        console.log(`DELETE /doctors/${req.params.id}/favorite`);
        res.status(501).send();
    });

router.route("/companions/:id/favorite")
    .get((req, res) => {
        console.log(`GET /companions/${req.params.id}/favorite`);
        res.status(501).send();
    })
    .post((req, res) => {
        console.log(`POST /companions/${req.params.id}/favorite`);
        res.status(501).send();
    })
    .delete((req, res) => {
        console.log(`DELETE /companions/${req.params.id}/favorite`);
        res.status(501).send();
    });

module.exports = router;
