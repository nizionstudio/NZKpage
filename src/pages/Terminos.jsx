import Header from '../components/Header'
import Footer from '../components/Footer'

function Terminos() {
  return (
    <>
      <Header />
      <div className="terminos-page">
        <div className="terminos-hero">
          <h1 className="terminos-title">Terminos y Condiciones</h1>
          <p className="terminos-subtitle">
            Informacion clara sobre el funcionamiento del servicio.
          </p>
        </div>

        <div className="terminos-content">
          <div className="terminos-card">
            <section className="terminos-section">
              <h2>1. Informacion general</h2>
              <p>
                El presente sitio web tiene caracter informativo y tiene como
                objetivo mostrar los servicios de alquiler de carpas y
                equipamiento para eventos ofrecidos por NZK Eventos.
              </p>
              <p>
                La contratacion del servicio no se realiza a traves de esta
                pagina web, sino que se acuerda de forma directa mediante
                WhatsApp u otros medios de contacto.
              </p>
            </section>

            <section className="terminos-section">
              <h2>2. Consultas y presupuestos</h2>
              <p>
                Los precios, disponibilidad, condiciones y caracteristicas del
                servicio no son definitivos hasta ser confirmados de manera
                directa por WhatsApp.
              </p>
            </section>

            <section className="terminos-section">
              <h2>3. Confirmacion del servicio</h2>
              <p>El alquiler se considera confirmado unicamente cuando:</p>
              <ul>
                <li>Se haya acordado el servicio por WhatsApp.</li>
                <li>Se haya aceptado el presupuesto.</li>
                <li>Se haya abonado la seña correspondiente.</li>
              </ul>
            </section>

            <section className="terminos-section">
              <h2>4. Pagos</h2>
              <p>
                Las formas de pago, montos y plazos seran informados y acordados
                exclusivamente por WhatsApp. El sitio web no procesa pagos ni
                almacena datos bancarios.
              </p>
            </section>

            <section className="terminos-section">
              <h2>5. Cancelaciones y reprogramaciones</h2>
              <p>
                Las condiciones de cancelacion o reprogramacion seran informadas
                al cliente al momento de la contratacion por WhatsApp. La seña,
                en caso de corresponder, no sera reembolsable, salvo acuerdo
                expreso.
              </p>
            </section>

            <section className="terminos-section">
              <h2>6. Entrega, armado y retiro</h2>
              <p>
                El armado y desarmado del equipamiento se realizara en el lugar,
                fecha y horario acordados por WhatsApp. El cliente debera
                garantizar acceso adecuado al lugar del evento.
              </p>
            </section>

            <section className="terminos-section">
              <h2>7. Uso y cuidado del equipamiento</h2>
              <p>
                El cliente es responsable del correcto uso del equipamiento
                alquilado. Cualquier daño, perdida o rotura ocasionada por mal
                uso sera responsabilidad del cliente.
              </p>
            </section>

            <section className="terminos-section">
              <h2>8. Condiciones climaticas</h2>
              <p>
                En caso de condiciones climaticas adversas, se evaluara la
                viabilidad del servicio priorizando la seguridad. Las decisiones
                se comunicaran al cliente por WhatsApp.
              </p>
            </section>

            <section className="terminos-section">
              <h2>9. Responsabilidad</h2>
              <p>
                El proveedor no se responsabiliza por daños a terceros,
                accidentes derivados del uso indebido del equipamiento ni por
                objetos personales.
              </p>
            </section>

            <section className="terminos-section">
              <h2>10. Modificaciones</h2>
              <p>
                El proveedor se reserva el derecho de modificar los presentes
                Terminos y Condiciones sin previo aviso.
              </p>
            </section>

            <section className="terminos-section">
              <h2>11. Aceptacion</h2>
              <p>
                El contacto y la contratacion del servicio mediante WhatsApp
                implica la aceptacion de los presentes Terminos y Condiciones.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Terminos
