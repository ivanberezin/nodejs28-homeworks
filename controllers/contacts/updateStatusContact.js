const { contactModel } = require('../../models')
const NotFoundError = require('../../helpers/notFoundError')

const updateStatusContact = async (req, res, next) => {
  try {
    const { id } = req.params
    const { favorite } = req.body
    const updStatusFavorite = await contactModel.findByIdAndUpdate(id, { favorite }, { new: true })
    return updStatusFavorite
      ? res.status(200).json(updStatusFavorite)
      : NotFoundError(res)
  } catch (error) {
    console.log('updateStatusContact catch: ', error)
    next(error)
  }
}

module.exports = updateStatusContact