import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import WeatherTabs from './components/WeatherTabs'
import Guides from './components/utils/Guides'
import Footer from './components/Footer'



function App() {
  

  return (
    <>
      <NavBar />
      <Hero />
      <WeatherTabs />
      <Guides />
      <Footer/>
    </>
  )
}

export default App
