import styles from './Carrousel.module.css';

const Carrousel = () => {
  return (
   <>
    <div className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className={styles.imagenes} src="/carousel1.jpg" alt="imagen" />
        </div>
        <div className="carousel-item">
          <img className={styles.imagenes} src="/carousel2.jpg" alt="imagen" />
        </div>
        <div className="carousel-item">
          <img className={styles.imagenes} src="/carousel3.jpg" alt="imagen" />
        </div>
        <div className="carousel-item">
          <img className={styles.imagenes} src="/carousel4.jpg" alt="imagen" />
        </div>
        <div className="carousel-item">
          <img className={styles.imagenes}src="/carousel5.jpg" alt="imagen" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target=".carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target=".carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>


    </div>
    
    
    </>
  );
}
export default Carrousel;