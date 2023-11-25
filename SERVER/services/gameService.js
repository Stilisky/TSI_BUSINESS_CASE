const gameModel = require('../models/game')

const getGames = async () => {
   const games = await gameModel.find()
   return games
}

const getGame = async (id) => {
   const game = await gameModel.findById(id)
   return game
}

const addGame = async (game) => {
   const newPerform = new gameModel(game)
   const addPer = newPerform.save()
   return addPer
}

const updateGame = async (id, game) => {
   const up = await gameModel.findByIdAndUpdate(id, game)
   return up;
}

const deleteGame = async (id) => {
   return await gameModel.findByIdAndDelete(id)
}

module.exports = {
   addGame,
   deleteGame,
   getGame,
   getGames,
   updateGame
}