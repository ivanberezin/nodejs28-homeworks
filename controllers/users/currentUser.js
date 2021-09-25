const { userModel } = require('../../models')

async function getCurrentUser(req, res, next) {
  try {
    const { _id } = req.user
    const currentUser = await userModel.findById(_id)
    if (currentUser) {
      return res.status(200).json({
        id: currentUser._id,
        email: currentUser.email,
        subscription: currentUser.subscription
      })
    }
  } catch (error) {
    console.log('getCurrentUser catch: ', error)
    next(error)
  }
}

module.exports = getCurrentUser