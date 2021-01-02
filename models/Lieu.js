const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LieuSchema = new Schema({
    name: String,
    info_geo : {
        nom_ville: String,
        pays: String
    },
    geo_loc : {
        lat: String,
        lng: String
    },
    images: [String]
})

const LieuModel = mongoose.model("Lieu", LieuSchema);

module.exports = LieuModel;