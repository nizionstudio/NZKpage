import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  // Fotos del slider con extensiones reales
  const slideFiles = [
    '1.JPG',
    '2.JPG',
    '3.JPG',
    '4.JPG',
    '5.JPG',
    '6.JPG',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
  ]

  const slides = slideFiles.map((fileName, index) => ({
    id: index + 1,
    src: `/top10/${fileName}`,
    alt: `NZK Eventos ${index + 1}`,
  }))

  const [currentSlide, setCurrentSlide] = useState(() =>
    Math.floor(Math.random() * slides.length),
  )
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

  const steps = [
    {
      id: 1,
      title: 'Contanos tu evento',
      text: 'Escribinos por una red social y contanos qué servicio necesitás.',
      photo: { src: '/armado/1.JPG', alt: 'Armado destacado 1', aspect: 'horizontal' },
      photoSide: 'right',
      arrowSide: 'left',
    },
    {
      id: 2,
      title: 'Lugar y horario',
      text: 'Enviá ubicación, fecha y horario para cotizar correctamente.',
      arrowSide: 'left',
    },
    {
      id: 3,
      title: 'Evaluamos el espacio',
      text: 'Medimos y analizamos el lugar para asegurar instalación segura y prolija.',
      photo: { src: '/armado/3.jpg', alt: 'Armado destacado 3', aspect: 'vertical' },
      photoSide: 'left',
      arrowSide: 'right',
    },
    {
      id: 4,
      title: 'Planificación',
      text: 'Organizamos logística, materiales y tiempos de montaje.',
    },
    {
      id: 5,
      title: 'Montaje profesional',
      text: 'Armamos todo cuidando estabilidad, presentación y seguridad.',
      photo: { src: '/armado/2.JPG', alt: 'Armado destacado 2', aspect: 'horizontal' },
      photoSide: 'right',
      arrowSide: 'left',
    },
    {
      id: 6,
      title: 'Control de calidad',
      text: 'Revisamos que todo quede firme y estéticamente impecable.',
      arrowSide: 'left',
    },
    {
      id: 7,
      title: 'Retiro puntual',
      text: 'Desmontamos en horario acordado y dejamos el lugar como estaba.',
      photo: { src: '/armado/4.jpg', alt: 'Armado destacado 4', aspect: 'vertical' },
      photoSide: 'left',
    },
  ]

  return (
    <>
      <div className="home-first-screen">
        <Header />
        <div className="slider-container">
          <div className="slider-wrapper">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img className="slide-image" src={slide.src} alt={slide.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="main-content">
        <h2>Bienvenido a NZK Eventos</h2>
      </main>

      <div className="intro-text">
        <p>En NZK Eventos nos enfocamos en brindar un servicio de alta calidad en cada paso. Nuestro objetivo es que tu evento salga perfecto, por eso cuidamos cada detalle desde el primer contacto hasta el desmontaje final.</p>
      </div>

      <div className="steps-section steps-section-vertical">
        <h2 className="steps-title">Así trabajamos</h2>
        <div className="steps-layout">
          <div className="steps-path">
            {steps.map((step, index) => {
              const arrowId = `arrowhead-${step.id}`
              const arrowSide = step.arrowSide || step.photoSide || 'right'
              const curvePath =
                arrowSide === 'left'
                  ? 'M30 0 C10 25 10 75 30 100'
                  : 'M30 0 C50 25 50 75 30 100'

              return (
                <div key={step.id} className="step-group">
                  <div className={`step-row ${step.photoSide === 'left' ? 'reverse' : ''}`}>
                    <div className="step-main">
                      <div className="step-card">
                        <div className="step-number">{step.id}</div>
                        <div>
                          <h3>{step.title}</h3>
                          <p>{step.text}</p>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="step-arrow step-arrow-vertical" aria-hidden="true">
                          <svg viewBox="0 0 60 100" role="presentation">
                            <defs>
                              <marker
                                id={arrowId}
                                markerWidth="10"
                                markerHeight="10"
                                refX="5"
                                refY="5"
                                orient="auto"
                              >
                                <path d="M0 0 L10 5 L0 10 Z" className="step-arrow-head" />
                              </marker>
                            </defs>
                            <path
                              d={curvePath}
                              className="step-arrow-line"
                              markerEnd={`url(#${arrowId})`}
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    {step.photo ? (
                      <figure className={`step-photo ${step.photo.aspect}`}>
                        <img src={step.photo.src} alt={step.photo.alt} />
                      </figure>
                    ) : (
                      <div className="step-photo step-photo-empty" aria-hidden="true" />
                    )}
                  </div>
                </div>
              )
            })}
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

