import React, {createContext, useContext, useEffect, useState} from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [scorePerClick, setScorePerClick] = useState(1);
  const [scorePerSecond, setScorePerSecond] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [creepPrice, setCreepPrice] = useState(200);
  const [sallerPrice, setSallerPrice] = useState(700);
  const [towerPrice, setTowerPrice] = useState(3000);
  const [gadzaPrice, setGadzaPrice] = useState(100000);
  const [arcanaPrice, setArcanaPrice] = useState(100000);
  const [bottlePrice, setBottlePrice] = useState(20);
  const [maskPrice, setMaskPrice] = useState(100);
  const [hookPrice, setHookPrice] = useState(25000);
  const [midasPrice, setMidasPrice] = useState(10000);
  const [rapierPrice, setRapierPrice] = useState(50000);
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');
  const [inputVisible, setInputVisible] = useState(true);
  const [profileImage, setProfileImage] = useState("/img/pudge.png");
  const [experience, setExperience] = useState(0);
  const [maxExperience, setMaxExperience] = useState(100);
  const [level, setLevel] = useState(0);
  const [creeps, setCreeps] = useState(0);
  const [sallerCreeps, setSallerCreeps] = useState(0);
  const [towers, setTowers] = useState(0);
  const [gadzas, setGadzas] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false); // состояние для модального окна
  const [isAchievementUnlocked, setAchievementUnlocked] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prevScore) => prevScore + scorePerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [scorePerSecond]);

  const[userName, setUserName] = useState('')

  return (
    <GameContext.Provider value={{
      userName,
      setUserName,
      score,
      setScore,
      scorePerClick,
      setScorePerClick,
      scorePerSecond,
      setScorePerSecond,
      setShowModal,
      showModal,
      creepPrice,
      towerPrice,
      sallerPrice,
      gadzaPrice,
      arcanaPrice,
      bottlePrice,
      maskPrice,
      hookPrice,
      setCreepPrice,
      setSallerPrice,
      setTowerPrice,
      setGadzaPrice,
      setArcanaPrice,
      setBottlePrice,
      setMaskPrice,
      setHookPrice,
      name,
      setName,
      savedName,
      setSavedName,
      inputVisible,
      setInputVisible,
      profileImage,
      setProfileImage,
      experience,
      setExperience,
      maxExperience,
      setMaxExperience,
      level,
      setLevel,
      creeps,
      setCreeps,
      sallerCreeps,
      setSallerCreeps,
      towers,
      setTowers,
      gadzas,
      setGadzas,
      totalClicks,
      setTotalClicks,
      isModalOpen,
      setModalOpen,
      isAchievementUnlocked,
      setAchievementUnlocked,
      midasPrice,
      setMidasPrice,
      rapierPrice,
      setRapierPrice
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
