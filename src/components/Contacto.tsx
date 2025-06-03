<<<<<<< HEAD
const Contacto = () => {
=======
import { submitContactForm } from './api';

const Contacto = () => {
   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
        const formData = new FormData(e.target as HTMLFormElement);
        await submitContactForm(formData);
        alert('Datos enviados correctamente');
    } catch (error: unknown) {
        if (error instanceof Error) {
            alert(`Error: ${error.message}`);
        } else {
            alert('Ocurrió un error desconocido al enviar el formulario');
        }
    }
};

>>>>>>> b6dd47a (v-2-6-25-backend)
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow mx-auto mb-4" style={{width:'500px'}}>
                        <div className="card-body">
                            <h2 className="text-center mb-4">Contáctanos</h2>
<<<<<<< HEAD
                            <form>
=======
                            <form onSubmit={handleSubmit}>
>>>>>>> b6dd47a (v-2-6-25-backend)
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombre"
                                        name="nombre"
<<<<<<< HEAD
=======
                                        required
>>>>>>> b6dd47a (v-2-6-25-backend)
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="correo" className="form-label">Correo electrónico</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="correo"
                                        name="correo"
<<<<<<< HEAD
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="organizacion" className="form-label">Organización</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="organizacion"
                                        name="organizacion"
=======
                                        required
>>>>>>> b6dd47a (v-2-6-25-backend)
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                    <textarea
                                        className="form-control"
                                        id="mensaje"
                                        name="mensaje"
                                        rows={4}
<<<<<<< HEAD
                                    ></textarea>
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Enviar mensaje</button>
                                </div>
=======
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">Enviar</button>
>>>>>>> b6dd47a (v-2-6-25-backend)
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;