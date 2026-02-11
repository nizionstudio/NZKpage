import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Galeria from './pages/Galeria'
import SobreNosotros from './pages/SobreNosotros'
import Contactanos from './pages/Contactanos'
import Terminos from './pages/Terminos'
import Privacidad from './pages/Privacidad'
import EstructurasCubiertas from './pages/EstructurasCubiertas'
import MobiliarioEquipamiento from './pages/MobiliarioEquipamiento'

function App() {
  return (
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
  )
}

export default App
