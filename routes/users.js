var express = require('express');
var router = express.Router();
const usermodel=require("../models/Users");
const commentaireModel=require("../models/Commentaire");

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
	await commentaireModel.deleteMany({ 'auteur' : req.params.id})
	const userDeleted=await usermodel.findByIdAndDelete(req.params.id);
	res.json(userDeleted);
}); 

router.patch('/edit/:id', async function(req, res, next) {
	const user = req.body;
	//if (req.file) user.avatar = req.file.path; // on associe l'image stockée sur cloudinary à l'user à insérer en base de données
	if (
		!user.name ||
		!user.civilite ||
		!user.prenom ||
		// !user.password ||
		// !user.email ||
		!user.telephone ||
		!user.adresse
	) {
		return res.status(422).json({
			msg: "Merci de remplir tous les champs requis.",
			level: "warning",
		});
	} else {
		try {
			const userUpdated = await usermodel.findByIdAndUpdate(req.params.id, user, {new : true});
			return res.json(userUpdated);
			
		} catch (err) {next(err)}
	}
});

module.exports = router;
