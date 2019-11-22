const express = require('express');
const router = express.Router();

const Survey = require('../models/survey');
const Product = require('../models/product');

router.get('/', async (req, res) => {
    res.render('index');
});

// SURVEYS
router.get('/surveys', async (req, res) => {
    console.log('here');
    const surveys = await Survey.find();
    res.render('surveys', { surveys });
});

router.get('/survey/new', async (req, res) => {
    const products = await Product.find();
    res.render('survey_new', { products });
});

router.post('/survey/new', async (req, res) => {
    const survey = new Survey(req.body);
    await survey.save();
    res.render('index');
});

// PRODUCTS
router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.render('products', { products });
});

router.get('/product/new', async (req, res) => {
    res.render('product_new');
});

router.post('/product/new', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.render('index');
});

router.get('/product/delete/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product) product.remove();
    const products = await Product.find();
    res.render('products', { products });
});

module.exports = router;
