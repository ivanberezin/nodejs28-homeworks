const jwt = require('jsonwebtoken')

const { userModel } = require('../models')
const unauthorizedError = require('../helpers/unauthorizedError')

async function authorize(req, res, next) {
  try {
    if (req.headers.authorization) {
      const authorizationHeader = req.get('Authorization') || ''
      const token = authorizationHeader.replace('Bearer ', '')
      let userId
      try {
        userId = await jwt.verify(token, process.env.JWT_SECRET).id
      } catch (error) {
        throw unauthorizedError(res)
      }
      const user = await userModel.findById(userId)
      if (!user || user.token !== token) {
        throw unauthorizedError(res)
      }
      req.user = user
      req.token = token
      return next()
    }
    next()
  } catch (error) {
    console.log('authorize catch: ', error)
    next(error)
  }
}

module.exports = authorize