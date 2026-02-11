import { useState, useEffect } from 'react'

function Footer() {
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

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column footer-brand">
            <h3 className="footer-logo">
              <span className="footer-logo-nzk">NZK</span>
              <span className="footer-logo-eventos"> Eventos</span>
            </h3>
            <div className="footer-contact">
              <p className="footer-phone">
                <a href="tel:+5493816667948">+5493816667948</a>
                <button
                  type="button"
                  className="copy-icon"
                  aria-label="Copiar número +5493816667948"
                  onClick={() =>
                    handleCopy('+5493816667948', 'Número copiado al portapapeles')
                  }
                />
              </p>
              <p className="footer-phone">
                <a href="tel:+5493812000512">+5493812000512</a>
                <button
                  type="button"
                  className="copy-icon"
                  aria-label="Copiar número +5493812000512"
                  onClick={() =>
                    handleCopy('+5493812000512', 'Número copiado al portapapeles')
                  }
                />
              </p>
              <p className="footer-email">
                <a href="mailto:nzkcarpas@hotmail.com?subject=Consulta&body=Hola,%20me%20gustaría%20consultar%20sobre%20sus%20servicios.">nzkcarpas@hotmail.com</a>
                <button
                  type="button"
                  className="copy-icon"
                  aria-label="Copiar email nzkcarpas@hotmail.com"
                  onClick={() =>
                    handleCopy(
                      'nzkcarpas@hotmail.com',
                      'Email copiado al portapapeles'
                    )
                  }
                />
              </p>
            </div>
          </div>

          <div className="footer-column footer-links-block">
            <div className="footer-links-grid">
              <ul className="footer-links">
                <li><a href="/estructuras-y-cubiertas#carpas">Carpas</a></li>
                <li><a href="/estructuras-y-cubiertas#gazebos">Gazebos</a></li>
                <li><a href="/estructuras-y-cubiertas#cerramientos">Cerramientos</a></li>
                <li><a href="/estructuras-y-cubiertas#caminerias">Camineria</a></li>
              </ul>
              <ul className="footer-links">
                <li><a href="/estructuras-y-cubiertas#pisos">Pisos</a></li>
                <li><a href="/mobiliario-y-equipamiento#juegos-de-livings">Juegos de Livings</a></li>
                <li><a href="/mobiliario-y-equipamiento#climatizacion">Climatización</a></li>
                <li><a href="/mobiliario-y-equipamiento#decoracion">Decoración</a></li>
              </ul>
            </div>

            <div className="footer-social footer-social-centered">
              <a
                href="https://www.instagram.com/nzkeventos.carpas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  className="social-icon instagram-icon"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                >
                  <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/nzkeventos?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path
                    d="M13 9.5V8.3c0-.6.4-1 1-1h1.5V5H14c-2.2 0-3.5 1.4-3.5 3.4v1.1H9v2.6h1.5V19h2.8v-6.9H15l.4-2.6H13z"
                    fill="currentColor"
                  />
                </svg>
                <span>Facebook</span>
              </a>
            </div>

            <div className="footer-legal">
              <a href="/terminos">Términos y Condiciones</a>
              <a href="/privacidad">Política y Privacidad</a>
            </div>

            <div className="footer-copyright footer-copyright-centered">
              <p>© 2025 NZK Eventos S.R.L.</p>
              <p>Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

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
    </>
  )
}

export default Footer

