const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    name: String,
    client : {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    voyage : {
        type: Schema.Types.ObjectId,
        ref: "Voyage"
    },
    date_aller: Date,
    date_retour: Date,

    Personne:Number,
})

const ReservationModel = mongoose.model("Reservation", ReservationSchema);

module.exports = ReservationModel;