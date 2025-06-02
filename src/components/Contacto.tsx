const Contacto = () => {
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow mx-auto mb-4" style={{width:'500px'}}>
                        <div className="card-body">
                            <h2 className="text-center mb-4">Contáctanos</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombre"
                                        name="nombre"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="correo" className="form-label">Correo electrónico</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="correo"
                                        name="correo"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="organizacion" className="form-label">Organización</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="organizacion"
                                        name="organizacion"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                    <textarea
                                        className="form-control"
                                        id="mensaje"
                                        name="mensaje"
                                        rows={4}
                                    ></textarea>
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