const { Router } = require('express')

const { userController: userCtrl } = require('../../controllers')
const validation = require('../../validation')

const userRouter = Router()

userRouter.post('/signup', validation.validateAuth, userCtrl.signup)

userRouter.post('/login', validation.validateAuth, userCtrl.login)

userRouter.post('/logout', validation.authorize, userCtrl.logout)

userRouter.get('/current', validation.authorize, userCtrl.currentUser)

userRouter.patch('/', validation.authorize, validation.validateUpdateSubs, userCtrl.update)

module.exports = userRouter