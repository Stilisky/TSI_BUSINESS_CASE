import '../assets/css/dashStyle.css'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import PlayerRow from '../components/PlayerRow'
import PlayerModel from '../components/PlayerModel'
import MatchModel from '../components/MatchModel'

const Dashboard = () => {
   const [players, setPlayers] = useState(null)
   const [openModal,setModal] = useState(false)
   const [openPerform,setPerform] = useState(false)

   useEffect(() => {
      getPlayers()
   }, [])
   const getPlayers = async () => {
      try {
         const url = `${process.env.REACT_APP_API_URL}/api/v1/players`
         const response = await fetch(url)
         const data = await response.json()
         setPlayers(data)
      } catch (error) {
         console.log(error);
      }
   }
  return (
    <>
      <Navbar />
      <div className='flex justify-center mt-4'>
         <h1 className='text-3xl font-bold text-blue-500'>TSI Players Informations</h1>
      </div>
      <div className='flex justify-end mr-8 mt-2'>
         <button className='mr-4 text-white rounded-xl bg-green-500 py-2 px-2 hover:bg-green-700' onClick={() => setModal(true)}>
            <h1 className='text-1xl font-bold'>Create new player</h1>
         </button>
         <button className='text-white rounded-xl bg-blue-500 py-2 px-2 hover:bg-blue-700' onClick={() => setPerform(true)}>
            <h1 className='text-1xl font-bold'>Add new Performance to player</h1>
         </button>
      </div>
      <PlayerModel isOpen={openModal} closeModal={() => setModal(false)} getPlayers={getPlayers}/>
      <MatchModel players={players} isOpen={openPerform} closeModal={() => setPerform(false)}/>
      <div className='overflow-x-auto overflow-auto scrollstyle'>
         <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full border table-auto m-4">
               <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                     <th className="py-3 px-6 text-left">Player</th>
                     <th className="py-3 px-6 text-left">Player name</th>
                     <th className="py-3 px-6 text-center">Jersey number</th>
                     <th className="py-3 px-6 text-center">Position</th>
                     <th className="py-3 px-6 text-center">AVG Points Scored</th>
                     <th className="py-3 px-6 text-center">AVG Number of Assists</th>
                     <th className="py-3 px-6 text-center">AVG Number of Intercepts</th>
                     <th className="py-3 px-6 text-center">AVG Number Shots Blocked</th>
                     <th className="py-3 px-6 text-center">AVG Shot Success</th>
                     <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
               </thead>
               <tbody className="text-gray-600 text-sm font-light">
                  {players && players.map((player, index) => (
                     <PlayerRow player={player} key={index} getPlayers={getPlayers}/>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
      <div className='flex justify-center border-t-2 mt-4 pt-2 pb-2'>
         <p className='text-1xl font-bold'>© - 2024</p>
      </div>
    </>
  )
}

export default Dashboard