const express = require('express');

const router = express.Router();

const Product = require('../models/productsModel');



//Routes
router.get('/', async (req,res) => { 
    try{
        const products = await Product.find();
        res.json(products);
    }catch(err){
        res.json({message:err});
    }
});

router.get('/:productsId', async (req,res) => { 
    try{
        const product = await Product.findById(req.params.productsId);
        res.json(product);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;