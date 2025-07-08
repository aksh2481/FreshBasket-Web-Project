const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Create a new product
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

// Update a product
router.put('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        Object.assign(product, req.body);
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Delete a product
router.delete('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        await product.remove();
        res.json({ message: 'Product removed' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

module.exports = router;