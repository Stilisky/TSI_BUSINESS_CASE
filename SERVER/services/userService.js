const userModel = require('../models/user')

const register = async (user) => {
   const newUser = new userModel(user);
   const addUser = await newUser.save()
   return addUser;
}

const updateUser = async (id, user) => {
   try {
      const upUser = await userModel.findByIdAndUpdate(id, user)
      return upUser
   } catch (error) {
      return error
   }
}

const deleteUser = async (id) => {
   const delUser = await userModel.findByIdAndDelete(id)
   return delUser;
}

module.exports= {
   register,
   updateUser,
   deleteUser
}