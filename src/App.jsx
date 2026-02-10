import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Galeria from './pages/Galeria'
import SobreNosotros from './pages/SobreNosotros'
import Contactanos from './pages/Contactanos'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      <Route path="/contactanos" element={<Contactanos />} />
    </Routes>
  )
}

export default App
