const router = new require("express").Router();
const ArticleModel = require('../models/Article');

router.get('/', async (req, res) => {
    const allArticle = await ArticleModel.find();
    res.json(allArticle)
})

router.get('/getOne/:id', async (req, res) => {
    const article = await ArticleModel.findById(req.params.id);
    res.json(article);
})

router.post('/create', async (req, res) => {
    const articleCreated = await ArticleModel.create(req.body);
    res.json(articleCreated);
})

router.patch('/update/:id', async (req, res) => {
    const articleUpdated = await ArticleModel.findByIdAndUpdate(req.params.id, req.body);
    res.json(articleUpdated)
})

router.post('/delete/:id', async (req, res) => {
    const articleDeleted = await ArticleModel.findByIdAndDelete(req.params.id);
    res.json(articleDeleted);
})

module.exports = router