const mongose = require("mongoose");
const Schema = mongose.Schema;

const CommentaireSchema = Schema({
    message : String,
    auteur : {
        type : mongose.Types.ObjectId,
        ref : "Users",
    },
    article : {
        type : mongose.Types.ObjectId,
        ref : "Article",
    },
});

const CommentaireModel = mongose.model("Commenentaire", CommentaireSchema);

module.exports= CommentaireModel;