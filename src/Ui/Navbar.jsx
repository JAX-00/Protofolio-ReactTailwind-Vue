import React from 'react'
import Logo from './Logo'

function Navbar() {
  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg px-1 border-b border-white/10 shadow-lg'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex justify-between items-center font-mono h-16'>
          <Logo />
          <div className='flex md:flex items-center space-x-8'>
            <div className='hidden md:flex items-center space-x-8'>
              <a href="#home" className='text-gray-300 hover:text-black text-lg transform hover:scale-110 transition-transform duration-300'>
                Home
              </a>
              <a href="#about" className='text-gray-300 hover:text-black text-lg transform hover:scale-110 transition-transform duration-300'>
                About
              </a>

              <a href="#projects" className='text-gray-300 hover:text-black text-lg transform hover:scale-110 transition-transform duration-300'>
                Projects
              </a>
              <a href="#contact" className='text-gray-300 hover:text-black text-lg transform hover:scale-110 transition-transform duration-300'>
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