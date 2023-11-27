const gameModel = require('../models/game')

const getGames = async () => {
   const games = await gameModel.find().populate('player')
   return games
}

const getGame = async (id) => {
   const game = await gameModel.findById(id).populate('player')
   return game
}

const addGame = async (game) => {
   const newPerform = new gameModel(game)
   const addPer = newPerform.save()
   return addPer
}

const updateGame = async (id, game) => {
   await gameModel.findByIdAndUpdate(id, game)
   const up = await gameModel.findById(id)
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