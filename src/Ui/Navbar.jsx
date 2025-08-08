import React, { useEffect } from 'react'
import Logo from './Logo'
import { MdMenu } from "react-icons/md";

function Navbar({isMenuOpen, setIsMenuOpen}) {
  useEffect(()=> {document.body.style.overflow = isMenuOpen ? 'hidden' : ""}, [isMenuOpen]);
  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg px-1 border-b border-white/10 shadow-lg'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex justify-between items-center font-mono h-16'>
          <Logo />

          <div onClick={() => setIsMenuOpen(prev => !prev)} className='text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono'>
            <MdMenu />
          </div>


          <div className='flex md:flex items-center space-x-8'>
            <div className='hidden md:flex items-center space-x-8'>
              <a href="#home" className='text-red-900 hover:text-red-600 text-lg transform hover:scale-110 transition-transform duration-300'>
                Home
              </a>
              <a href="#about" className='text-red-900 hover:text-red-600 text-lg transform hover:scale-110 transition-transform duration-300'>
                About
              </a>

              <a href="#projects" className='text-red-900 hover:text-red-600 text-lg transform hover:scale-110 transition-transform duration-300'>
                Projects
              </a>
              <a href="#contact" className='text-red-900 hover:text-red-600 text-lg transform hover:scale-110 transition-transform duration-300'>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar