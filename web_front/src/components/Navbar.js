import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
   const navigate =useNavigate()
   const token = localStorage.getItem('token')

   const handleLogout = async () => {
      localStorage.removeItem('token')
      navigate('/')
   }
  return (
    <>
      <div className='flex justify-between mt-4 border-b-2 pb-4'>
         <div className='ml-4'>
            <h1 className='text-2xl font-bold'>T S I</h1>
         </div>
         <div className='flex flex-around mr-4'>
            <button className='text-white rounded-xl bg-blue-500 py-2 px-2 mr-4 hover:bg-blue-700' >
               <Link to={'/dashboard'}>
                  <h1 className='text-1xl font-bold'>DASHBOARD</h1>
               </Link>
            </button>
            {token ? 
               <>
                  <button className='text-white rounded-xl bg-green-500 py-2 px-2 hover:bg-green-700'>
                     <Link to={'/users'}>
                        <h1 className='text-1xl font-bold'>USERS</h1>
                     </Link>
                  </button>
                  <button className='text-white rounded-xl bg-red-500 py-2 px-2 hover:bg-red-700 ml-4' onClick={handleLogout}>
                     <h1 className='text-1xl font-bold'>LOGOUT</h1>
                  </button>
               </> :
               <button className='text-white rounded-xl bg-green-500 py-2 px-2 hover:bg-green-700' >
                  <Link to={'/login'}>
                     <h1 className='text-1xl font-bold'>LOGIN</h1>
                  </Link>
               </button>
            }            
         </div>
      </div>
    </>
  )
}

export default Navbar