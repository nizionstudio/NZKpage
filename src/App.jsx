import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SobreNosotros from './pages/SobreNosotros'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
    </Routes>
  )
}

export default App
