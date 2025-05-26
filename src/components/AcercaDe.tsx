import './AcercaDe.css';

const AcercaDe = () => {
  return (
    <div className="acerca-de-container">
      <div className="acerca-de-content">
        <div className="acerca-de-text">
          <h2>Acerca de Nosotros</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="acerca-de-image">
          <img src="/img1.jpg" alt="Imagen Acerca de" />
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;