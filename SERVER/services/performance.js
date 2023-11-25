const performanceModel = require('../models/game')

const createPerformance = async (perform) => {
   const newPerform = new performanceModel(perform)
   const addPer = newPerform.save()
   return addPer
}

const updatePerformance = async (id, perform) => {
   const up = await performanceModel.findByIdAndUpdate(id, perform)
   return up;
}

const deletePerformance = async (id) => {
   return await performanceModel.findByIdAndDelete(id)
}

