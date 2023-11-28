/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MatchModel = ({isOpen, closeModal, players}) => {
   const [pointS, setpointS] = useState(null)
   const [player, setPlayer] = useState(null)
   const [team, setteam] = useState(null)
   const [assist, setAssist] = useState(null)
   const [intercept, setIntercept] = useState(null)
   const [shots, setshots] = useState(null)
   const [success, setsuccess] = useState(null)
   const [error, setError] = useState(null)
   const navigate = useNavigate()
   
   useEffect(() => {
      checkUser()
   }, [])
   
   const checkUser = () => {
      const token = localStorage.getItem('token')
      if(!token && isOpen){
         closeModal()
         navigate('/login')
      }
   }
   const handleSubmit = async () => {
      try {
         const token = localStorage.getItem('token')
         if(pointS && player && team && assist && intercept && shots && success) {
            const url = `http://127.0.0.1:5000/api/v1/games/player/${player}`
            const request = {
               opposingTeam: team,
               pointsScored: pointS,
               numberAssists: assist,
               numberIntercepts:intercept,
               numberShotsBlocked: shots,
               shotSuccess: success
            }
            console.log(request);
            const response = await fetch(url, {
               method: 'POST',
               headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify(request)
            })
            if(response.ok) {
               closeModal()
               setPlayer(null)
               navigate(`/players/views/${player}`)
            } else {
               const data = await response.json()
               setError(data)
            }
         } else {
            setError({message:'All fields are required'})
         }
      } catch (error) {
         setError(error)
      }
   }
   const closeMod = () => {
      setError(null)
      closeModal()
   }

   if(!isOpen) return null;
  return (
    <>
      <div className="py-12 bg-gray-700 bg-opacity-25 transition duration-150 ease-in-out z-10 absolute h-[100%] overflow-y-auto overflow-auto top-0 right-0 bottom-0 left-0">
         <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
               
               <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Add new Performance to player</h1>
               
               {error && <h1 className="font-bold text-red-500 leading-tight mb-4">{error.message}</h1>}

               <label for="position" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Player name</label>
               <span className='font-bold text-red-500'>*</span>
               <select value={player} onChange={(text)=> {setPlayer(text.target.value)}} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-white rounded border">
                  <option selected disabled>Select player</option>
                  {players && players.map( (play, index) => 
                     <option key={index} value={play._id}>{play.playerName}</option>
                  )}
               </select>

               <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Opposing Team Name </label>
               <span className='font-bold text-red-500'>*</span>
               <input type='text' onChange={(text) => {setteam(text.target.value)}} required className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Team name" />

               <label for="pts" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Points Scored </label>
               <span className='font-bold text-red-500'>*</span>
               <input type='number' step={1} min={0} onChange={(text) => {setpointS(text.target.value)}} required className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="100" />
               
               <label for="pdeci" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Number of Assists </label>
               <span className='font-bold text-red-500'>*</span>
               <input onChange={(text) => {setAssist(text.target.value)}} type='number' min={0} step={1} required id="pass" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="100" />

               <label for="numintercept" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Number of Intercepts </label>
               <span className='font-bold text-red-500'>*</span>
               <input onChange={(text) => {setIntercept(text.target.value)}} type='number' min={0} step={1} required id="pass" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="100" />

               <label for="numintercept" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Number Shots Blocked </label>
               <span className='font-bold text-red-500'>*</span>
               <input onChange={(text) => {setshots(text.target.value)}} type='number' min={0} step={1} required id="pass" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="100" />

               <label for="numintercept" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Rate Shots Success </label>
               <span className='font-bold text-red-500'>*</span>
               <input onChange={(text) => {setsuccess(text.target.value)}} type='number' min={0} max={100} step={0.10} required id="pass" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="100" />

               <div className="flex items-center justify-start w-full">
                  <button onClick={handleSubmit} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 transition duration-150 ease-in-out hover:bg-green-600 bg-green-700 rounded text-white px-8 py-2 text-sm">Add new match to player</button>
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-red-400 ml-8 bg-red-100 transition duration-150 text-red-600 ease-in-out hover:border-red-400 hover:bg-red-300 border rounded px-8 py-2 text-sm" onClick={closeMod} >Cancel</button>
               </div>
               <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-red-400 hover:text-red-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-red-600" onClick={closeMod} aria-label="close modal" role="button">
                  <svg  xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" />
                     <line x1="18" y1="6" x2="6" y2="18" />
                     <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
               </button>
            </div>
         </div>
      </div>
    </>
  )
}

export default MatchModel