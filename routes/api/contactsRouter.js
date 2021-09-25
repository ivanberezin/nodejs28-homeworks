const express = require('express')

const { contactsController: contactsCtrl } = require('../../controllers')
const validation = require('../../validation')

const contactsRouter = express.Router()

contactsRouter.get('/', validation.authorize, contactsCtrl.listContacts)

contactsRouter.get('/:id', validation.validateId, contactsCtrl.getById)

contactsRouter.post('/', validation.authorize, validation.validateCreateContact, contactsCtrl.addContact)

contactsRouter.put('/:id', validation.validateId, validation.validateUpdateContact, contactsCtrl.updateContact)

contactsRouter.delete('/:id', validation.validateId, contactsCtrl.removeContact)

contactsRouter.patch('/:id/favorite', validation.validateId, validation.validateUpdateStatusContact, contactsCtrl.updateStatusContact)

module.exports = contactsRouter