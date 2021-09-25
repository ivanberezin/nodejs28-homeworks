const bcryptjs = require('bcryptjs')

const { userModel } = require('../../models')

const costFactor = 4

async function signup(req, res, next) {
  try {
    const { email, password } = req.body
    const passwordHash = await bcryptjs.hash(password, costFactor)
    const userInDatabase = await userModel.findOne({ email })
    if (userInDatabase) {
      return res.status(409).json({ message: 'Email in use' })
    }
    const newUser = await userModel.create({ email, password: passwordHash })
    return res.status(201).json({
      user: {
        email: newUser.email,
        subscription: newUser.subscription
      }
    })
  } catch (error) {
    console.log('signup catch: ', error)
    next(error)
  }
}

module.exports = signup