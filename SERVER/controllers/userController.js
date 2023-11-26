const userService = require('../services/userService')
require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const usernameRegex = /^[a-zA-Z0-9\-']+$/;

const register = async (req, res) => {
   try {
      const {email, password, username} = req.body
      if (email && password && username){
         if(emailRegex.test(email)){
            if(usernameRegex.test(username)){
               const newPassword = await bcrypt.hash(password, 13)
               const users = await userService.getUsers()
               console.log(users);
               var model;
               if(users.length != 0){
                  model = {
                     email: email,
                     password: newPassword,
                     username: username,
                     role: 'USER'
                  }
               } else {
                  model = {
                     email: email,
                     password: newPassword,
                     username: username,
                     role: 'ADMIN'
                  }
               }
               console.log(model);
               const exist = await userService.getUserByEmail(email)
               if(exist){
                  res.status(400).json({"message": "Email already exist"})
               } else {
                  const user = await userService.register(model)
                  res.status(201).json(user)
               }
            } else {
               res.status(400).json({'message': 'Invalid Username format'})
            }
         } else {
            res.status(400).json({'message': 'Invalid Email format'})
         }
      } else {
         res.status(400).json({'message': 'All fields are required'})
      }
   } catch (error) {
      res.status(500).json({'message': 'Internal Server Error'})
   }
}

const login = async (req, res) => {
   try {
      const {email, password} = req.body
      if(email && password) {
         const user = await userService.getUserByEmail(email)
         if(user) {
            const match = await bcrypt.compare(password, user.password)
            if(match){
               const token = jwt.sign(
                  {
                     id: user._id,
                     username: user.username,
                     email: user.username,
                     role: user.role
                  },
                  process.env.SECRET_KEY,
                  {expiresIn: '5h'}
               )
               res.status(200).json({'acces_token': token})
            } else {
               res.status(400).json({'message': 'Incorrect Email or Password'})
            }
         } else {
            res.status(401).json({'message': 'Incorrect Email or Password'})
         }
      } else {
         res.status(400).json({'message': 'All fields are required'})
      }
   } catch (error) {
      res.status(500).json({'message': 'Internal Server Error'})
   }
}

const getUsers =  async (req, res) => {
   try {
      const users = await userService.getUsers()
      res.status(200).json(users)
   } catch (error) {
      res.status(500).json({'message': 'Internal Server Error'})
   }
}

const getUser =  async (req, res) => {
   try {
      const user = await userService.getUser(req.params.userId)
      if(user) {
         res.status(200).json(user)
      } else {
         res.status(400).json({"message": "User doesn't exist"})
      }
   } catch (error) {
      res.status(400).json({'message': "User doesn't exist"})
   }
}

const updateUser = async (req, res) => {
   try {
      const id = req.params.userId
      if(req.body.password) {
         req.body.password = bcrypt.hash(password, 13)
      }
      const user = await userService.updateUser(id, req.body)
      res.status(201).json(user)
   } catch (error) {
      res.status(500).json({'message': 'Internal Server Error'})
   }
}

const deleteUser = async (req, res) => {
   try {
      const id = req.params.userId
      const user = await userService.deleteUser(id)
      if(user) {
         res.status(200).json({'message': 'User successfully deleted'})
      } else {
         res.status(400).json({'message': "User Doesn't exist"})
      }
   } catch (error) {
      res.status(500).json({'message': 'Internal Server Error'})
   }
}

module.exports = {
   register,
   login,
   getUser,
   getUsers,
   updateUser,
   deleteUser
}