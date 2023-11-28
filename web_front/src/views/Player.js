import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import bas from '../assets/images/bas.jpeg'
import DetailsRow from '../components/DetailsRow'

const Player = () => {
   const [player, setPlayer] = useState([])
   const [matches, setMatches] = useState([])
   const playerid = useParams()
   useEffect(() => {
      getPlayer()
   }, [])

   const getPlayer = async () => {
      try {
         const token = localStorage.getItem('token')
         const url = `http://127.0.0.1:5000/api/v1//players/${playerid.playerId}`
         const response = await fetch(url, {headers: {'Authorization': `Bearer ${token}`}})
         const data = await response.json()
         setPlayer(data)
         setMatches(data.performance.slice(-5))
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
            <div className=' mt-2 flex justify-between'>
               <div className=''>
                  <h3 className='text-2xl mt-4 '>Player Name: {player.playerName}</h3>
                  
                  <h3 className='text-2xl mt-4'>Jersey Number: {player.jerseyNumber}</h3>
                  <h3 className='text-2xl mt-4'>AVG Points Scored: 15</h3>
                  <h3 className='text-2xl mt-4'>AVG Number of Assists: 15</h3>
               </div>
               <div className='mr-8 '>
                  <h3 className='text-2xl mt-4'>Number of Matches: {matches.length} </h3>
                  <h3 className='text-2xl mt-4'>Position: {player.position} </h3>
                  <h3 className='text-2xl mt-4'>AVG Number of Intercepts: 45 </h3>
                  <h3 className='text-2xl mt-4'>AVG Shot Success: 85 </h3>
                  {/* <button className='mt-4 text-white rounded-xl bg-blue-500 py-2 px-2 hover:bg-green-700'>
                     <h1 className='text-1xl font-bold'>Update player</h1>
                  </button> */}
               </div>
            </div>
         </div>
      </div>
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
         </div>
      </div>
    </>
  )
}

export default Player