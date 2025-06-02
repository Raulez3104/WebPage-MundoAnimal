import './InicioVideo.css'; // Puedes incluir estilos adicionales si lo deseas
import videoSource from '../assets/video.mp4';
const InicioVideo = () => {
  return (
    <div className="position-relative vh-100 overflow-hidden">
      <video
        className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
        src={videoSource}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="position-relative z-1 d-flex flex-column justify-content-center align-items-center text-white text-center h-100 px-3 bg-dark bg-opacity-50">
        <h1 className="display-4 fw-bold">Bienvenido a nuestra plataforma</h1>
        <p className="lead">Tu bienestar empieza aquí</p>
        <a href="/home" className="btn btn-primary mt-4 px-4 py-2">Entrar</a>
      </div>
    </div>
  );
};

export default InicioVideo;
