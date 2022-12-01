const express = require("express");
const loginRouter = express.Router()
const UserController = require('../controller/controller')



loginRouter.post('/register', UserController.register)

loginRouter.post('/login', UserController.login)

loginRouter.get('/users', UserController.getAllUsers)




module.exports = loginRouter;