import { Link } from 'react-router-dom';
import './Menubar.css';

const Menubar = () => {
  return (
    <nav className="menubar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/acerca-de">Acerca de</Link></li>
        <li><Link to="/contacto">Contactos</Link></li>

      </ul>
    </nav>
  );
};

export default Menubar;