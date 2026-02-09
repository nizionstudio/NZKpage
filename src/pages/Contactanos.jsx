import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Iconos SVG
const WhatsAppIcon = ({ color = 'currentColor' }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

function Contactanos() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    eventDate: '',
    numberOfGuests: '',
    eventDescription: '',
  })

  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState({ visible: false, text: '', type: '' })

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const errors = {}
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'El nombre es requerido'
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = 'El apellido es requerido'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'El email no es válido'
    }
    
    if (!formData.eventDescription.trim()) {
      errors.eventDescription = 'Este campo es requerido'
    }
    
    return errors
  }

  useEffect(() => {
    // Inicializar EmailJS con la public key
    emailjs.init('UJbZXua04DmkOMdgZ')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Preparar los parámetros para el template
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        event_date: formData.eventDate || 'No especificada',
        number_of_guests: formData.numberOfGuests || 'No especificado',
        event_description: formData.eventDescription,
        to_name: 'NZK Eventos',
      }

      // Enviar el email usando EmailJS
      await emailjs.send(
        'service_jx9dxgo',
        'template_uba8x4a',
        templateParams
      )

      // Éxito
      setIsSubmitting(false)
      setSubmitMessage({
        visible: true,
        text: '¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.',
        type: 'success',
      })
      
      // Limpiar el formulario
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        eventDate: '',
        numberOfGuests: '',
        eventDescription: '',
      })
      
      // Ocultar el mensaje después de 5 segundos
      setTimeout(() => {
        setSubmitMessage({ visible: false, text: '', type: '' })
      }, 5000)
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setIsSubmitting(false)
      setSubmitMessage({
        visible: true,
        text: 'Hubo un error al enviar el formulario. Por favor, intentá nuevamente o contactanos directamente.',
        type: 'error',
      })
      
      // Ocultar el mensaje de error después de 5 segundos
      setTimeout(() => {
        setSubmitMessage({ visible: false, text: '', type: '' })
      }, 5000)
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
      <Header />
      <div className="contactanos-page">
        <div className="contactanos-hero">
          <h1 className="contactanos-title">Contáctanos</h1>
        </div>

        <div className="contactanos-content-wrapper">
          <div className="contactanos-form-section">
            <p className="contactanos-form-intro">
              Completá el formulario a continuación, hacé clic en el botón de enviar y nos pondremos en contacto contigo muy pronto.
            </p>
            
            <form className="contactanos-form" onSubmit={handleSubmit}>
              <div className="contactanos-form-group">
                <label className="contactanos-form-label">
                  Nombre <span className="required">(requerido)</span>
                </label>
                <div className="contactanos-name-fields">
                  <div className="contactanos-form-field">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Nombre"
                      className={`contactanos-input ${formErrors.firstName ? 'error' : ''}`}
                    />
                    {formErrors.firstName && (
                      <span className="contactanos-error-message">{formErrors.firstName}</span>
                    )}
                  </div>
                  <div className="contactanos-form-field">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Apellido"
                      className={`contactanos-input ${formErrors.lastName ? 'error' : ''}`}
                    />
                    {formErrors.lastName && (
                      <span className="contactanos-error-message">{formErrors.lastName}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="contactanos-form-group">
                <label className="contactanos-form-label">
                  Email <span className="required">(requerido)</span>
                </label>
                <div className="contactanos-form-field">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className={`contactanos-input ${formErrors.email ? 'error' : ''}`}
                  />
                  {formErrors.email && (
                    <span className="contactanos-error-message">{formErrors.email}</span>
                  )}
                </div>
              </div>

              <div className="contactanos-form-group">
                <label className="contactanos-form-label">Fecha del Evento</label>
                <div className="contactanos-form-field">
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="contactanos-input"
                  />
                </div>
              </div>

              <div className="contactanos-form-group">
                <label className="contactanos-form-label">Número de Invitados</label>
                <div className="contactanos-form-field">
                  <input
                    type="number"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleInputChange}
                    placeholder="Ej: 100"
                    min="1"
                    className="contactanos-input"
                  />
                </div>
              </div>

              <div className="contactanos-form-group">
                <label className="contactanos-form-label">
                  Cuéntanos sobre tu Evento <span className="required">(requerido)</span>
                </label>
                <div className="contactanos-form-field">
                  <textarea
                    name="eventDescription"
                    value={formData.eventDescription}
                    onChange={handleInputChange}
                    placeholder="Describí tu evento, qué servicios necesitás, ubicación, etc."
                    rows="6"
                    className={`contactanos-textarea ${formErrors.eventDescription ? 'error' : ''}`}
                  />
                  {formErrors.eventDescription && (
                    <span className="contactanos-error-message">{formErrors.eventDescription}</span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="contactanos-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>

              {submitMessage.visible && (
                <div className={`contactanos-submit-message ${submitMessage.type}`}>
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>

          <div className="contactanos-contact-section">
            <div className="contactanos-alternative-contact">
              <h3 className="contactanos-alternative-title">O ENVIÁ WHATSAPP/LLAMÁ</h3>
              <div className="contactanos-phone-list">
                <div className="contactanos-phone-item">
                  <p className="contactanos-phone-name">Ángel Vicente Niziolek</p>
                  <a 
                    href="tel:+5493812000512" 
                    className="contactanos-phone-link"
                  >
                    +54 9 381 200-0512
                  </a>
                  <a 
                    href="https://wa.me/5493812000512" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contactanos-whatsapp-link"
                  >
                    <WhatsAppIcon color="#173125" />
                    <span>WhatsApp</span>
                  </a>
                </div>
                <div className="contactanos-phone-item">
                  <p className="contactanos-phone-name">Tomás Niziolek</p>
                  <a 
                    href="tel:+5493816667948" 
                    className="contactanos-phone-link"
                  >
                    +54 9 381 666-7948
                  </a>
                  <a 
                    href="https://wa.me/5493816667948" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contactanos-whatsapp-link"
                  >
                    <WhatsAppIcon color="#173125" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contactanos-alternative-contact">
              <h3 className="contactanos-alternative-title">O ENVIÁ UN EMAIL A:</h3>
              <a 
                href="mailto:nzkcarpas@hotmail.com?subject=Consulta&body=Hola,%20me%20gustaría%20consultar%20sobre%20sus%20servicios." 
                className="contactanos-email-link"
              >
                nzkcarpas@hotmail.com
              </a>
            </div>
          </div>
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

export default Contactanos

