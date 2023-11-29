/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import bas from '../assets/images/bas.webp'
import DetailsRow from '../components/DetailsRow'
import MatchModel from '../components/MatchModel'

const Player = () => {
   const [players, setPlayers] = useState(null)
   const [player, setPlayer] = useState([])
   const [avg, setAvg] = useState([])
   const [matches, setMatches] = useState([])
   const [openPerform,setPerform] = useState(false)

   const playerid = useParams()
   useEffect(() => {
      stats()
      getPlayer()
      getPlayers()
   }, [])

   const getPlayer = async () => {
      try {
         const token = localStorage.getItem('token')
         const url = `${process.env.REACT_APP_API_URL}/api/v1/players/${playerid.playerId}`
         const response = await fetch(url, {headers: {'Authorization': `Bearer ${token}`}})
         const data = await response.json()
         setPlayer(data)
         setMatches(data.performance.slice(-5))
      } catch (error) {
         console.log(error);
      }
   }

   const getPlayers = async () => {
      try {
         const url =`${process.env.REACT_APP_API_URL}/api/v1/players`
         const response = await fetch(url)
         const data = await response.json()
         setPlayers(data)
      } catch (error) {
         console.log(error);
      }
   }

   const stats = async () => {
      try {
         const url = `${process.env.REACT_APP_API_URL}/api/v1/players/${playerid.playerId}/statistiques`
            const response = await fetch(url)
            if(response.ok) {
               const data = await response.json()
               setAvg(data)
            }
      } catch (error) {
         console.log(error);
      }
   }
  return (
    <>
      <Navbar/>
      <div className='flex flex-rows mt-4'>
         <div className='w-[30%] ml-4 flex justify-center'>
            <img src={bas} alt='fdd' className='w-80 h-80'/>
         </div>
         <div className='ml-8 w-[70%]'>
            <div className='flex justify-center mt-4'>
               <h1 className='text-3xl font-bold text-blue-500'>Player Informations</h1>
            </div>
            <div className=' mt-2 flex justify-around container mx-auto'>
               <div className=''>
                  <h3 className='text-2xl mt-4 '><span className='font-bold underline'>Player Name</span>: {player.playerName}</h3>
                  
                  <h3 className='text-2xl mt-4'><span className='font-bold underline'>Jersey Number</span>: {player.jerseyNumber}</h3>
                  <h3 className='text-2xl mt-4'><span className='font-bold underline'>AVG Points Scored</span>: {avg.avgPointsScored}</h3>
                  <h3 className='text-2xl mt-4'><span className='font-bold underline'>AVG Number of Assists</span>: {avg.avgNumberAssists}</h3>
               </div>
               <div className='mr-8 '>
                  <h3 className='text-2xl mt-4'><span className='font-bold underline'>Number of Matches</span>: {matches.length} </h3>
                  <h3 className='text-2xl mt-4'><span className='font-bold underline'>Position</span>: {player.position} </h3>
                  <h3 className='text-2xl mt-4'><span className='font-bold underline'>AVG Number of Intercepts</span>: {avg.avgNumberIntercepts} </h3>
                  <h3 className='text-2xl mt-4'><span className='font-bold underline'>AVG Rate Shot Success</span>: {avg.avgShotSuccess} %</h3>
                  <button className='mt-4 text-white rounded-xl bg-blue-500 py-2 px-2 hover:bg-green-700' onClick={() => setPerform(true)}>
                     <h1 className='text-1xl font-bold'>Add new Performance to player</h1>
                  </button>
               </div>
            </div>
         </div>
      </div>
      <MatchModel players={players} isOpen={openPerform} closeModal={() => setPerform(false)}/>
      <h1 className='flex justify-center text-3xl font-bold text-blue-500 mt-4'>Last Five Recents Performances</h1>
      <div className='overflow-x-auto overflow-auto scrollstyle'>
         <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full border table-auto m-4">
               <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                     <th className="py-3 px-6 text-left">Opposing Team</th>
                     <th className="py-3 px-6 text-left">Points Scored</th>
                     <th className="py-3 px-6 text-center">Number of Assists</th>
                     <th className="py-3 px-6 text-center">Number of Intercepts</th>
                     <th className="py-3 px-6 text-center">Number Shots Blocked</th>
                     <th className="py-3 px-6 text-center">Shot Success Rate</th>
                     <th className="py-3 px-6 text-center">Matches Dates</th>
                  </tr>
               </thead>
               <tbody className="text-gray-600 text-sm font-light">
                  {matches && matches.map((game, index) => 
                     <DetailsRow key={index} game={game}/>
                  )}
                  {!matches && <span>No data available</span>}
               </tbody>
            </table>
            {!matches && <p>No data are available</p>}
         </div>
      </div>
    </>
  )
}

export default Player