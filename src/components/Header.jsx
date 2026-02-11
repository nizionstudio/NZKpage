import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

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
        <Link to="/contactanos">Contáctanos</Link>
      </nav>
      <button
        type="button"
        className="menu-toggle"
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ⋯
      </button>
      {menuOpen && (
        <div className="menu-dropdown">
          <a href="/estructuras-y-cubiertas">Estructuras y Cubiertas</a>
          <a href="/mobiliario-y-equipamiento">Mobiliario y Equipamiento</a>
          <Link to="/">Inicio</Link>
          <a href="/galeria">Galería</a>
          <Link to="/sobre-nosotros">Sobre Nosotros</Link>
          <Link to="/contactanos">Contáctanos</Link>
        </div>
      )}
    </header>
  )
}

export default Header

