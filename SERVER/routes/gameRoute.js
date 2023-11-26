const express = require('express')
var router = express.Router()
const {authAdmin} = require('../middlewares/authMiddleware')
const {
   createGame,
   deleteGame,
   getGame,
   getGames,
   updateGame
} = require('../controllers/gameController')

router.route('/games').get(authAdmin, getGames)
router.route('/game/:gameId').get(authAdmin, getGame).put(authAdmin, updateGame).delete(authAdmin, deleteGame)
router.route('/game/player/:playerId').post(authAdmin, createGame)

module.exports = {router}