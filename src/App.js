import React, { useEffect } from 'react';
import './style.css';
import Menu from './components/Menu';
import Store from './components/Store';
import Market from './components/Market';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider, useGameContext } from './GameContext';

function App() {
  return (
    <Router>
      <GameProvider>
        <div className="App">
          <Menu />
          <Routes>
            <Route path="components/store" element={<Store />} />
            <Route path="components/market" element={<Market />} />
            <Route path="" element={<Store />} />
          </Routes>
        </div>
      </GameProvider>
    </Router>
  );
}

export default App;
