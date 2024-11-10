// Routes which will be used by api

const express = require('express');
const { createProduct, getProduct, getProducts } = require("../controllers/productController");
const router = express.Router();

// post method to create a new product
router.post('/', createProduct);

// get method to get product info
router.get('/:id', getProduct)

// get method to get all products
router.get('/', getProducts)

module.exports = router;