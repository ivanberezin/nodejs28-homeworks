const mongoose = require('mongoose')

require('dotenv').config()

const app = require('../app')

const { DB_HOST, PORT = 3001 } = process.env

mongoose.connect(DB_HOST, {
  useNewURLParser: true,
  useUnifiedtopology: true
}).then(app.listen(PORT, () => {
  console.log('Server started listening on port: ', PORT)
})).catch(error => {
  console.log('mongoose.connect catch: ', error)
  process.exit(1)
})