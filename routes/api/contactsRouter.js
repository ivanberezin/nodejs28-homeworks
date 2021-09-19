const express = require('express')

const { contacts: ctrl } = require('../../controllers')
const validation = require('../../validation')

const contactsRouter = express.Router()

contactsRouter.get('/', ctrl.listContacts)

contactsRouter.get('/:id', validation.validateId, ctrl.getById)

contactsRouter.post('/', validation.validateCreateContact, ctrl.addContact)

contactsRouter.put('/:id', validation.validateId, validation.validateUpdateContact, ctrl.updateContact)

contactsRouter.delete('/:id', validation.validateId, ctrl.removeContact)

contactsRouter.patch('/:id/favorite', validation.validateId, validation.validateUpdateStatusContact, ctrl.updateStatusContact)

module.exports = contactsRouter