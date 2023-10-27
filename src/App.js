import React, { useEffect } from 'react';
import './styles/style.css';
import Menu from './components/Menu';
import Store from './components/Store';
import Market from './components/Market';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider, useGameContext } from './GameContext';
import Profile from "./pages/profile/Profile";
import Stats from "./pages/statsPage/Stats";
import LeaderBoard from "./pages/leaderPage/LeaderBoard";
import AchivInfoPage from "./pages/achivmentsPage/AchivInfoPage";
import Registration from "./pages/registrationPage/Registration";
import Authorization from "./pages/authPage/Authorization";

function App() {
  return (
    <Router>
      <GameProvider>
        <div className="App">
          <div className="">
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/pages/profile" element={<Profile />} />
              <Route path="/pages/statsPage" element={<Stats />} />
              <Route path="/pages/leaderPage" element={<LeaderBoard />} />
              <Route path="/pages/achivmentsPage" element={<AchivInfoPage />} />
              <Route path="/components/store" element={<Store />} />
              <Route path="/components/market" element={<Market />} />
              <Route path="/components/market" element={<Market />} />
              <Route path="/pages/registrationPage" element={<Registration />} />
              <Route path="/pages/authPage" element={<Authorization />} />
            </Routes>
          </div>
        </div>
      </GameProvider>
    </Router>
  );
}

export default App;
