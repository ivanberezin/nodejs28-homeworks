const { userModel } = require('../../models')

async function updateUser(req, res, next) {
  try {
    const userId = req.user._id
    const updatedUser = await userModel.findByIdAndUpdate(userId, { $set: req.body }, { new: true })
    return res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
}

module.exports = updateUser