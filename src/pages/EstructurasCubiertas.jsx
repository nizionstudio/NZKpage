import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function EstructurasCubiertas() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const whatsappLink = 'https://wa.me/5493816667948'
  const items = [
    {
      title: 'Carpa blanca 8 x 11',
      description:
        'Carpa de 8 x 11 metros con 8 patas. En lona blackout, para 90 a 100 personas, cerrada o abierta, alto mínimo lateral 2,50 en el centro sube a casi 4 mts. Con araña de iluminación.',
      images: ['/estructuras/1.jpeg'],
    },
  ]

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
          <section className="catalogo-section">
            <h2 className="catalogo-section-title">Carpas</h2>
            <div className="catalogo-grid">
              {items.map((item) => (
                <article key={item.title} className="catalogo-item">
                  <div
                    className={`catalogo-item-media ${
                      item.images.length === 1
                        ? 'catalogo-item-media-single'
                        : item.images.length === 2
                        ? 'catalogo-item-media-double'
                        : ''
                    }`}
                  >
                    {item.images.slice(0, 3).map((src) => (
                      <button
                        key={src}
                        type="button"
                        className="catalogo-thumb"
                        onClick={() => setSelectedImage(src)}
                      >
                        <img src={src} alt={item.title} loading="lazy" />
                      </button>
                    ))}
                  </div>
                  <div className="catalogo-item-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button
                      type="button"
                      className="catalogo-view"
                      onClick={() => setSelectedItem(item)}
                    >
                      Ver producto
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
      {selectedItem && (
        <div
          className="catalogo-product-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedItem(null)}
        >
          <button
            type="button"
            className="catalogo-modal-close"
            aria-label="Cerrar producto"
            onClick={() => setSelectedItem(null)}
          >
            ✕
          </button>
          <div
            className="catalogo-product-card"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="catalogo-product-media">
              <img
                src={selectedItem.images[0]}
                alt={selectedItem.title}
                className="catalogo-product-hero"
              />
            </div>
            <div className="catalogo-product-body">
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
              <a
                className="catalogo-whatsapp catalogo-whatsapp-large"
                href={whatsappLink}
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
