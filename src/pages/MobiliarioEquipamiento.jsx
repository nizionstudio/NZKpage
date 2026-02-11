import Header from '../components/Header'
import Footer from '../components/Footer'

function MobiliarioEquipamiento() {
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
          <div className="catalogo-grid">
            <div className="catalogo-card">
              <h3>Livings</h3>
            </div>
            <div className="catalogo-card">
              <h3>Climatizacion</h3>
            </div>
            <div className="catalogo-card">
              <h3>Decoracion</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MobiliarioEquipamiento
