const tokenUtils = require('../utils/token-utils.js')

function verifyToken (req, res, next) {
    try {
        // split
        // const token = req.header('Authorization').split(' ')[1]
        // substring
        // const token = req.header('Authorization').substring(7)
        // replace
        const token = req.header('Autho