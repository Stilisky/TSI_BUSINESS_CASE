import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const token = localStorage.getItem('token')
  return (
    <>
      <div className='flex justify-between mt-4 border-b-2 pb-4'>
         <div className='ml-4'>
            <h1 className='text-2xl font-bold'>T S I</h1>
         </div>
         <div className='flex flex-around mr-4'>
            {token ? 
               <button className='text-white rounded-xl bg-green-500 py-2 px-2 hover:bg-green-700' >
                  <h1 className='text-1xl font-bold'>LOGIN</h1>
               </button> :
               <button className='text-white rounded-xl bg-red-500 py-2 px-2 hover:bg-red-700' >
                  <h1 className='text-1xl font-bold'>LOGOUT</h1>
               </button>
            }
            <button className='text-white rounded-xl bg-blue-500 py-2 px-2 ml-4 hover:bg-blue-700' >
               <Link to={'/'}>
                  <h1 className='text-1xl font-bold'>DASHBOARD</h1>
               </Link>
            </button>
         </div>
      </div>
    </>
  )
}

export default Navbar