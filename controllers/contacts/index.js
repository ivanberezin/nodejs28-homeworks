const listContacts = require('./listContacts')
const getById = require('./getById')
const addContact = require('./addContact')
const updateContact = require('./updateContact')
const removeContact = require('./removeContact')
const validateCreateContact = require('./validateCreateContact')
const validateUpdateContact = require('./validateupdateContact')

module.exports = {
  listContacts,
  getById,
  addContact,
  updateContact,
  removeContact,
  validateCreateContact,
  validateUpdateContact
}