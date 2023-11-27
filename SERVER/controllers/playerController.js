const playerService = require('../services/playerService')

const getPlayers = async (req, res) => {
   try {
      const players = await playerService.getPlayers()
      res.status(200).json(players)
   } catch (error) {
      res.status(500).json({'message': "Invalid Server"})
   }
}

const getPlayer = async (req, res) => {
   try {
      const id = req.params.playerId
      const player = await playerService.getPlayer(id)
      res.status(200).json(player)
   } catch (error) {
      res.status(400).json({'message': "Player doesn't exist"})
   }
}

const createPlayer = async (req, res) => {
   try {
      const exist = await playerService.getPlayerByName(req.body.playerName)
      if(exist) {
         res.status(400).json({"message": "Player already exist"})
      } else {
         const player = await playerService.createPlayer(req.body)
         res.status(201).json(player)
      }
   } catch (error) {
      res.status(500).json({'message': error})
   }
}

const updatePlayer = async (req, res) => {
   try {
      const player = await playerService.updatePlayer(req.params.playerId, req.body)
      res.status(201).json(player)
   } catch (error) {
      res.status(400).json({'message': error})
   }
}

const deletePlayer = async (req, res) => {
   try {
      const player = await playerService.deletePlayer(req.params.playerId)
      if(player){
         res.status(201).json("Player succeffuly deleted")
      } else {
         res.status(400).json("Player doesn't exist")
      }
   } catch (error) {
      res.status(400).json({'message': "Player doesn't exist"})
   }
}

module.exports = {
   createPlayer,
   getPlayer,
   getPlayers,
   deletePlayer,
   updatePlayer
}