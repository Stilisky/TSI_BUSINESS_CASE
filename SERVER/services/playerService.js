const playerModel = require('../models/player')

const getPlayers = async () => {
   const players = await playerModel.find().populate()
   return players
}

const getPlayer = async (id) => {
   const player = await playerModel.findById(id).populate()
   return player
}

const getPlayerByName = async(name) => {
   const player = await playerModel.findOne({playerName: name})
   return player
}

const createPlayer = async (player) => {
   const newPlayer = new playerModel(player)
   const addplayer = newPlayer.save()
   return addplayer
}

const updatePlayer = async (playerId, player) => {
   await playerModel.findByIdAndUpdate(playerId, player)
   const upPlayer = await playerModel.findById(playerId)
   return upPlayer
}

const deletePlayer = async (playerId) => {
   const player = await playerModel.findByIdAndDelete(playerId)
   return player;
}

module.exports = {
   getPlayer,
   getPlayers,
   updatePlayer,
   deletePlayer,
   createPlayer,
   getPlayerByName
}