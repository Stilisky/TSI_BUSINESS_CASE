const playerModel = require('../models/player')

const getPlayers = async () => {
   const players = await playerModel.find().populate('performance')
   return players
}

const getPlayer = async (id) => {
   const player = await playerModel.findById(id).populate('performance')
   return player
}

const createPlayer = async (player) => {
   const newPlayer = new playerModel(player)
   const addplayer = newPlayer.save()
   return addplayer
}

const updatePlayer = async (playerId, player) => {
   const upPlayer = await playerModel.findByIdAndUpdate(playerId, player)
   return upPlayer
}

const deletePlayer = async (playerId) => {
   const player = await playerModel.findByIdAndDelete(playerId)
   return player;
}