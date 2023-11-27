const express = require('express')
var router = express.Router()
const {
   createPlayer,
   deletePlayer,
   getPlayer,
   getPlayers,
   updatePlayer
} = require('../controllers/playerController')
const {authAdmin} = require('../middlewares/authMiddleware')
router.route('/players').get(getPlayers).post(authAdmin, createPlayer)
router.route('/players/:playerId').get(getPlayer).put(authAdmin, updatePlayer).delete(authAdmin, deletePlayer)

module.exports = router