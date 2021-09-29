const { Router } = require('express')

const { userController: userCtrl } = require('../../controllers')
const validation = require('../../validation')
const upload = require('../../services/upload')

const userRouter = Router()

userRouter.post('/signup', validation.validateAuth, userCtrl.signup)

userRouter.post('/login', validation.validateAuth, userCtrl.login)

userRouter.post('/logout', validation.authorize, userCtrl.logout)

userRouter.get('/current', validation.authorize, userCtrl.currentUser)

userRouter.patch('/', validation.authorize, validation.validateUpdateSubs, userCtrl.update)

userRouter.patch('/avatars', validation.authorize, upload.single('avatar'), userCtrl.avatarUpd, userCtrl.update)

userRouter.get('/verify/:verificationToken', userCtrl.verifyEmail)

userRouter.post('/verify', validation.validateEmail, userCtrl.secondaryVerifyEmail)

module.exports = userRouter