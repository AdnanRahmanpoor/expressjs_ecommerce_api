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

// Get a single product
exports.getProduct = async (req, res) => {
    try {
        // find a product by id and save it to product
        const product = await Product.findById(req.params.id);

        // if the product doesnt exist, throw 404 error
        if (!product) {
            return res.status(404).json({ error: 'Product not found'});
        }
        // else parse the product info
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};