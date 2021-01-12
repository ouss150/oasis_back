const router = new require("express").Router();
const commentaireModel = require('../models/Commentaire');

router.get('/', async (req, res) => {
    const commentaire = await commentaireModel.find().populate('article').populate('auteur');
    res.json(commentaire)
})

router.get('/getOne/:id', async (req, res) => {
    const commentaire = await commentaireModel.findById(req.params.id);
    res.json(commentaire);
})

router.post('/create', async (req, res) => {
    const commentaireCreated = await commentaireModel.create(req.body);
    res.json(commentaireCreated);
})

router.patch('/update/:id', async (req, res) => {
    const commentaireUpdated = await commentaireModel.findByIdAndUpdate(req.params.id, req.body);
    res.json(commentaireUpdated)
})


router.delete('/delete/:id', async (req, res) => {
    const commentaireDeleted = await commentaireModel.findByIdAndDelete(req.params.id);
    res.json(commentaireDeleted);
})

router.get('/getByArticle/:id', async (req, res) => {
    const allCommentaires = await commentaireModel.find().populate('article').populate('auteur');
    const articleId = req.params.id
    const filteredCommentaires = allCommentaires.filter(commentaire => commentaire.article._id == articleId)
    res.json(filteredCommentaires);
})

router.get('/getByUser/:id', async (req, res) => {
    const allCommentaires = await commentaireModel.find().populate('article').populate('auteur');
    const userid = req.params.id
    const filteredCommentaires = allCommentaires.filter(commentaire => commentaire.auteur._id == userid)
    res.json(filteredCommentaires);
})

module.exports = router