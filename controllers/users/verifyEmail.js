const notFoundError = require('../../helpers/notFoundError')

const { userModel } = require('../../models')

const verify = async(req, res) => {
  console.log('in verify')
  const { verificationToken } = req.params
  const user = await userModel.findOne({ verifyToken: verificationToken })
  // const user = await userModel.findOne({ verificationToken })
  if (!user) {
    throw notFoundError(res)
  }
  await userModel.findByIdAndUpdate(user._id, { verifyToken: null, verify: true })
  res.status(200).send({ message: 'Verification successful' })
}

module.exports = verify