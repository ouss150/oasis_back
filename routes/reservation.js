var express = require('express');
var router = express.Router();
const reservationmodel=require("../models/Reservation");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const AllReservation=await reservationmodel.find().populate("client")
  res.json(AllReservation);
});

router.get('/getOne/:id', async function(req, res, next) {
  const reservation=await reservationmodel.findById(req.params.id)
  res.json(reservation);
});

router.post('/create', async function(req, res, next) {
  const ReservationCreated=await reservationmodel.create(req.body);
  res.json(ReservationCreated);
});

router.delete('/delete/:id', async function(req, res, next) {
  const reservationDeleted=await reservationmodel.findByIdAndDelete(req.params.id);
  res.json(reservationDeleted);
});

router.patch('/edit/:id', async function(req, res, next) {
  const reservationUpdated=await reservationmodel.findByIdAndUpdate(req.params.id, req.body);
  res.json(reservationUpdated);
});


module.exports = router;
