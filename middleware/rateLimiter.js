/*
Limiting the access to the API to prevent misuse
*/

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 100 request per windowMs
    message: "Too many requests from this IP, please try again later",
});

module.exports = limiter;