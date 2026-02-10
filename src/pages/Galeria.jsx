import Header from '../components/Header'
import Footer from '../components/Footer'

function Galeria() {
  return (
    <>
      <Header />
      <div className="galeria-page">
        <div className="galeria-hero">
          <h1 className="galeria-title">Galeria</h1>
          <p className="galeria-subtitle">
            Una seleccion de montajes y momentos que reflejan nuestra calidad.
          </p>
        </div>

        <div className="galeria-content">
          <div className="galeria-grid">
            <div className="galeria-item">
              <div className="galeria-placeholder">
                <span>Foto</span>
              </div>
            </div>
            <div className="galeria-item">
              <div className="galeria-placeholder">
                <span>Foto</span>
              </div>
            </div>
            <div className="galeria-item">
              <div className="galeria-placeholder">
                <span>Foto</span>
              </div>
            </div>
            <div className="galeria-item">
              <div className="galeria-placeholder">
                <span>Foto</span>
              </div>
            </div>
            <div className="galeria-item">
              <div className="galeria-placeholder">
                <span>Foto</span>
              </div>
            </div>
            <div className="galeria-item">
              <div className="galeria-placeholder">
                <span>Foto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Galeria
