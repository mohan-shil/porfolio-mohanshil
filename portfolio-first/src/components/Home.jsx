import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
    
    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-400 '>Hi, I am</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-200'>Mohat Shil</h1>
        <h2 className='text-4xl sm:text-7xl font-bold  text-gray-400'>QA Engineer</h2>
        <p className='text-gray-500 mx-w-[700px]'>with 5 years of Experience</p>
        <div>
        <button className='text-white group border-2 px-6 py-3 my-2 items-center flex hover:bg-pink-600 hover:border-pink-600'>
             View Work
             <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight 
             className='ml-3 '/></span>
             </button>
        </div>
    </div>
        
    </div>
  )
}

export default Home