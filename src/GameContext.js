import React, {createContext, useContext, useEffect, useState} from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [scorePerClick, setScorePerClick] = useState(1);
  const [scorePerSecond, setScorePerSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prevScore) => prevScore + scorePerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [scorePerSecond]);


  return (
    <GameContext.Provider value={{
      score,
      setScore,
      scorePerClick,
      setScorePerClick,
      scorePerSecond,
      setScorePerSecond
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
