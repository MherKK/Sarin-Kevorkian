import { useEffect, useState } from 'react';
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'

const Header = () => {

    const [windowWidth,setWindowWidth] = useState('bg-[#0f0f0f]');

    useEffect(() => {
        if(window.innerWidth < 1024){
            setWindowWidth('black-gradient')
        }
        addEventListener('resize', (e) => {
            if(window.innerWidth < 1024){
                setWindowWidth('black-gradient')
            }else{
                setWindowWidth('nonblack-gradient')
            }
        })
    },[])

    let hamburgerCoordinates = {
        first:{
          top:0,
          deg:0
        },
        second:0,
        third:{
          top:0,
          deg:0
        },
        sideBarMenuRight: -4000
      }
    const [hamburger,setHamburger] = useState(hamburgerCoordinates);
  console.log(windowWidth);
  
    return (
    <header className='flex  justify-evenly items-center py-8 px-8 max-lg:flex-col  max-lg:gap-6  z-20 w-full'>
        <Link className='text-gold font-bold text-3xl leading-none max-lg:text-[70px] text-center tracking-wider' onClick={() => {
            document.documentElement.scrollTop = '0'
            document.body.scrollTop = '0'
            }} to='/'>
                Sarin Kevorkian
        </Link>
        <nav className='relative flex justify-center items-center'>
            
            <ul style={{top:`${hamburger.sideBarMenuRight}px`}}  className={`flex-1 flex justify-center items-center gap-16 z-20
        max-lg:flex-col max-lg:absolute max-lg:rounded-lg max-lg:transition-all  max-lg:duration-500 max-lg:h-[200px] max-lg:gap-4 ${windowWidth} max-lg:w-[200px]
            `}>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <Link 
                        onClick={() => {
                            setHamburger({...hamburgerCoordinates, sideBarMenuRight:-4000})
                        }}
                        to={item.path}
                        className='font-montserrat lg:tracking-[4px] text-[19px]  hover:underline hover:underline-offset-[10px] leading-norma text-gold font-bold  max-lg:text-[18px] '
                        >
                        {item.label}
                        </Link>
                    </li>
                ))}
        
            </ul>


            <div className="flex justify-center items-center gap-6">
                <button onClick={(e) => {
                    e.preventDefault();
                    hamburgerCoordinates.first.deg === hamburger.first.deg ? 
                    setHamburger({
                    first:{
                        top:16,
                        deg:45
                    },
                    second:500,
                    third:{
                        top:8,
                        deg:45
                    },
                    sideBarMenuRight: 80
                    }) : setHamburger(hamburgerCoordinates)
            }} className='hidden z-20   max-lg:flex max-lg:flex-col max-lg:gap-2 max-lg:cursor-pointer'>
                <span style={{top:`${hamburger.first.top}px`, rotate:`${hamburger.first.deg}deg`}} className={`block relative   w-7 h-1 bg-gold  duration-500  transition-all`}></span>
                <span style={{left:`${hamburger.second}px`}}  className={`block relative  top-0   transition-all w-7 h-1 bg-gold duration-500`} ></span>
                <span style={hamburger.sideBarMenuRight == 80 ? {top:`-${hamburger.third.top}px`, rotate:`-${hamburger.third.deg}deg`,backgroundColor:'white'}: {top:`-${hamburger.third.top}px`, rotate:`-${hamburger.third.deg}deg`}} className={`block relative   w-7 h-1  ${hamburger.sideBarMenuRight == 0 ? 'bg-white' : 'bg-gold'} duration-500  transition-all`}></span>
          </button>
        </div>

        </nav>
    </header>
  )
}

export default Header