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

// Get all products with search and filtering
exports.getProducts = async (req, res) => {
    try {
        const { category, name, minPrice, maxPrice } = req.query;
        let query = {};

        // check if name, category, min and max price exists or matches
        if (category) {
            query.category = category;
        }
        if (name) {
            // case insensitive search
            query.name = new RegExp(name, 'i'); 
        }
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) {
                query.price.$gte = minPrice;
            }
            if (maxPrice) {
                query.price.$lte = maxPrice;
            }
        }

        const products = await Product.find(query);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};