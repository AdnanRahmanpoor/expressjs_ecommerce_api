// this file contains the logic for CRUD operations including search and filter

// import Product model
const Product = require("../models/Product");

// Creat Product
exports.createProduct = async (req, res) => {
    try {
        // create a new product instance
        const product = new Product(req.body);
        // save product in db
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
