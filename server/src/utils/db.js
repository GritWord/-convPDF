const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = 'mongodb://venom:venom@localhost:27017/venom'

// Database Name
const dbName = 'venom'

// Use connect method to connect to the server
module.exports = {
  getConnectionToMongoDB () {
    return new Promise((resolve, reject) => {
      MongoClient.connect(url, function (err, client) {
