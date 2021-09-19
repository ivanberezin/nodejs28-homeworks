const { contactModel } = require('../../models')
const NotFoundError = require('../../helpers/notFoundError')

const removeContact = async (req, res) => {
  try {
    const { id } = req.params
    const deletedContact = await contactModel.findByIdAndDelete(id)
    return deletedContact
      ? res.status(200).json({
        message: 'contact deleted',
        data: { result: deletedContact }
      })
      : NotFoundError(res)
  } catch (error) {
    console.log('removeContact catch: ', error)
  }
}

module.exports = removeContact