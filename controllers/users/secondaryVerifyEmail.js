const notFoundError = require('../../helpers/notFoundError')
const sgMail = require('@sendgrid/mail')

const { userModel } = require('../../models')

sgMail.setApiKey(process.env.API_TOKEN)

const secondaryVerify = async(req, res) => {
  console.log('in secondaryVerify')
  const { email } = req.body
  if (!email) {
    return res.status(400).json({ message: 'missing required field email' })
  }
  const user = await userModel.findOne({ email })
  if (!user) {
    throw notFoundError(res)
  }
  if (user.verify) {
    return res.status(400).json({ message: 'Verification has already been passed' })
  }
  const msg = {
    to: user.email,
    from: 'johnberezinapi@gmail.com',
    subject: 'verification email',
    html: `<a href='http://localhost:3001/v1/users/verify/${user.verifyToken}'>Confirm signup again</a>`,
  }
  sgMail.send(msg).then(() => { console.log('Email send again') }).catch(error => console.error(error))
  res.status(200).json({ message: 'Verification email send' })
}

module.exports = secondaryVerify