import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <nav className="nav-left">
        <a href="/estructuras-y-cubiertas">Estructuras y Cubiertas</a>
        <a href="/mobiliario-y-equipamiento">Mobiliario y Equipamiento</a>
        <Link to="/">Inicio</Link>
      </nav>
      <Link to="/" className="logo-title-link">
        <h1 className="logo-title">
          <span className="logo-nzk">NZK</span>
          <span className="logo-eventos"> Eventos</span>
        </h1>
      </Link>
      <nav className="nav-right">
        <a href="/galeria">Galería</a>
        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        <a href="/contactanos">Contáctanos</a>
      </nav>
    </header>
  )
}

export default Header

