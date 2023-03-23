const mongoose = require('mongoose')
// Connection URL
const defaultMongoUrl = 'mongodb://venom:venom@localhost:27017/venom'

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

module.exp