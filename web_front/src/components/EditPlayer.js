/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditPlayer = ({isOpen, closeModal, getPlayers, player }) => {
   const [name, setName] = useState(player.playerName ?? null)
   const [jersey, setJersey] = useState(player.jerseyNumber ?? null)
   const [pos, setPos] = useState(player.position ?? null)
   const [img, setImg] = useState(null)
   const [error, setError] = useState(null)
   const navigate = useNavigate()
   
   useEffect(() => {
      checkUser()
   })
   
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
         const url = `${process.env.REACT_APP_API_URL}/api/v1/players/${player._id}`
         const request = {
            playerName : name,
            jerseyNumber: jersey,
            position: pos,
            image: img
         }
         console.log(request);
         const response = await fetch(url, {
            method: 'PUT',
            headers: {
               'Authorization': `Bearer ${token}`,
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
         })
         if(response.ok) {
            closeModal()
            getPlayers()
            setPos(null)
         } else if(response.status === 401){
            navigate("/login")
         } else {
            const data = await response.json()
            setError(data)
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
      <div className="py-12 bg-gray-700 bg-opacity-25 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0">
         <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
               
               <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Update Player Informations</h1>
               {error && <h1 className="font-bold text-red-500 leading-tight mb-4">{error.message}</h1>}
               <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Player name </label>
               <span className='font-bold text-red-500'>*</span>
               <input id="name" onChange={(text) => {setName(text.target.value)}} required className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" value={name} />
               
               <label for="jersey" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Jersey number </label>
               <span className='font-bold text-red-500'>*</span>
               <input onChange={(text) => {setJersey(text.target.value)}} type='number' step={1} required id="pass" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" value={jersey} />

               <label for="position" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Position </label>
               <span className='font-bold text-red-500'>*</span>
               <select value={pos} onChange={(text)=> {setPos(text.target.value)}} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                  <option selected disabled value={null}>Select player position</option>
                  <option value={'POINT GUARD'}>POINT GUARD</option>
                  <option value={'SHOOTING GUARD'}>SHOOTING GUARD</option>
                  <option value={'SMALL FORWARD'}>SMALL FORWARD</option>
                  <option value={'POWER FORWARD'}>POWER FORWARD</option>
                  <option value={'CENTER'}>CENTER</option>
               </select>

               <label for="position" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Player image </label>
               <input onChange={(text) => {setImg(text.target.value)}} type='file' className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />

               <div className="flex items-center justify-start w-full">
                  <button onClick={handleSubmit} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 transition duration-150 ease-in-out hover:bg-blue-600 bg-blue-700 rounded text-white px-8 py-2 text-sm">Update player</button>
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-red-400 ml-8 bg-red-300 transition duration-150 text-gray-600 ease-in-out hover:border-red-400 hover:bg-red-300 border rounded px-8 py-2 text-sm" onClick={closeMod} >Cancel</button>
               </div>
               <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-red-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={closeMod} aria-label="close modal" role="button">
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

export default EditPlayer