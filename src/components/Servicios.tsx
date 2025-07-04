import './Servicios.css';
import videoSource1 from '../assets/card1video.mp4';
import videoSource2 from '../assets/card2video.mp4';
import videoSource3 from '../assets/card3video.mp4';

const Servicios = () => {
  return (
    <div className="contenedor" style={{backgroundColor:"#fefae0"}}>
      <div className="container mt-4 ">
      <div className="row">
        <div className="col-4">
          <div className="mb-4">
            <div className="card normal">
              <video
                src={videoSource2}
                autoPlay
                loop
                muted
                playsInline
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Consulta Veterinaria</h5>
                <p className="card-text">
                  Brindamos atención médica personalizada para tu mascota, desde chequeos de rutina hasta diagnósticos especializados.
                </p>
                <a href="#" className="btn btn-primary" style={{backgroundColor:"#d4a373",border:"none"}}>Más Información</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="mb-4">
            <div className="card normal">
              <video
                src={videoSource1}
                autoPlay
                loop
                muted
                playsInline
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Vacunación y Control Preventivo</h5>
                <p className="card-text">
                  Protege a tu mascota con nuestro completo plan de vacunación y control antiparasitario.
                </p>
                <a href="#" className="btn btn-primary" style={{backgroundColor:"#d4a373",border:"none"}}>Más Información</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="mb-4">
            <div className="card normal">
              <video
                src={videoSource3}
                autoPlay
                loop
                muted
                playsInline
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Productos para Mascotas</h5>
                <p className="card-text">
                  Ofrecemos una amplia variedad de alimentos balanceados, juguetes, accesorios y productos de higiene.
                </p>
                <a href="#" className="btn btn-primary" style={{backgroundColor:"#d4a373",border:"none"}}>Más Información</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default Servicios;
