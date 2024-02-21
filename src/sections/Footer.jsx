import React from 'react'
import { Link } from 'react-router-dom'
import { facebookLogo, instaLogo } from '../assets/pictures'

const Footer = () => {
    let date = new Date();
  return (
    <footer className='mt-20 font-mono md:text-center border-t-2 p-10 border-gold'>
        <h1 className='text-3xl font-bold text-gold tracking-wider'>Sarine Kevorkian</h1>
        <div className='flex max-sm:flex-col md:justify-center mt-8 items-start gap-6'>
            
           <div className='flex flex-col md:justify-center md:gap-6 gap-2'>
                <h3 className='text-2xl text-gold md:hidden'>My Contacts:</h3>
                <Link className='text-lg  hover:underline hover:underline-offset-8  text-gold tracking-wider' to="tel:+17472187266">+1(747)218-7266</Link>
                <Link className='text-lg  hover:underline hover:underline-offset-8 text-gold tracking-wider' to="mailto:sarinkevorkian01@gmail.com">sarinkevorkian01@gmail.com</Link>
                <Link className='text-lg  underline underline-offset-8 text-gold tracking-wider' to='https://maps.app.goo.gl/YsbLDE9bEJdjrBJc8' target='_blank'>View on Google Maps</Link>
           </div>
        </div>
        <div className='md:flex md:flex-col md:items-center'>
            <h3 className='text-2xl text-gold mt-8'>Follow Me</h3>
            <div>
                <Link to='https://www.instagram.com/mylifein__la' target='_blank'><img className='w-12 inline-block' src={instaLogo}/></Link>
                <Link><img className='w-12 inline-block' src={facebookLogo}/></Link>
            </div>
        </div>
        <div className='text-gold mt-8'>
             © {date.getFullYear()} Sarine Kevorkian. All Rights Reserved.
        </div>
    </footer>
  )
}

export default Footer