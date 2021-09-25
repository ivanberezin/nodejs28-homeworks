const { contactModel } = require('../../models')
const NotFoundError = require('../../helpers/notFoundError')

const listContacts = async (req, res, next) => {
  try {
    if (req.user) {
      const { _id } = req.user
      const contactsWithOwner = await contactModel.find({ owner: _id })
      return contactsWithOwner
        ? res.status(200).json(contactsWithOwner)
        : NotFoundError(res)
    }
    const contacts = await contactModel.find()
    return contacts
      ? res.status(200).json(contacts)
      : NotFoundError(res)
  } catch (error) {
    console.log('listContacts catch: ', error)
    next(error)
  }
}

module.exports = listContacts