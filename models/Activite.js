const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActiviteSchema = new Schema({
    name: String,
    description : String
})

const ActiviteModel = mongoose.model("Activite", ActiviteSchema);

module.exports= ActiviteModel;