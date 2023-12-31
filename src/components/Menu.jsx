import React, {useState, useRef, useEffect} from 'react';
import Store from './Store';
import Market from './Market';
import { useGameContext } from '../GameContext';
import '../styles/style.css';
import Header from "./Header";

const Menu = () => {
  const {
    score,
    setScore,
    scorePerClick,
    experience,
    setExperience,
    maxExperience,
    setMaxExperience,
    level,
    setLevel,
    totalClicks,
    setTotalClicks
  } = useGameContext();

  const [activeComponent, setActiveComponent] = useState('store');
  const pudgeRef = useRef();

  const handleClick = () => {
    pudgeRef.current.classList.add("pudge-clicked");
    setTotalClicks(totalClicks + 1);
    setTimeout(() => {
      pudgeRef.current.classList.remove("pudge-clicked");
    }, 100);

    setScore(score + scorePerClick);
    const newExperience = experience + 10;
    if (newExperience >= maxExperience) {
      setExperience(newExperience - maxExperience);
      setMaxExperience(maxExperience * 2);
      setLevel(level + 1);
    } else {
      setExperience(newExperience);
    }
  };

  const handleViewChange = (componentName) => {
    setActiveComponent(componentName);
  };



  return (
    <div className={'menu__container'}>
      <Header/>
      <section className="main">
        <h1 className="menu__titles">Накликайте кучу пуджей!</h1>
        <div className="container">
          <div className="munu">
            <h1 className="menu__title">Pugs: {score}</h1>
            <button className={'pudge'} onClick={handleClick}>
              <img
                className={'pgimg'}
                ref={pudgeRef}
                src="/img/pudge.png"
                alt=""
              />
            </button>
            <h1 className="menu__title">Магазин <span><img className={'store-img'} src="/img/store.png" alt=""/></span></h1>
            <div className="menu-btn__container">
              <button
                className={'open-btn'}
                onClick={() => handleViewChange('store')}
              >
                Открыть магазин
              </button>
              <button
                className={'open-btn'}
                onClick={() => handleViewChange('market')}
              >
                Открыть рынок
              </button>
            </div>
          </div>
        </div>
      </section>
      <div>
        {activeComponent === 'store' && (
          <Store />
        )}
        {activeComponent === 'market' && (
          <Market />
        )}
      </div>
    </div>
  );
};

export default Menu;
