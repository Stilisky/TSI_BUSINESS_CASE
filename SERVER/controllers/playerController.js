const playerService = require('../services/playerService')

const getPlayers = async (req, res) => {
   try {
      const players = await playerService.getPlayers()
      res.status(200).json(players)
   } catch (error) {
      res.status(500).json({'message': error})
   }
}

const getPlayer = async (req, res) => {
   try {
      const id = req.params.playerid
      const player = await playerService.getPlayer(id)
      res.status(200).json(player)
   } catch (error) {
      res.status(500).json({'message': error})
   }
}

const createPlayer = async (req, res) => {
   try {
      var performance;
      if(req.body.performance) {
         
      }
   } catch (error) {
      res.status(500).json({'message': error})
   }
}