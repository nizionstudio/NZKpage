import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [copyToast, setCopyToast] = useState({
    visible: false,
    text: '',
    type: 'success',
  })

  const handleCopy = (text, message) => {
    const showToast = (text, type = 'success') => {
      setCopyToast({
        visible: true,
        text,
        type,
      })
    }

    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          showToast(message, 'success')
        })
        .catch(() => {
          showToast(
            `No se pudo copiar automáticamente. Copiá este dato: ${text}`,
            'error',
          )
        })
    } else {
      showToast(
        `No se pudo copiar automáticamente. Copiá este dato: ${text}`,
        'error',
      )
    }
  }

  useEffect(() => {
    if (!copyToast.visible) return
    const timeoutId = setTimeout(
      () => setCopyToast((prev) => ({ ...prev, visible: false })),
      2500,
    )
    return () => clearTimeout(timeoutId)
  }, [copyToast.visible])
  
  // Slides de ejemplo - puedes cambiar el contenido después
  const slides = [
    { 
      id: 1, 
      title: 'Estructuras y Cubiertas',
      subtitle: 'Soluciones profesionales para tus eventos'
    },
    { 
      id: 2, 
      title: 'Mobiliario y Equipamiento',
      subtitle: 'Todo lo que necesitas en un solo lugar'
    },
    { 
      id: 3, 
      title: 'Eventos Impecables',
      subtitle: 'Calidad y profesionalismo en cada detalle'
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Autoplay automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <>
      <Header />
      
      <div className="slider-container">
        <div className="slider-wrapper">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="slide-content">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-subtitle">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <main className="main-content">
        <h2>Bienvenido a NZK Eventos</h2>
      </main>

      <div className="intro-text">
        <p>En NZK Eventos nos enfocamos en brindar un servicio de alta calidad en cada paso. Nuestro objetivo es que tu evento salga perfecto, por eso cuidamos cada detalle desde el primer contacto hasta el desmontaje final.</p>
      </div>

      <div className="steps-section">
        <h2 className="steps-title">Así trabajamos</h2>
        <div className="steps-path">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Contanos tu evento</h3>
            <p>Escribinos por una red social y contanos qué servicio necesitás.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Lugar y horario</h3>
            <p>Enviá ubicación, fecha y horario para cotizar correctamente.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Evaluamos el espacio</h3>
            <p>Medimos y analizamos el lugar para asegurar instalación segura y prolija.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Planificación</h3>
            <p>Organizamos logística, materiales y tiempos de montaje.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <div className="step-number">5</div>
            <h3>Montaje profesional</h3>
            <p>Armamos todo cuidando estabilidad, presentación y seguridad.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <div className="step-number">6</div>
            <h3>Control de calidad</h3>
            <p>Revisamos que todo quede firme y estéticamente impecable.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <div className="step-number">7</div>
            <h3>Retiro puntual</h3>
            <p>Desmontamos en horario acordado y dejamos el lugar como estaba.</p>
          </div>
        </div>
      </div>

      <div className="clients-section">
        <h2 className="steps-title">Nuestros Clientes</h2>
        <div className="clients-gallery">
          <img src="/clientes/bancoalimentos.png" alt="Banco Alimentos" />
          <img src="/clientes/casacroix.png" alt="Casa Croix" />
          <img src="/clientes/cencosud.png" alt="Cencosud" />
          <img src="/clientes/changomas.png" alt="Chango Más" />
          <img src="/clientes/citroen.jpg" alt="Citroën" />
          <img src="/clientes/disco.png" alt="Disco" />
          <img src="/clientes/easy.png" alt="Easy" />
          <img src="/clientes/estanciacardones.png" alt="Estancia Cardones" />
          <img src="/clientes/ford.png" alt="Ford" />
          <img src="/clientes/gobierno.png" alt="Gobierno" />
          <img src="/clientes/jumbo.jpg" alt="Jumbo" />
          <img src="/clientes/lasmarias.png" alt="Las Marías" />
          <img src="/clientes/lasyungas.jpg" alt="Las Yungas" />
          <img src="/clientes/losazahares.jpg" alt="Los Azahares" />
          <img src="/clientes/municipalidad.png" alt="Municipalidad" />
          <img src="/clientes/sanpablo.png" alt="San Pablo" />
          <img src="/clientes/scania.png" alt="Scania" />
          <img src="/clientes/siprosa.png" alt="SIPROSA" />
          <img src="/clientes/vea.png" alt="Vea" />
          <img src="/clientes/volkswagen.jpg" alt="Volkswagen" />
          <img src="/clientes/walmart.png" alt="Walmart" />
          <img src="/clientes/xagatlas.png" alt="Xagatlas" />
          <img src="/clientes/hans.jpg" alt="Hans" />
          <img src="/clientes/citroenfort.png" alt="Citroën Fort" />
        </div>
      </div>

      {copyToast.visible && (
        <div
          className={`copy-toast ${
            copyToast.type === 'error' ? 'copy-toast-error' : 'copy-toast-success'
          }`}
        >
          <span className="copy-toast-icon">
            {copyToast.type === 'error' ? '!' : '✔'}
          </span>
          <span className="copy-toast-text">{copyToast.text}</span>
        </div>
      )}

      <Footer />
    </>
  )
}

export default Home

