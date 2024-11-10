/*
A config file to connect to MongoDB and show error message if connection failed
*/

// importing mongoose to be able to connect to mongodb
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // get the mongoDB connection string from .env file in the main project dir
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopoly: true });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

// export connectDB module to able to use it in other files
module.exports = connectDB;