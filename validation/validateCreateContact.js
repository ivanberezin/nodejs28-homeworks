const Joi = require('joi')

function validateCreateContact(req, res, next) {
  const createContactRules = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
    owner: Joi.object()
  })
  const result = createContactRules.validate(req.body)
  if (result.error) {
    return res.status(400).json({ message: 'missing required name field' })
  }
  next()
}

module.exports = validateCreateContact