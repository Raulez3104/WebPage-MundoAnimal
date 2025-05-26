import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import AcercaDe from './components/AcercaDe';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;