const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const api = require('./api')

require('dotenv').config()
const PORT = process.env.PORT || 3001

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'
app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/v1/contacts', api.contactsRouter)

app.listen(PORT, () => {
  console.log('Server started listening on port: ', PORT)
})