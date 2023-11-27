import React from 'react'
import Navbar from '../components/Navbar'
// import basketball from '../assets/images/basketball.svg'
import basketball1 from '../assets/images/basketball1.svg'
import basketball2 from '../assets/images/basketball2.svg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-around mt-4 h-[450px]'>
         <div className='ml-12'>
            <div className='flex justify-center ml-8'>
               <h1 className='text-4xl font-bold mt-8 text-blue-400'>T S I</h1>
            </div>
            <div className='flex justify-center ml-8'>
               <h1 className='text-2xl font-bold mt-4'>Tailoring Sports Investments</h1>
            </div>
            <p className='mt-4'>
               Diam no diam et clita ea ut. Amet dolor sea et elitr. Amet kasd eos no est Amet kasd eos no est<br/>
               Sí apparire piaceri da o lui cosa nostri. Quel come la piú nostro o spezial Amet kasd eos no est<br/>
               crevant monitors plus. Démarrées et sous seves Amet kasd eos no est soleil, navrantes papillon<br/> 
               nuits des aux pieds appelle soleils bruns, poussifs Amet kasd eos no est quand au clapotements<br/>
               qui flamandsQuedo baja mi grupos aire por al en. Amet kasd eos no est De transparente y lenta.<br/>
            </p>
            <div className='flex justify-center ml-8 mt-4'>
               <button className='text-white rounded-xl bg-blue-500 py-2 px-2 ml-4 hover:bg-blue-700' >
                  <Link to={'/'}>
                     <h1 className='text-1xl font-bold'>PLAYERS</h1>
                  </Link>
               </button>
            </div>
         </div>
         <div className='flex justify-around mr-12'>
            <img src={basketball1} alt='BasketBall' className='w-[500px]'/>
         </div>
         
      </div>
      <div className='flex justify-around mt-4 h-[250px]'>
         <div className='ml-16'>
            <img src={basketball2} alt='BasketBall' className='h-[250px]'/>
         </div>
         <div className='mt-24 mr-8'>
            <p>
               Diam no diam et clita ea ut. Amet dolor sea et elitr. Amet kasd eos no est Amet kasd eos no est<br/>
               Sí apparire piaceri da o lui cosa nostri. Quel come la piú nostro o spezial Amet kasd eos no est<br/>
               Sí apparire piaceri da o lui cosa nostri. Quel come la piú nostro o spezial Amet kasd eos no est<br/>
            </p>
            <div className='flex justify-center mt-4'>
               <button className='text-white rounded-xl bg-green-500 py-2 px-2 ml-4 hover:bg-green-700' >
                  <Link to={'/'}>
                     <h1 className='text-1xl font-bold'>PLAYERS PERFORMANCE</h1>
                  </Link>
               </button>
            </div>
         </div>
      </div>
      <div className='flex justify-center border-t-2 mt-4 pt-2 pb-2'>
         <p className='text-1xl font-bold'>© - 2024</p>
      </div>
    </>
  )
}

export default LandingPage