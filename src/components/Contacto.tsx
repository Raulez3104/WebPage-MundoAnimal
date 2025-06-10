import React from 'react';
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

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow mx-auto mb-4" style={{ width: '700px', backgroundImage: 'url(/carousel5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="card-body">
                            <h2 className="text-center mb-4">Contáctanos</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombre"
                                        name="nombre"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="correo" className="form-label">Correo electrónico</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="correo"
                                        name="correo"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="pais" className="form-label">País</label>
                                    <select id="pais" name="pais" className="form-select" required>
                                        <option value="">Selecciona un país</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Chile">Bolivia</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="México">México</option>
                                        <option value="Perú">Perú</option>
                                        <option value="España">España</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                    <textarea
                                        className="form-control"
                                        id="mensaje"
                                        name="mensaje"
                                        rows={4}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telefono" className="form-label">Teléfono:</label>
                                    <input
                                        className="form-control"
                                        id="telefono"
                                        name="telefono"
                                        required
                                    ></input>
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Enviar mensaje</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
