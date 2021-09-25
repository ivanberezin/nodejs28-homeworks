const Joi = require('joi')

const validateError = require('../helpers/validateError')

function validateAuth(req, res, next) {
  const signUpRules = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  })
  const validationResult = signUpRules.validate(req.body)
  if (validationResult.error) {
    throw validateError(res)
  }
  next()
}

module.exports = validateAuth