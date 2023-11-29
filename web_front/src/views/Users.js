/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import UserRow from '../components/UserRow'
import { useNavigate } from 'react-router-dom'

const Users = () => {
   const [users, setUsers] =useState(null)
   const navigate = useNavigate()

   useEffect(() => {
      getUsers()
   }, [])

   const getUsers = async () => {
      try {
         const token = localStorage.getItem('token')
         const url = `${process.env.REACT_APP_API_URL}/api/v1/auth/users`
         const response = await fetch(url, {
            headers: {
               'Authorization': `Bearer ${token}`
            }
         })
         if(response.ok) {
            const data = await response.json()
            setUsers(data)
         } else {
            localStorage.removeItem('token')
            navigate('/login')
         }
      } catch (error) {
         console.log(error);
      }
   }
  return (
    <>
      <Navbar/>
      <div className='flex justify-center mt-4'>
         <h1 className='text-3xl font-bold text-blue-500'>TSI Users Informations</h1>
      </div>
      <div className='overflow-x-auto overflow-auto scrollstyle'>
         <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full border table-auto m-4">
               <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                     <th className="py-3 px-6 text-left">Profil</th>
                     <th className="py-3 px-6 text-left">Username</th>
                     <th className="py-3 px-6 text-center">Email</th>
                     <th className="py-3 px-6 text-center">Account Type</th>
                     <th className="py-3 px-6 text-center">Actions</th>
                     <th className="py-3 px-6 text-center">Delete</th>
                  </tr>
               </thead>
               <tbody className="text-gray-600 text-sm font-light">
                  {users && users.map((user, index) => 
                     <UserRow user={user} key={index} />
                  )}
               </tbody>
            </table>
         </div>
      </div>
    </>
  )
}

export default Users