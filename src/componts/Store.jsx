import React, { useState } from 'react';
import './Menu'

const Store = ({score, setScore, scorePerClick, setScorePerClick}) => {
  const buyArcana = () => {
    if (score >= 20) {
      setScore(score - 20); // Отнимаем стоимость арканы
      setScorePerClick(scorePerClick + 6); // Увеличиваем количество пуджей за клик
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  }

  const buyHook = () => {
    if (score >= 10) {
      setScore(score - 10); // Отнимаем стоимость хука
      setScorePerClick(scorePerClick + 3); // Увеличиваем количество пуджей за клик
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  }

  return (
    <div>
      <div className="store-container">
        <h1 className="menu__title">Магазин</h1>
        <ul className="store__list">
          <li className="store__item arcana-item" onClick={buyArcana}>
            <div className="card-container">
              <div className="arcana-slot">

              </div>
              {/*<img className={'arcana'} src="/img/arcana.png" alt=""/>*/}

              <h3 className="menu__title">Четкая аркана</h3>
              <p className="menu__title-min">20 пуджей, дает + 6 к клику</p>
            </div>
          </li>
          <li className="store__item hook-item" onClick={buyHook}>
            <div className="card-container">
              <img className={'hook'} src="/img/hook.png" alt=""/>
              <h3 className="menu__title">Крутой хук</h3>
              <p className="menu__title-min">10 пуджей, дает+ 3 к клику</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Store;
