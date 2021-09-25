const Joi = require('joi')

const validateError = require('../helpers/validateError')

function validateUpdateSubs(req, res, next) {
  const subscriptionRules = Joi.object({
    subscription: Joi.string().valid('starter', 'pro', 'business').required(),
  })
  const subscriptionResult = subscriptionRules.validate(req.body)
  if (subscriptionResult.error) {
    throw validateError(res)
  }
  next()
}

module.exports = validateUpdateSubs