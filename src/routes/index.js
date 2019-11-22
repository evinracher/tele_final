const express = require('express');
const router = express.Router();

const Survey = require('../models/survey');
const Product = require('../models/product');

router.get('/', async (req, res) => {
    res.render('index');
});

// SURVEYS
router.get('/surveys', async (req, res) => {
    const surveys = await Survey.find();
    res.render('surveys', { surveys });
});

router.get('/survey/new', async (req, res) => {
    const products = await Product.find();
    res.render('survey_new', { products, warnings: '' });
});

router.post('/survey/new', async (req, res) => {
    const survey = new Survey(req.body);
    await survey.save().then((value) => {
        res.render('index');
    }).catch(async (reason) => {
        const products = await Product.find();
        res.render('survey_new', { products, warnings: '' + reason });
    });
});

// PRODUCTS
router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.render('products', { products });
});

router.get('/product/new', async (req, res) => {
    res.render('product_new', { warnings: '' });
});

router.post('/product/new', async (req, res) => {
    const product = new Product(req.body);
    await product.save().then((value) => {
        res.render('index');
    }).catch((reason) => {
        res.render('product_new', { warnings: '' + reason });
    });
});

router.get('/product/delete/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product) product.remove();
    const products = await Product.find();
    res.render('products', { products });
});

module.exports = router;
