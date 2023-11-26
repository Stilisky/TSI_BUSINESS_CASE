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
const {
   createPlayer,
   deletePlayer,
   getPlayer,
   getPlayers,
   updatePlayer
} = require('../controllers/playerController')
const {
   
} = require('../controllers/gameController')