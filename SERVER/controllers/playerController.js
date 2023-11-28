const playerService = require('../services/playerService')

const getPlayers = async (req, res) => {
   try {
      const players = await playerService.getPlayers()
      res.status(200).json(players)
   } catch (error) {
      res.status(500).json({'message': "Invalid Server"})
   }
}

const getPlayer = async (req, res) => {
   try {
      const id = req.params.playerId
      const player = await playerService.getPlayer(id)
      res.status(200).json(player)
   } catch (error) {
      res.status(400).json({'message': "Player doesn't exist"})
   }
}

const createPlayer = async (req, res) => {
   try {
      const exist = await playerService.getPlayerByName(req.body.playerName)
      if(exist) {
         res.status(400).json({"message": "Player already exist"})
      } else {
         const player = await playerService.createPlayer(req.body)
         res.status(201).json(player)
      }
   } catch (error) {
      res.status(500).json({'message': error})
   }
}

const updatePlayer = async (req, res) => {
   try {
      const player = await playerService.updatePlayer(req.params.playerId, req.body)
      res.status(201).json(player)
   } catch (error) {
      res.status(400).json({'message': error})
   }
}

const deletePlayer = async (req, res) => {
   try {
      const player = await playerService.deletePlayer(req.params.playerId)
      if(player){
         res.status(201).json("Player succeffuly deleted")
      } else {
         res.status(400).json("Player doesn't exist")
      }
   } catch (error) {
      res.status(400).json({'message': "Player doesn't exist"})
   }
}

const statistique = async (req, res) => {
   try {
      const playerId = req.params.playerId
      const player = await playerService.getPlayer(playerId)
      const length = player.performance.length
      var data = null;
      if(length > 0) {
         const matches = player.performance
         var ps = 0
         var na = 0
         var ni = 0
         var sb = 0
         var ss = 0;
         matches.forEach(element => {
            ps += element.pointsScored;
            na += element.numberAssists;
            ni += element.numberIntercepts;
            sb += element.numberShotsBlocked;
            ss += element.shotSuccess;
         });
         // ps = ps/length;
         // na = na/length;
         // ni = ni/length;
         // nb = nb/length;
         // ss = ss/length;
         data = {
            avgPointsScored: Number.parseFloat(ps/length).toFixed(2),
            avgNumberAssists: Number.parseFloat(na/length).toFixed(2),
            avgNumberIntercepts:Number.parseFloat(ni/length).toFixed(2),
            avgNumberShotsBlocked: Number.parseFloat(sb/length).toFixed(2),
            avgShotSuccess: Number.parseFloat(ss/length).toFixed(2)
         }

         // data = {
         //    avgPointsScored: ps,
         //    avgNumberAssists: na,
         //    avgNumberIntercepts:ni,
         //    avgNumberShotsBlocked: nb,
         //    avgShotSuccess: ss
         // }
      } else {
         data = {
            avgPointsScored: 0,
            avgNumberAssists: 0,
            avgNumberIntercepts:0,
            avgNumberShotsBlocked: 0,
            avgShotSuccess: 0
         }
      }
      
      res.status(200).json(data)
   } catch (error) {
      res.status(400).json({'message': "Player doesn't exist"})
   }
}

module.exports = {
   createPlayer,
   getPlayer,
   getPlayers,
   deletePlayer,
   updatePlayer,
   statistique
}