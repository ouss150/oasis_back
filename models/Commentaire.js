const mongose = require("mongoose");
const Schema = mongose.Schema();

const CommentaireScheme = Schema({
    message : String,
    destinataire : {
        type : mongose.Types.ObjectId,
        ref : "User",
    },
    expediteur : {
        type : mongose.Types.ObjectId,
        ref : "User",   
    }

});