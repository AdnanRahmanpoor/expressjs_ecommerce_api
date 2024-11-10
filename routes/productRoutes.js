// Routes which will be used by api

const express = require('express');
const { createProduct, getProduct, getProducts,updateProduct, deleteProduct } = require("../controllers/productController");
const router = express.Router();

// post method to create a new product
router.post('/', createProduct);

// get method to get product info
router.get('/:id', getProduct)

// get method to get all products
router.get('/', getProducts)

// put method to update a product
router.put('/:id', updateProduct);

// delete method to delete a product
router.delete('/:id', deleteProduct);

module.exports = router;