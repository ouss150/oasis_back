const mongose = require("mongoose");
const Schema = mongose.Schema;

const ArticleSchema = Schema({
    titre : String,
    description : String,
    auteur : {
        type : mongose.Types.ObjectId,
        ref : "Users",
    },
    lieu : {
        type : mongose.Types.ObjectId,
        ref : "Lieu",
    },
});

const ArticleModel = mongose.model("Article", ArticleSchema);

module.exports= ArticleModel;