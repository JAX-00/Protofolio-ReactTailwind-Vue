import React, { useState } from 'react'
import Navbar from './Ui/Navbar'
import MobileMenu from './Ui/MobileMenu';
import LoadingScreenAnimation from './Ui/LoadingScreenAnimation';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <LoadingScreenAnimation />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  )
}

export default App