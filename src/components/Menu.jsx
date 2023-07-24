import React, {useState, useRef, useEffect} from 'react';
import Store from './Store';
import Market from './Market';
import { useGameContext } from '../GameContext';
import '../style.css';
import AchivmentItem from "../UI/AchivmentItem";
import ModalAchiv from "../UI/ModalAchiv";
import Achiv100 from "../UI/Achiv100";
import Achiv1000 from "../UI/Achiv1000";
import Achiv100000 from "../UI/Achiv100000";
import Achiv1000000 from "../UI/Achiv1000000";

const Menu = () => {
  const {
    score,
    setScore,
    scorePerClick,
    setShowModal,
    showModal,
    showAchievement1,
    showAchievement2,
    showAchievement3,
    showAchievement4,
    showAchievement5,
    setShowAchievement1,
    setShowAchievement2,
    setShowAchievement3,
    setShowAchievement4,
    setShowAchievement5,
    showModalAchievement1,
    showModalAchievement2,
    showModalAchievement3,
    showModalAchievement4,
    showModalAchievement5,
    setShowModalAchievement1,
    setShowModalAchievement2,
    setShowModalAchievement3,
    setShowModalAchievement4,
    setShowModalAchievement5
  } = useGameContext();

  const [activeComponent, setActiveComponent] = useState('store');
  const pudgeRef = useRef();

  const handleClick = () => {
    pudgeRef.current.classList.add("pudge-clicked");

    setTimeout(() => {
      pudgeRef.current.classList.remove("pudge-clicked");
    }, 100);

    setScore(score + scorePerClick);
  };

  const handleViewChange = (componentName) => {
    setActiveComponent(componentName);
  };

  useEffect(() => {
    if(score >= 100000 && !showAchievement5){
      setShowAchievement5(true);
      setShowModalAchievement5(true);
    } else if(score >= 10000 && !showAchievement4){
      setShowAchievement4(true);
      setShowModalAchievement4(true);
    } else if(score >= 1000 && !showAchievement3){
      setShowAchievement3(true);
      setShowModalAchievement3(true);
    } else if(score >= 100 && !showAchievement2){
      setShowAchievement2(true);
      setShowModalAchievement2(true);
    } else if(score >= 10 && !showAchievement1){
      setShowAchievement1(true);
      setShowModalAchievement1(true);
    }
  }, [score]);

  useEffect(() => {
    if(showModalAchievement1 || showModalAchievement2 || showModalAchievement3 || showModalAchievement4 || showModalAchievement5) {
      setShowModal(true);
    }
  }, [showModalAchievement1, showModalAchievement2, showModalAchievement3, showModalAchievement4, showModalAchievement5]);

  const closeModal = (achievementNumber) => {
    setShowModal(false);
    if(achievementNumber === 1){
      setShowModalAchievement1(false);
    } else if(achievementNumber === 2){
      setShowModalAchievement2(false);
    } else if(achievementNumber === 3){
      setShowModalAchievement3(false);
    } else if(achievementNumber === 4){
      setShowModalAchievement4(false);
    } else if(achievementNumber === 5){
      setShowModalAchievement5(false);
    }
  }

  return (
    <div>
      <section className="main">
        <h1 className="menu__titles">Накликайте кучу пуджей!</h1>
        {showModal &&
          <ModalAchiv onClose={() => closeModal(1)}>
            {showModalAchievement1 && <AchivmentItem />}
            {showModalAchievement2 && <Achiv100 />}
            {showModalAchievement3 && <Achiv1000 />}
            {showModalAchievement4 && <Achiv100000 />}
            {showModalAchievement5 && <Achiv1000000 />}
          </ModalAchiv>
        }
        <div className="container">
          <div className="munu">
            <h1 className="menu__title">Pudges: {score}</h1>
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
