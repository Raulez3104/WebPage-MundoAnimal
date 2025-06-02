import './Servicios.css'

const Servicios = () => {
  return (
    <div className="container mt-4">
        <div className="row">
            <div className="col-4">
                <div className="mb-4">
                    <div className="card normal">
                <img src="/card1.png"  alt="Descripcion" className="card-img-top"/>
                    <div className="card-body">
                    <h5 className="card-title">Consulta Veterinaria</h5>
                    <p className="card-text">Brindamos atención médica personalizada para tu mascota, desde chequeos de rutina hasta diagnósticos especializados.</p>
                    <a href="#" className="btn btn-primary">Mas Información</a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="mb-4">
                    <div className="card normal">
                        <img src='/card2.jpg' alt='Descripcion' className='card-img-top'/>
                        <div className="card-body">
                            <h5 className="card-title">Vacunación y Control Preventivo</h5>
                            <p className="card-text">Protege a tu mascota con nuestro completo plan de vacunación y control antiparasitario. </p>
                            <a href="#" className="btn btn-primary">Mas Información</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="mb-4">
                    <div className="card normal">
                        <img src='/card3.jpg' alt='Descripcion' className='card-img-top'/>
                        <div className="card-body">
                            <h5 className="card-title">Productos para Mascotas</h5>
                            <p className="card-text">Ofrecemos una amplia variedad de alimentos balanceados, juguetes, accesorios y productos de higiene.</p>
                            <a href="#" className="btn btn-primary">Mas Información</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
  );
};
export default Servicios;