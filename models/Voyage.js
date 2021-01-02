const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoyageSchema = new Schema({
    name: String,
    lieux : {
        type: Schema.Types.ObjectId,
        ref: "Lieu"
    },
    activites : {
        type: Schema.Types.ObjectId,
        ref: "Activite"
    },
    devise: String,
    prix_voyageur: Number,
})

const VoyageModel = mongoose.model("Voyage", VoyageSchema);

module.exports= VoyageModel;