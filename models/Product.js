const mongoose = require('mongoose');

// creating a Product schema in the database with name, category, price and stock fields for each product
const productSchema = new mongoose.Schema({
    name: { type: String, required: true},
    category: { type: String, required: true},
    price: { type: Number, required: true},
    stock: { type: Number, required: true},
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);