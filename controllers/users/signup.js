const bcryptjs = require('bcryptjs')
const gravatar = require('gravatar')
const { v4: uuidv4 } = require('uuid')
const sgMail = require('@sendgrid/mail')

const { userModel } = require('../../models')

sgMail.setApiKey(process.env.API_TOKEN)

const costFactor = 4

async function signup(req, res, next) {
  try {
    const { email, password } = req.body
    const passwordHash = await bcryptjs.hash(password, costFactor)
    const userInDatabase = await userModel.findOne({ email })
    if (userInDatabase) {
      return res.status(409).json({ message: 'Email in use' })
    }
    const avatarURL = gravatar.url(email)
    const newUser = await userModel.create({ email, password: passwordHash, avatarURL, verifyToken: uuidv4() })
    const { verifyToken } = newUser
    const msg = {
      to: newUser.email,
      from: 'johnberezinapi@gmail.com',
      subject: 'verification email',
      html: `<a href='http://localhost:3001/v1/users/verify/${verifyToken}'>Confirm signup</a>`,
    }
    sgMail.send(msg).then(() => { console.log('Email send') }).catch(error => console.error(error))
    return res.status(201).json({
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
        avatarURL: newUser.avatarURL
      }
    })
  } catch (error) {
    console.log('signup catch: ', error)
    next(error)
  }
}

module.exports = signup