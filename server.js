/* Main entry point for the ExpressJS server */

require("dotenv").config();

const express = require('express');
const connectDB = require('./config/db');

// init the expressjs app to app variable
const app = express();

// connect to the db
connectDB();

// middleware for json parsing
app.use(express.json());

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
