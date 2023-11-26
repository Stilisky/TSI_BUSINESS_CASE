const express = require('express')
var router = express.Router()
const {authAdmin} = require('../middlewares/authMiddleware')
const {
   deleteUser,
   getUser,
   getUsers,
   login,
   register,
   updateUser
} = require('../controllers/userController')

router.route('/users').get(authAdmin, getUsers).post(register)
router.route('users/:userId').get(authAdmin, getUser).put(updateUser).delete(deleteUser)

module.exports = {router}