const { Types: { ObjectId } } = require('mongoose')

function validateId (req, res, next) {
  const { id } = req.params
  if (!ObjectId.isValid(id)) {
    return res.status(400).send('id is not valid ObjectId type')
  }
  next()
}

module.exports = validateId