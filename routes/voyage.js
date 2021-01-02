var express = require('express');
var router = express.Router();
const voyagemodel=require("../models/Voyage");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const AllVoyage=await voyagemodel.find();
  res.json(AllVoyage);
});

router.post('/create', async function(req, res, next) {
  const VoyageCreated=await voyagemodel.create(req.body);
  res.json(VoyageCreated);
});

router.delete('/delete/:id', async function(req, res, next) {
  const voyageDeleted=await voyagemodel.findByIdAndDelete(req.params.id);
  res.json(voyageDeleted);
}); 

router.patch('/edit/:id', async function(req, res, next) {
  const voyageUpdated=await voyagemodel.findByIdAndUpdate(req.params.id, req.body);
  res.json(voyageUpdated);
});


module.exports = router;
