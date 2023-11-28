const express = require('express')
var router = express.Router()
const {
   createPlayer,
   deletePlayer,
   getPlayer,
   getPlayers,
   updatePlayer,
   statistique
} = require('../controllers/playerController')
const {authAdmin} = require('../middlewares/authMiddleware')
router.route('/players').get(getPlayers).post(authAdmin, createPlayer)
router.route('/players/:playerId').get(getPlayer).put(authAdmin, updatePlayer).delete(authAdmin, deletePlayer)
router.route('/players/:playerId/statistiques').get(statistique)

module.exports = router