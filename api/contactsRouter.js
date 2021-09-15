const express = require('express')

const { contacts: ctrl } = require('../controllers')

const contactsRouter = express.Router()

contactsRouter.get('/', ctrl.listContacts)
contactsRouter.get('/:id', ctrl.getById)
contactsRouter.post('/', ctrl.validateCreateContact, ctrl.addContact)
contactsRouter.put('/:id', ctrl.validateUpdateContact, ctrl.updateContact)
contactsRouter.delete('/:id', ctrl.removeContact)

module.exports = contactsRouter