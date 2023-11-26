const jwt = require('jsonwebtoken')
require('dotenv').config()

const authAdmin = async (req, res, next) => {
   try {
      let token = req.headers.authorization
      if (token) {
         token = token.slice(7, token.length)
         jwt.verify(token,SECRET_KEY, (err, decodedToken) => {
         if(err) {
            return res.status(401).json('Invalid token')
         }
         else{
            if(decodedToken.role == "ADMIN") {
               req.params.userId = decodedToken.id
               next()
            }else {
               res.status(403).json("You are not authorize to access")
            }
         }
         })
      } else {
         res.status(401).json("Invalid token")
      }
   } catch (error) {
      res.status(401).json("You are not authorize to access")
   }
}

module.exports = {
   authAdmin
}