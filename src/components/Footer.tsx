import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about-section">
          <h3>Acerca de Mundo Animal</h3>
          <p>Somos una empresa dedicada al cuidado y bienestar de las mascotas. Con más de 10 años de experiencia, nos especializamos en brindar servicios veterinarios de alta calidad y productos para el cuidado de sus animales.</p>
        </div>
        <div className="contact-info">
          <h4>Información de Contacto</h4>
          <p>📍 Dirección: Av. Principal #123</p>
          <p>📞 Teléfono: (123) 456-7890</p>
          <p>✉️ Email: info@mundoanimal.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Mundo Animal. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer