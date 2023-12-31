const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
   opposingTeam: {
      type: String,
      require: true
   },
   pointsScored : {
      type: Number,
      default: 0,
   },
   numberAssists : {
      type: Number,
      default: 0,
   },
   numberIntercepts : {
      type: Number,
      default: 0,
   },
   numberShotsBlocked : {
      type: Number,
      default: 0,
   },
   shotSuccess : {
      type: Number,
      default: 0,
   },
   created_at: {
      type: Date,
      default: Date.now()
   },
   player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Player'
   }
})

module.exports = mongoose.model('Game', GameSchema)