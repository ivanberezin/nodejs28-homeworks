const Joi = require('joi')

const validateError = require('../helpers/validateError')

function validateEmail(req, res, next) {
  console.log('in validateEmail')
  const subscriptionRules = Joi.object({
    email: Joi.string().required(),
  })
  const subscriptionResult = subscriptionRules.validate(req.body)
  if (subscriptionResult.error) {
    throw validateError(res)
  }
  next()
}

module.exports = validateEmail