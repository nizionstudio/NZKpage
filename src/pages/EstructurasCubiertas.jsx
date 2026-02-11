import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function EstructurasCubiertas() {
  const location = useLocation()
  const [selectedImage, setSelectedImage] = useState(null)
  useEffect(() => {
    if (!location.hash) return
    const target = document.querySelector(location.hash)
    if (!target) return
    const timeoutId = setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
    return () => clearTimeout(timeoutId)
  }, [location.hash])

  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const phoneNumbers = ['+5493816667948', '+5493812000512']
  const items = [
    {
      title: 'Carpa blanca 8 x 11',
      description:
        'Carpa de 8 x 11 metros con 8 patas. En lona blackout, para 90 a 100 personas, cerrada o abierta, alto mínimo lateral 2,50 en el centro sube a casi 4 mts. Con araña de iluminación.',
      images: ['/estructuras/1.jpeg'],
    },
    {
      title: 'Carpa blanca 6 x 9',
      description:
        'Carpa para 70 a 75 personas, rectangular 6 x 9 mts. Cerrada o abierta, con laterales de todo tipo. Altura regulable, con araña de iluminación.',
      images: ['/estructuras/2.JPG', '/estructuras/3.jpg', '/estructuras/4.jpg'],
    },
    {
      title: 'Carpa blanca 6 x 6',
      description:
        'La carpa más solicitada, de 6 x 6 mts. Ideal para hasta 5 mesas de 10 personas, con laterales transparentes, con ventanas o ciegos.',
      images: ['/estructuras/5.JPG', '/estructuras/6.JPG', '/estructuras/7.jpg'],
    },
    {
      title: 'Carpa blanca 4,5 x 4,5',
      description:
        'Carpas blancas 4,5 x 4,5. Carpa estructural de 4,5 x 4,5 mts, cerradas o abiertas 20,25 m2. Ideal para espacios reducidos y buena capacidad.',
      images: ['/estructuras/8.jpg', '/estructuras/9.jpeg', '/estructuras/10.jpeg'],
    },
    {
      title: 'Carpa blanca 4 x 4',
      description:
        'Carpa blanca 4 x 4 mts. Con o sin cieloraso de tela, laterales ciegos, con ventana o transparentes.',
      images: ['/estructuras/1a.jpeg', '/estructuras/2a.jpg'],
    },
    {
      title: 'Carpa 6 x 4 con techo TRANSPARENTE',
      description:
        'Carpa Transparente de 6 x 4, con bordes negros, se ve el cielo desde dentro de la carpa, muy estéticas y elegantes!!!',
      images: ['/estructuras/a1.jpg', '/estructuras/a2.jpg', '/estructuras/a3.JPG'],
    },
  ]
  const cerramientosItems = [
    {
      title: 'Cerramiento de galerias',
      description:
        'Cerramos galerías hasta 2,50 mts de alto, ciegos, con ventana, transparentes.',
      images: ['/estructuras/a5.jpeg', '/estructuras/a6.jpeg', '/estructuras/a7.jpg'],
    },
  ]
  const camineriasItems = [
    {
      title: 'Camineria para acceso impermeable',
      description:
        'Techo de 2 mts. de ancho por 2, 4, 6, 8 u otras medidas, cada 2 metros. Blancos, transparentes!!!',
      images: ['/estructuras/a4.jpg'],
    },
    {
      title: 'Camineria con luces Led',
      description: 'De 2 metros de ancho por 2, 4, 6, 8, 10 mts de largo.',
      images: ['/estructuras/c5.jpg', '/estructuras/c6.jpg', '/estructuras/c7.jpg'],
    },
  ]
  const pisosItems = [
    {
      title: 'Alfombra roja de 2 mts de ancho',
      description: 'Alfombra roja para distintos usos de 2 mts de ancho.',
      images: ['/estructuras/b6.jpg'],
    },
    {
      title: 'Pisos con o sin alfombra',
      description:
        'Módulos de piso de 1,22 x 2,44 de tablero fenólico con base de tubo estructural, pueden ir con o sin alfombra.',
      images: ['/estructuras/b7.jpg', '/estructuras/b8.jpg', '/estructuras/b9.PNG'],
    },
    {
      title: 'Piso deck de madera',
      description: 'Para carpas o jardines, módulos de 1 x 2 mts.',
      images: ['/estructuras/c2.jpg', '/estructuras/c3.jpg', '/estructuras/c4.jpg'],
    },
  ]
  const gazeboItems = [
    {
      title: 'Gazebo de 3 x 3 blanco',
      description: 'Plegables, de tela blanca. No son impermeables para lluvia.',
      images: ['/estructuras/a8.jpg', '/estructuras/a9.jpg'],
    },
    {
      title: 'Gazebo 3 x 3',
      description: 'Gacebos plegables de 3 x 3, cerrado o abierto.',
      images: ['/estructuras/b1.jpg', '/estructuras/b2.JPG', '/estructuras/b3.JPG'],
    },
    {
      title: 'Gazebo de ceremonias',
      description: 'Gazebo de 3 x 3 para ceremonias, techo de tela blanca.',
      images: ['/estructuras/b4.jpg', '/estructuras/b5.jpg'],
    },
  ]

  let phoneCursor = 0
  const withPhone = (item) => {
    const phone = phoneNumbers[phoneCursor % phoneNumbers.length]
    const message = `Hola! Quisiera consultar por ${item.title}`
    const link = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(
      message,
    )}`
    phoneCursor += 1
    return { ...item, whatsappLink: link }
  }

  const carpasItems = items.map(withPhone)
  const gazebosItems = gazeboItems.map(withPhone)
  const cerramientosItemsWithPhone = cerramientosItems.map(withPhone)
  const camineriasItemsWithPhone = camineriasItems.map(withPhone)
  const pisosItemsWithPhone = pisosItems.map(withPhone)

  return (
    <>
      <Header />
      <div className="catalogo-page">
        <div className="catalogo-hero">
          <h1 className="catalogo-title">Estructuras y Cubiertas</h1>
          <p className="catalogo-subtitle">
            Catalogo inicial de estructuras y cubiertas para eventos.
          </p>
        </div>

        <div className="catalogo-content">
          <section className="catalogo-section" id="carpas">
            <h2 className="catalogo-section-title">Carpas</h2>
            <div className="catalogo-grid">
              {carpasItems.map((item) => (
                <article key={item.title} className="catalogo-item">
                  <div className="catalogo-item-media catalogo-item-media-single">
                    <button
                      type="button"
                      className="catalogo-thumb"
                      onClick={() => setSelectedImage(item.images[0])}
                    >
                      <img src={item.images[0]} alt={item.title} loading="lazy" />
                    </button>
                  </div>
                  <div className="catalogo-item-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  <button
                    type="button"
                    className="catalogo-view"
                    onClick={() => {
                      setSelectedItem(item)
                      setSelectedIndex(0)
                    }}
                  >
                      Ver producto
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="catalogo-section" id="gazebos">
            <h2 className="catalogo-section-title">Gazebos</h2>
            <div className="catalogo-grid">
              {gazebosItems.map((item) => (
                <article key={item.title} className="catalogo-item">
                  <div className="catalogo-item-media catalogo-item-media-single">
                    <button
                      type="button"
                      className="catalogo-thumb"
                      onClick={() => setSelectedImage(item.images[0])}
                    >
                      <img src={item.images[0]} alt={item.title} loading="lazy" />
                    </button>
                  </div>
                  <div className="catalogo-item-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  <button
                    type="button"
                    className="catalogo-view"
                    onClick={() => {
                      setSelectedItem(item)
                      setSelectedIndex(0)
                    }}
                  >
                      Ver producto
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="catalogo-section" id="cerramientos">
            <h2 className="catalogo-section-title">Cerramientos</h2>
            <div className="catalogo-grid">
              {cerramientosItemsWithPhone.map((item) => (
                <article key={item.title} className="catalogo-item">
                  <div className="catalogo-item-media catalogo-item-media-single">
                    <button
                      type="button"
                      className="catalogo-thumb"
                      onClick={() => setSelectedImage(item.images[0])}
                    >
                      <img src={item.images[0]} alt={item.title} loading="lazy" />
                    </button>
                  </div>
                  <div className="catalogo-item-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  <button
                    type="button"
                    className="catalogo-view"
                    onClick={() => {
                      setSelectedItem(item)
                      setSelectedIndex(0)
                    }}
                  >
                      Ver producto
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="catalogo-section" id="caminerias">
            <h2 className="catalogo-section-title">Caminerias</h2>
            <div className="catalogo-grid">
              {camineriasItemsWithPhone.map((item) => (
                <article key={item.title} className="catalogo-item">
                  <div className="catalogo-item-media catalogo-item-media-single">
                    <button
                      type="button"
                      className="catalogo-thumb"
                      onClick={() => setSelectedImage(item.images[0])}
                    >
                      <img src={item.images[0]} alt={item.title} loading="lazy" />
                    </button>
                  </div>
                  <div className="catalogo-item-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  <button
                    type="button"
                    className="catalogo-view"
                    onClick={() => {
                      setSelectedItem(item)
                      setSelectedIndex(0)
                    }}
                  >
                      Ver producto
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="catalogo-section" id="pisos">
            <h2 className="catalogo-section-title">Pisos</h2>
            <div className="catalogo-grid">
              {pisosItemsWithPhone.length === 0 ? (
                <div className="catalogo-empty">Proximamente</div>
              ) : (
                pisosItemsWithPhone.map((item) => (
                  <article key={item.title} className="catalogo-item">
                    <div className="catalogo-item-media catalogo-item-media-single">
                      <button
                        type="button"
                        className="catalogo-thumb"
                        onClick={() => setSelectedImage(item.images[0])}
                      >
                        <img src={item.images[0]} alt={item.title} loading="lazy" />
                      </button>
                    </div>
                    <div className="catalogo-item-body">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <button
                        type="button"
                        className="catalogo-view"
                        onClick={() => {
                          setSelectedItem(item)
                          setSelectedImage(item.images[0])
                        }}
                      >
                        Ver producto
                      </button>
                    </div>
                  </article>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
      {selectedItem && (
        <div
          className="catalogo-product-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => {
            setSelectedItem(null)
            setSelectedImage(null)
            setSelectedIndex(0)
          }}
        >
          <button
            type="button"
            className="catalogo-modal-close"
            aria-label="Cerrar producto"
            onClick={() => {
              setSelectedItem(null)
              setSelectedImage(null)
              setSelectedIndex(0)
            }}
          >
            ✕
          </button>
          <div
            className={`catalogo-product-card ${
              selectedItem.title === 'Carpa blanca 8 x 11' ? 'catalogo-product-card-compact' : ''
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="catalogo-product-media">
              <img
                src={selectedItem.images[selectedIndex]}
                alt={selectedItem.title}
                className="catalogo-product-hero"
              />
              <div className="catalogo-product-controls">
                <button
                  type="button"
                  className="catalogo-nav"
                  aria-label="Foto anterior"
                  onClick={() =>
                    setSelectedIndex((prev) =>
                      prev === 0 ? selectedItem.images.length - 1 : prev - 1,
                    )
                  }
                >
                  ‹
                </button>
                <div className="catalogo-product-thumbs">
                  {selectedItem.images.slice(0, 3).map((src, index) => (
                    <button
                      key={src}
                      type="button"
                      className={`catalogo-thumb-preview ${
                        index === selectedIndex ? 'catalogo-thumb-preview-active' : ''
                      }`}
                      onClick={() => setSelectedIndex(index)}
                    >
                      <img src={src} alt={selectedItem.title} />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="catalogo-nav"
                  aria-label="Foto siguiente"
                  onClick={() =>
                    setSelectedIndex((prev) =>
                      prev === selectedItem.images.length - 1 ? 0 : prev + 1,
                    )
                  }
                >
                  ›
                </button>
              </div>
            </div>
            <div className="catalogo-product-body">
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
              <a
                className="catalogo-whatsapp catalogo-whatsapp-large"
                href={selectedItem.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactanos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
      {selectedImage && (
        <div
          className="catalogo-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="catalogo-modal-close"
            aria-label="Cerrar imagen"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Vista ampliada"
            className="catalogo-modal-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
      <Footer />
    </>
  )
}

export default EstructurasCubiertas
