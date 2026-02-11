import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Galeria from './pages/Galeria'
import SobreNosotros from './pages/SobreNosotros'
import Contactanos from './pages/Contactanos'
import Terminos from './pages/Terminos'
import Privacidad from './pages/Privacidad'
import EstructurasCubiertas from './pages/EstructurasCubiertas'
import MobiliarioEquipamiento from './pages/MobiliarioEquipamiento'
import { useEffect } from 'react'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estructuras-y-cubiertas" element={<EstructurasCubiertas />} />
        <Route path="/mobiliario-y-equipamiento" element={<MobiliarioEquipamiento />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/privacidad" element={<Privacidad />} />
      </Routes>
    </>
  )
}

export default App
