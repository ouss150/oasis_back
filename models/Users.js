const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: String,
    civilite: String,
    prenom: String,
    password: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    telephone : String,
    adresse: String,
    role : {
        type: String,
        enum:["admin", "user"],
        default : "user"
    }
})

const UsersModel = mongoose.model("Users",UsersSchema);

module.exports= UsersModel;