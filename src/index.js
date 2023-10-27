import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GameProvider} from "./GameContext";
import Footer from "./components/Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
);

