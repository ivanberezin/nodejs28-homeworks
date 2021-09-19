const validateId = require('./validateId')
const validateUpdateStatusContact = require('./validateUpdateStatusContact')
const validateCreateContact = require('./validateCreateContact')
const validateUpdateContact = require('./validateUpdateContact')

module.exports = {
  validateId,
  validateCreateContact,
  validateUpdateContact,
  validateUpdateStatusContact
}