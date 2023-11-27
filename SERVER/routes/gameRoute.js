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

router.route('/').get(authAdmin, getGames)
router.route('/:gameId').get(authAdmin, getGame).put(authAdmin, updateGame).delete(authAdmin, deleteGame)
router.route('/player/:playerId').post(authAdmin, createGame)

module.exports = router