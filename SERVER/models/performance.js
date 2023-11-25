const mongoose = require('mongoose')

const PerformanceSchema = new mongoose.Schema({
   averagePointsScored : {
      type: Number,
      default: 0,
   },
   averageNumberAssists : {
      type: Number,
      default: 0,
   },
   averageNumberIntercepts : {
      type: Number,
      default: 0,
   },
   averageNumberShotsBlocked : {
      type: Number,
      default: 0,
   },
   shotSuccessRate : {
      type: Number,
      default: 0,
   }
})

module.exports = mongoose.model('Performance', PerformanceSchema)