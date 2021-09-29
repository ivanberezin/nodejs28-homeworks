const signup = require('./signup')
const login = require('./login')
const logout = require('./logout')
const currentUser = require('./currentUser')
const update = require('./update')
const avatarUpd = require('./avatarUpd')
const verifyEmail = require('./verifyEmail')
const secondaryVerifyEmail = require('./secondaryVerifyEmail')

module.exports = {
  signup,
  login,
  logout,
  currentUser,
  update,
  avatarUpd,
  verifyEmail,
  secondaryVerifyEmail
}
