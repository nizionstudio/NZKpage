import Header from '../components/Header'
import Footer from '../components/Footer'

function Privacidad() {
  return (
    <>
      <Header />
      <div className="privacidad-page">
        <div className="privacidad-hero">
          <h1 className="privacidad-title">Politica de Privacidad</h1>
          <p className="privacidad-subtitle">
            Informacion sobre el tratamiento de datos en este sitio.
          </p>
        </div>

        <div className="privacidad-content">
          <div className="privacidad-card">
            <section className="privacidad-section">
              <h2>1. Informacion general</h2>
              <p>
                El sitio web de NZK Eventos tiene caracter informativo y no
                cuenta con sistema de registro de usuarios ni formularios de
                carga de datos.
              </p>
            </section>

            <section className="privacidad-section">
              <h2>2. Datos personales</h2>
              <p>
                Este sitio web no recopila, almacena ni procesa datos personales
                de los usuarios.
              </p>
            </section>

            <section className="privacidad-section">
              <h2>3. Uso de servicios de terceros</h2>
              <p>
                El sitio puede incluir enlaces o accesos directos a servicios de
                terceros. El proveedor no controla ni es responsable por el
                tratamiento de datos realizado por dichas plataformas.
              </p>
            </section>

            <section className="privacidad-section">
              <h2>4. Seguridad</h2>
              <p>
                Dado que el sitio web no recopila datos personales, no se
                almacenan bases de datos de usuarios ni informacion sensible.
              </p>
            </section>

            <section className="privacidad-section">
              <h2>5. Cambios en la politica de privacidad</h2>
              <p>
                El proveedor se reserva el derecho de modificar la presente
                Politica de Privacidad sin previo aviso.
              </p>
            </section>

            <section className="privacidad-section">
              <h2>6. Aceptacion</h2>
              <p>
                El uso de este sitio web implica la aceptacion de la presente
                Politica de Privacidad.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Privacidad
