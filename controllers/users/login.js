const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { userModel } = require('../../models')
const unauthorizedError = require('../../helpers/unauthorizedError')

require('dotenv').config()

async function login(req, res, next) {
  try {
    const { email, password } = req.body
    const userInDatabase = await userModel.findOne({ email })
    if (!userInDatabase) {
      throw unauthorizedError(res, 'Email or password is wrong')
    }
    if (!userInDatabase.verify) {
      throw unauthorizedError(res, 'Email is not verified')
    }
    const isPasswordValid = await bcryptjs.compare(password, userInDatabase.password)
    if (!isPasswordValid) {
      throw unauthorizedError(res, 'Email or password is wrong')
    }
    const token = await jwt.sign({ id: userInDatabase._id }, process.env.JWT_SECRET, { expiresIn: 2 * 24 * 60 * 60 })
    await userModel.findByIdAndUpdate(userInDatabase._id, { token }, { new: true })
    return res.status(200).json({
      token: token,
      user: {
        email: email,
        subscription: userInDatabase.subscription
      }
    })
  } catch (error) {
    console.log('login catch: ', error)
    next(error)
  }
}

module.exports = login