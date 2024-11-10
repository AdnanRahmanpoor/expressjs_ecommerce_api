// Routes which will be used by api

const express = require('express');
const { createProduct, getProduct } = require("../controllers/productController");
const router = express.Router();

// post method to create a new product
router.post('/', createProduct);

// get method to get product info
router.get('/:id', getProduct)

module.exports = router;