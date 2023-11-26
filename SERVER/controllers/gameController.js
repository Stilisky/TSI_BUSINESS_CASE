const gameService = require('../services/gameService')
const playerService = require('../services/playerService')

const getGames = async (req, res) => {
   try {
      const games = gameService.getGames()
      res.status(200).json(games)
   } catch (error) {
      res.status(400).json({"message": error})
   }
}

const getGame = async (req, res) => {
   try {
      const game = gameService.getGame(req.params.gameId)
      res.status(200).json(game)
   } catch (error) {
      res.status(400).json({"message": error})
   }
}

const createGame = async (req, res) => {
   try {
      const playerId = req.params.playerId
      const player = await playerService.getPlayer(playerId)
      if(player){
         const game = await gameService.addGame(req.body)
         player.performance.push(game)
         await playerService.updatePlayer(playerId, player)
         game.player = player
         const newGame = await gameService.updateGame(game._id, game)
         res.status(201).json(newGame)
      } else {
         res.status(400).json({'message': "This player doesn't exist"})
      }
   } catch (error) {
      res.status(400).json({"message": error})
   }
}

const updateGame = async (req, res) => {
   try {
      const game = await gameService.updateGame(req.params.gameId, req.body)
      res.status(201).json(game)
   } catch (error) {
      res.status(400).json({"message": error})
   }
}

const deleteGame = async (req, res) => {
   try {
      const game = await gameService.deleteGame(req.params.gameId)
      if(game) {
         res.status(200).json({"message": 'Player has been deleted'})
      } else {
         res.status(400).json({'message': "This player doesn't exist"})
      }
   } catch (error) {
      res.status(400).json({"message": error})
   }
}

module.exports = {
   createGame,
   deleteGame,
   getGame,
   getGames,
   updateGame
}