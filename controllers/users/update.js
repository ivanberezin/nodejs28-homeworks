const { userModel } = require('../../models')

const unauthorizedError = require('../../helpers/unauthorizedError')

async function updateUser(req, res, next) {
  try {
    const userId = req.user._id
    const updatedUser = await userModel.findByIdAndUpdate(userId, { $set: req.body }, { new: true })
    if (!updatedUser) {
      return unauthorizedError(res, 'Not authorized')
    }
    return res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
}

module.exports = updateUser