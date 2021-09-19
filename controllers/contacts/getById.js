const { contactModel } = require('../../models')
const NotFoundError = require('../../helpers/notFoundError')

const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const contact = await contactModel.findById(id)
    return contact
      ? res.status(200).json(contact)
      : NotFoundError(res)
  } catch (error) {
    console.log('getById catch: ', error)
    next(error)
  }
}

module.exports = getById