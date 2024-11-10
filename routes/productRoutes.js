// Routes which will be used by api

const express = require('express');
const { createProduct } = require("../controllers/productController");
const router = express.Router();

// post method to create a new product
router.post('/', createProduct);

module.exports = router;