const Joi = require('joi')

function validateUpdateStatusContact (req, res, next) {
  const updateStatusRules = Joi.object({
    favorite: Joi.boolean().required()
  })
  const result = updateStatusRules.validate(req.body)
  if (result.error) {
    return res.status(400).json({ message: 'missing field favorite' })
  }
  next()
}

module.exports = validateUpdateStatusContact