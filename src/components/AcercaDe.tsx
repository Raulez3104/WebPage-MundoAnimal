import './AcercaDe.css';

const AcercaDe = () => {
  return (
    <div className="contenedores"style={{backgroundColor:"#fefae0"}}>
      <div className="acerca-de-container">
      <div className="acerca-de-content">
        <div className="acerca-de-text">
          <h2>Acerca de Nosotros</h2>
          <p>
           En Mundo Animal, nos dedicamos con pasión al cuidado integral de tus mascotas. Ofrecemos servicios veterinarios especializados para perros, gatos y animales exóticos, siempre con un enfoque profesional, ético y lleno de cariño.
          </p>
          <p>
            Nos encontramos en Av. Circunvalación #80, Zona Norte, y atendemos de lunes a sábado, de 8:00 a 20:00. Estamos aquí para acompañarte en cada etapa de la vida de tu mejor amigo.

          </p>
          <p>
            Nuestro equipo está preparado para brindarte atención de urgencias 24/7, así como servicios de vacunación, desparasitación y cirugía menor. Además, entendemos que el bienestar de tu mascota va más allá de lo médico, por eso contamos con peluquería canina y felina atendida por personal capacitado, y te ofrecemos asesoramiento nutricional y planes de vacunación personalizados.
          </p>
        </div>
        <div className="acerca-de-image">
          <img src="/img1.jpg" alt="Imagen Acerca de" />
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default AcercaDe;