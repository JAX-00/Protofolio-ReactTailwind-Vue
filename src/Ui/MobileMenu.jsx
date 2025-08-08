import React from 'react'
import { RxCross2 } from "react-icons/rx";

function MobileMenu({isMenuOpen, setIsMenuOpen}) {
  return (
    <div className={` fixed w-full top-0 left-0 bg-black/40 backdrop-blur-md px-1 border-b border-white/10 shadow-lg z-40 flex flex-col items-center justify-center transition-all duration-300 gap-15 ease-in-out ${isMenuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>
      <button onClick={() => setIsMenuOpen(false)} className='absolute top-5 right-7 text-2xl focus:outline-none cursor-pointer' aria-label='Close Menu'>
        <RxCross2 />
      </button>
    </div>
  )
}

export default MobileMenu