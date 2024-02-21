import React from 'react'
import { homeImageQuote, homeImageQuote2, homeShortAboutMe } from '../constants'
import { homeImage } from '../assets/pictures'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <section className='max-sm:pt-[50px] font-mono flex gap-10 flex-col items-center justify-center sm:pt-[200px] mb-20 sm:p-10'>
        <div className='text-center flex justify-center max-w-[2100px] sm:border-gold sm:pb-40 sm:border-b-2 relative items-center gap-12'>
            <img src={homeImage} className='max-sm:hidden sm:shadow-xl sm:shadow-yellow-800 sm:w-[50%] sm:h-[50%] rounded-lg max-w-[500px] lg:w-[50%]' alt=''/>
            <p className=' bg-black absolute w-full max-sm:block hidden h-full top-0 opacity-50 max-sm:bg-bg-image 
              max-sm:bg-no-repeat max-sm:bg-cover'></p>
            <p 
              className=' p-4
              max-sm:text-[50px] md:text-2xl lg:text-3xl  
              sm:shadow-xl sm:shadow-yellow-800 sm:text-md z-0   
            text-gold tracking-[4px] lg:max-w-[30%] ' 
              >{homeImageQuote2.toUpperCase()}</p>
        </div>
        
        <div className='flex flex-col justify-center items-center gap-6'>
          <h3 className=' pt-[200px]
          h-[500px]  flex-col items-center justify-center
        text-gold font-semibold
          text-2xl text-center w-[80%] lg:text-3xl lg:w-[48%]'>{homeShortAboutMe}
          <Link to='/aboutme' className='text-decoration text-unde underline'>Read more</Link> about me or browse my {' '}
          <Link to='/portfolio' className='underline'>portfolio.</Link>
          </h3>

          <div className='max-sm:w-[380px] lg:w-[900px] sm:w-[600px]'>
              <Carousel />
          </div>

          <Link to='/portfolio' className='border-2 border-gold p-2 px-8 text-gold font-bold font-mono tracking-widest hover:bg-gold hover:text-black hover:text-xl'>View Full List</Link>
        </div>
    </section>
  )
}

export default Home