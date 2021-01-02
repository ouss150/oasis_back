var express = require('express');
var router = express.Router();
const lieumodel=require("../models/Lieu");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const AllLieu=await lieumodel.find();
  res.json(AllLieu);
});

router.post('/create', async function(req, res, next) {
  const LieuCreated=await lieumodel.create(req.body);
  res.json(LieuCreated);
});

router.delete('/delete/:id', async function(req, res, next) {
  const lieuDeleted=await lieumodel.findByIdAndDelete(req.params.id);
  res.json(lieuDeleted);
});

router.patch('/edit/:id', async function(req, res, next) {
  const lieuUpdated=await lieumodel.findByIdAndUpdate(req.params.id, req.body);
  res.json(lieuUpdated);
});

module.exports = router;
