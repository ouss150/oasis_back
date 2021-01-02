const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: String,
    civilite: String,
    prenom: String,
    password: String,
    email: String,
    telephone : String,
    adresse: String
})

const UsersModel = mongoose.model("Users",UsersSchema);

module.exports= UsersModel;