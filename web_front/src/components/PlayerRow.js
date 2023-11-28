/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import playerimg from '../assets/images/player.png'
import { Link, useNavigate } from 'react-router-dom'
import EditPlayer from './EditPlayer'

const PlayerRow = ({player, getPlayers}) => {
   const [avg, setAvg] =useState([])
   const [open, setOpen] = useState(false)
   const navigate = useNavigate()

   useEffect(() => {
      stats()
   }, [])

   const handleDelete = async () => {
      try {
         const token = localStorage.getItem('token')
         if(!token){
            navigate('/login')
         } else {
            const url = `http://127.0.0.1:5000/api/v1/players/${player._id}`
            const response = await fetch(url, {
               method: 'DELETE',
               headers: {
                  'Authorization': `Bearer ${token}`
               },
            })
            if(response.ok) {
               getPlayers()
            }
         }
      } catch (error) {
         console.log(error);
      }
   }

   const stats = async () => {
      try {
         const url = `http://127.0.0.1:5000/api/v1/players/${player._id}/statistiques`
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
      <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
         <td className="py-3 px-6 text-left">
            <div className="flex items-center">
               <img src={playerimg} alt="iMac Front Image" class="w-auto rounded-lg h-8 mr-3"/>
            </div>
         </td>
         <td className="py-3 px-6 text-left">
            <div className="flex items-center">
                  <span className="font-medium">{player.playerName}</span>
            </div>
         </td>
         
         <td className="py-3 px-6 text-center">
            <span className="font-medium">{player.jerseyNumber}</span>
         </td>

         <td className="py-3 px-6 text-center">
            <span className="font-medium">{player.position}</span>
         </td>

         <td className="py-3 px-6 text-center">
            <span className="font-medium">{avg.avgPointsScored}</span>
         </td>

         <td className="py-3 px-6 text-center">
            <span className="font-medium">{avg.avgNumberAssists}</span>
         </td>

         <td className="py-3 px-6 text-center">
            <span className="font-medium">{avg.avgNumberIntercepts}</span>
         </td>

         <td className="py-3 px-6 text-center">
            <span className="font-medium">{avg.avgNumberShotsBlocked}</span>
         </td>

         <td className="py-3 px-6 text-center">
            <span className="font-medium">{avg.avgShotSuccess} %</span>
         </td>
         
         <td className="py-3 px-6 text-center">
            <div className="flex item-center justify-center">
               <button className="w-4 mr-4 transform hover:text-green-500 hover:scale-110">
                  <Link to={`/players/views/${player._id}`}>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                  </Link>
               </button>

               <button onClick={() => setOpen(true)} className="w-4 mr-4 transform hover:text-blue-500 hover:scale-110">
                 
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                     </svg>
               </button>    

               <button className="w-4 mr-4 transform hover:text-red-500 hover:scale-110" onClick={handleDelete}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
               </svg>
               </button>
            </div>
         </td>
      </tr>
      <EditPlayer isOpen={open} player={player} getPlayers={getPlayers} key={player._id} closeModal={() => setOpen(false)}/>
    </>
  )
}

export default PlayerRow