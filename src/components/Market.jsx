import React, { useState, useEffect } from 'react';
import { useGameContext } from '../GameContext';
import '../style.css';

const Market = () => {
  const {
    score,
    setScore,
    scorePerSecond,
    setScorePerSecond,
  } = useGameContext();

  const buyCreep = () => {
    if (score >= 200) {
      setScore(score - 200);
      setScorePerSecond(scorePerSecond + 2);
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  };



  const buySallerCreep = () => {
    if (score >= 700) {
      setScore(score - 700);
      setScorePerSecond(scorePerSecond + 8);
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  };

  return (
    <div>
      <div className="container">
        <ul className="market__list">
          <div className="store__list-container">
            <li className="store__item arcana-item" onClick={buyCreep}>
              <div className="card-container">
                <div className="creep-slot"></div>
                <h3 className="menu__title">Купить крипа раба</h3>
                <p className="menu__title-min">
                  200 пуджей, дает + 2 пуджа в секунду
                </p>
              </div>
            </li>
            <li className="store__item arcana-item" onClick={buySallerCreep}>
              <div className="card-container">
                <div className="creep-saller-slot"></div>
                <h3 className="menu__title">Купить крипа раба</h3>
                <p className="menu__title-min">
                  700 пуджей, дает + 8 пуджа в секунду
                </p>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Market;
