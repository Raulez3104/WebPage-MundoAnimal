import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Servicios from './components/Servicios';
import AcercaDe from './components/AcercaDe';
import Contacto from './components/Contacto';
import InicioVideo from './components/InicioVideo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<InicioVideo />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;