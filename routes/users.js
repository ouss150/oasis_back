var express = require('express');
var router = express.Router();
const usermodel=require("../models/Users");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const AllUsers=await usermodel.find();
  res.json(AllUsers);
});

router.get('/getOne/:id', async function(req, res, next) {
  const user=await usermodel.findById(req.params.id);
  res.json(user);
});

router.post('/create', async function(req, res, next) {
  const UserCreated=await usermodel.create(req.body);
  res.json(UserCreated);
}); 

router.delete('/delete/:id', async function(req, res, next) {
  const userDeleted=await usermodel.findByIdAndDelete(req.params.id);
  res.json(userDeleted);
}); 

router.patch('/edit/:id', async function(req, res, next) {
  const userUpdated=await usermodel.findByIdAndUpdate(req.params.id, req.body);
  res.send("ouss");
});

module.exports = router;
