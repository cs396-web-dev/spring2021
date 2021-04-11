"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: { type: Schema.Types.String, required: true },
    genres: { type: [Schema.Types.String], required: true }
});

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = {
    "Artist": Artist
}