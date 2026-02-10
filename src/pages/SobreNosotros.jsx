import Header from '../components/Header'
import Footer from '../components/Footer'

function SobreNosotros() {
  return (
    <>
      <Header />
      <div className="sobre-nosotros-page">
        <div className="sobre-nosotros-hero">
          <h1 className="sobre-nosotros-title">Sobre Nosotros</h1>
        </div>

        <div className="sobre-nosotros-content">
          <div className="sobre-nosotros-grid">
            <div className="sobre-nosotros-image-placeholder sobre-nosotros-image-large">
              <img src="/top10/12.jpeg" alt="Montaje NZK Eventos" />
            </div>
            
            <div className="sobre-nosotros-text">
              <p>
                Somos Vicente Niziolek y Tomás Niziolek, padre e hijo, fundadores de un emprendimiento familiar dedicado al alquiler de carpas para eventos, nacido en el año 2007. Con más de 18 años de experiencia en el rubro, comenzamos ofreciendo exclusivamente carpas, construyendo desde el inicio un servicio basado en la responsabilidad, la confianza y la calidad, valores que nos acompañan hasta hoy.
              </p>
            </div>

            <div className="sobre-nosotros-text">
              <p>
                Con el paso del tiempo, fuimos creciendo y ampliando nuestra propuesta, incorporando el alquiler de livings, pisos y otros equipamientos para eventos. Gracias a este crecimiento sostenido, hemos trabajado en eventos de todo el NOA, llevando nuestro servicio más allá de Tucumán, nuestra provincia de origen. Hoy seguimos apostando a la mejora constante, ofreciendo soluciones integrales y acompañando a cada cliente para que su evento sea un éxito.
              </p>
            </div>

            <div className="sobre-nosotros-image-placeholder sobre-nosotros-image-small">
              <img src="/top10/11.jpg" alt="Equipo NZK Eventos" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SobreNosotros

