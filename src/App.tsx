import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Servicios from './components/Servicios';
import AcercaDe from './components/AcercaDe';
import Contacto from './components/Contacto';
import Carrousel from './components/Carrousel';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Carrousel />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
          </Routes>
        </main>
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;