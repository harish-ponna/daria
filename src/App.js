import React, { useEffect, useState } from 'react'
import Contact from './components/Contact'
import Directory from './components/Directory'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Wonders from './components/Wonders'

const App = () => {

  const [screen, setScreen] = useState('small')

  const handleResize = () => window.innerWidth < 1200 ? setScreen('small') : setScreen('large')

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.innerWidth < 1200 ? setScreen('small') : setScreen('large')
  }, [])

  return (
    <>
      <Directory screen={screen} />
      <Hero screen={screen} />
      <Wonders screen={screen} />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
