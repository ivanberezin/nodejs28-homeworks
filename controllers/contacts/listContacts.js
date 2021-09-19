const { contactModel } = require('../../models')
const NotFoundError = require('../../helpers/notFoundError')

const listContacts = async (req, res, next) => {
  try {
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