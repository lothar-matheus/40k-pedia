import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Fac from './fac';
import Hist from './hist';
import Jogos from './jogos';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="headerIndex">
          
        </header>
        <div className="mainContent">
          
          
          <div className="buttonsIndex">
            <h1>
              <Link to="/facoes">
                <button>FACÇÕES</button>
              </Link>
            </h1>
            <h1>
              <Link to="/historia">
                <button>HISTÓRIA</button>
              </Link>
            </h1>
            <h1>
              <Link to="/jogos">
                <button>JOGOS</button>
              </Link>
            </h1>
          </div>
        </div>
        <Routes>
          
          <Route path="/facoes" element={<Fac />} />
          <Route path="/historia" element={<Hist />} />
          <Route path="/jogos" element={<Jogos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;