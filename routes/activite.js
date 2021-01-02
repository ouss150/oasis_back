var express = require('express');
var router = express.Router();
const activitemodel=require("../models/Activite");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const AllActivite=await activitemodel.find();
  res.json(AllActivite);
});

router.post('/create', async function(req, res, next) {
  const ActiviteCreated=await activitemodel.create(req.body);
  res.json(ActiviteCreated);
});

router.delete('/delete/:id', async function(req, res, next) {
  const activityDeleted=await activitemodel.findByIdAndDelete(req.params.id);
  res.json(activityDeleted);
});

router.patch('/edit/:id', async function(req, res, next) {
  const ActiviteUpdated=await activitemodel.findByIdAndUpdate(req.params.id, req.body);
  res.json(ActiviteUpdated);
});


module.exports = router;
