const mongose = require("mongoose");
const Schema = mongose.Schema;

const CommentaireSchema = Schema({
    message : String,
    ajoute_le : Date,
    auteur : {
        type : mongose.Types.ObjectId,
        ref : "Users",
    },
    article : {
        type : mongose.Types.ObjectId,
        ref : "Article",
    },
});

const CommentaireModel = mongose.model("Commentaire", CommentaireSchema);

module.exports= CommentaireModel;