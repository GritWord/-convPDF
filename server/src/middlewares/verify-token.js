const tokenUtils = require('../utils/token-utils.js')

function verifyToken (req, res, next) {
    try {
        // split
        // const token = req.header('Authorization').split(' ')[1]
        // substring
        //