const express = require('express');
const router = express.Router();

const Survey = require('../models/survey');

router.get('/', async (req, res) => {
    const surveys = await Survey.find();
    res.render('index', {surveys});
});

router.post('/submit', async (req, res) => {
    const survey = new Survey(req.body);
    await survey.save();
    res.render('thanks');
});

module.exports = router;
