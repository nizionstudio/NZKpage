import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MobiliarioEquipamiento() {
  const location = useLocation()
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const phoneNumbers = ['+5493816667948', '+5493812000512']

  const livingItems = [
    {
      title: 'Juego de mesas altas con banquetas',
      description: '',
      images: ['/mobiliario/1.JPG', '/mobiliario/2.jpg'],
    },
    {
      title: 'Livings con puff luminosos',
      description: '',
      images: ['/mobiliario/3.jpg'],
    },
    {
      title: 'Sillones de mimbre tipo flor',
      description:
        'Sillon con pétalos de flor de mimbre! Pueden ser reemplazados en juegos por gervasoni',
      images: ['/mobiliario/5.jpg'],
    },
    {
      title: 'Livings con sillones Gervasioni',
      description:
        'Un sofá de dos cuerpos dos puff dobles, dos Gervasioni y la mesita ratona en forma de U',
      whatsappNumber: '+5493816667948',
      images: ['/mobiliario/6.jpg', '/mobiliario/7.JPG'],
    },
    {
      title: 'Juego de Gervasoni y sillones individuales',
      description: 'Juego de Gervasoni y sillones individuales para 5 personas',
      whatsappNumber: '+5493812000512',
      images: ['/mobiliario/8.JPG'],
    },
    {
      title: 'Juego de living para o pax',
      description:
        'Un sofá de dos cuerpos, dos puff dobles, dos cubic simples y la mesita ratona. En eco cuero blanco.',
      images: ['/mobiliario/9.jpg', '/mobiliario/a1.jpg', '/mobiliario/a2.jpg'],
    },
  ]
  const climatizacionItems = [
    {
      title: 'Ventiladores Industriales',
      description: 'Ventiladores de 26 y 30 pulgadas. Directos o giratorios.',
      images: ['/mobiliario/a3.jpg'],
    },
    {
      title: 'Estufas tipo Hongo',
      description:
        'Calefactores tipo honguito, calientan hasta 3 metros a la redonda de donde se los instala, ideales para espacios abiertos, con garrafa incluida, tienen una autonomía de aprox. 10hs de uso',
      images: ['/mobiliario/a4.JPG', '/mobiliario/a5.JPG', '/mobiliario/a6.JPG'],
    },
    {
      title: 'Cañones de calor',
      description:
        'Cañones de aire caliente, ideal para grandes espacios no muy abiertos ya que es calor dinámico (en movimiento) incluyen la garrafa correspondiente',
      whatsappNumber: '+5493812000512',
      images: ['/mobiliario/a7.jpg', '/mobiliario/a8.jpg', '/mobiliario/a9.jpg'],
    },
    {
      title: 'Calefactores Piramidales',
      description:
        'Calefactores con llama a la vista, incluyen garrafa, calientan hasta 3 metros a la redonda, muy vistosos y de buena estética!!',
      whatsappNumber: '+5493816667948',
      images: ['/mobiliario/b1.jpg', '/mobiliario/b2.jpg', '/mobiliario/b3.jpg'],
    },
  ]
  const decoracionItems = [
    {
      title: 'Guirnaldas tipo keremesse',
      description: 'Con lámparas vintage',
      images: ['/mobiliario/b4.jpeg', '/mobiliario/b5.jpg', '/mobiliario/b6.JPG'],
    },
    {
      title: 'Pantallas mimbre con focos vintage',
      description: '',
      images: ['/mobiliario/b7.jpg', '/mobiliario/b8.jpg'],
    },
    {
      title: 'Tachos de luces de ambientación',
      description: 'Tachos de iluminación y ambientación para eventos',
      images: ['/mobiliario/b9.jpg', '/mobiliario/b10.jpeg'],
    },
  ]

  let phoneCursor = 0
  const withPhone = (item) => {
    if (item.whatsappNumber) {
      const message = `Hola! Quisiera consultar por ${item.title}`
      const link = `https://wa.me/${item.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
        message,
      )}`
      return { ...item, whatsappLink: link }
    }
    const phone = phoneNumbers[phoneCursor % phoneNumbers.length]
    const message = `Hola! Quisiera consultar por ${item.title}`
    const link = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(
      message,
    )}`
    phoneCursor += 1
    return { ...item, whatsappLink: link }
  }

  const livingWithPhone = livingItems.map(withPhone)
  const climatizacionWithPhone = climatizacionItems.map(withPhone)
  const decoracionWithPhone = decoracionItems.map(withPhone)

  useEffect(() => {
    if (!location.hash) return
    const target = document.querySelector(location.hash)
    if (!target) return
    const timeoutId = setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
    return () => clearTimeout(timeoutId)
  }, [location.hash])

  return (
    <>
      <Header />
      <div className="catalogo-page">
        <div className="catalogo-hero">
          <h1 className="catalogo-title">Mobiliario y Equipamiento</h1>
          <p className="catalogo-subtitle">
            Catalogo inicial de mobiliario y equipamiento para eventos.
          </p>
        </div>

        <div className="catalogo-content">
          <section className="catalogo-section" id="juegos-de-livings">
            <h2 className="catalogo-section-title">Juegos de Livings</h2>
            <div className="catalogo-grid">
              {livingWithPhone.length === 0 ? (
                <div className="catalogo-empty">Proximamente</div>
              ) : (
                livingWithPhone.map((item) => (
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
                ))
              )}
            </div>
          </section>

          <section className="catalogo-section" id="climatizacion">
            <h2 className="catalogo-section-title">Climatización</h2>
            <div className="catalogo-grid">
              {climatizacionWithPhone.length === 0 ? (
                <div className="catalogo-empty">Proximamente</div>
              ) : (
                climatizacionWithPhone.map((item) => (
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
                ))
              )}
            </div>
          </section>

          <section className="catalogo-section" id="decoracion">
            <h2 className="catalogo-section-title">Decoración</h2>
            <div className="catalogo-grid">
              {decoracionWithPhone.length === 0 ? (
                <div className="catalogo-empty">Proximamente</div>
              ) : (
                decoracionWithPhone.map((item) => (
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
            className="catalogo-product-card"
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

export default MobiliarioEquipamiento
