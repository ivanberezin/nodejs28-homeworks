const { contactModel } = require('../../models')
const NotFoundError = require('../../helpers/notFoundError')

const updateContact = async (req, res, next) => {
  try {
    const { id } = req.params
    const updatedContact = await contactModel.findByIdAndUpdate(id, req.body, { new: true })
    return updatedContact
      ? res.status(200).json(updatedContact)
      : NotFoundError(res)
  } catch (error) {
    console.log('updateContact catch: ', error)
    next(error)
  }
}

module.exports = updateContact