import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import WeatherTabs from './components/WeatherTabs'
import Guides from './components/utils/Guides'
import Footer from './components/Footer'
import { ThemeProvider } from './components/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <NavBar />
        <Hero />
        <WeatherTabs />
        <Guides />
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default App
