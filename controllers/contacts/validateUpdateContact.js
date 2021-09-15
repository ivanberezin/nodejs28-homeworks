const Joi = require('joi')

function validateUpdateContact(req, res, next) {
  const updateContactRules = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string()
  }).min(1)
  const result = updateContactRules.validate(req.body)
  if (result.error) {
    return res.status(400).json({ message: 'missing field' })
  }
  next()
}

module.exports = validateUpdateContact