const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
   playerName : {
      type: String,
      required: true
   },
   jerseyNumber : {
      type: Number,
      required: true
   },
   position : {
      type: String,
      required: true,
      enum: ['POINT GUARD', 'SHOOTING GUARD', 'SMALL FORWARD', 'POWER FORWARD', 'CENTER'],
   },
   image : {
      type: String,
      default: 'player.jpg'
   },
   games: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Game'
   }]
})

module.exports = mongoose.model('Player', PlayerSchema)