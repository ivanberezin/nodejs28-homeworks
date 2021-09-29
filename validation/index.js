const validateId = require('./validateId')
const validateUpdateStatusContact = require('./validateUpdateStatusContact')
const validateCreateContact = require('./validateCreateContact')
const validateUpdateContact = require('./validateUpdateContact')
const authorize = require('./authorize')
const validateAuth = require('./validateAuth')
const validateUpdateSubs = require('./validateUpdateSubs')
const validateEmail = require('./validateEmail')

module.exports = {
  validateId,
  validateCreateContact,
  validateUpdateContact,
  validateUpdateStatusContact,
  authorize,
  validateAuth,
  validateUpdateSubs,
  validateEmail
}