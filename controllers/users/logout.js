const { userModel } = require('../../models')

async function logout(req, res, next) {
  try {
    const user = req.user
    await userModel.findByIdAndUpdate(user._id, { token: null })
    res.status(204).send()
  } catch (error) {
    console.log('logout catch: ', error)
    next(error)
  }
}

module.exports = logout