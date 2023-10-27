import React from 'react';
import {useGameContext} from "../../GameContext";
import './stats.css'
import Header from "../../components/Header";
const Stats = () => {
  const {
    totalClicks,
    creeps,
    sallerCreeps,
    towers,
    gadzas,
  level } = useGameContext();

  return (
    <>
      <Header/>
      <div className={'stat__container'}>
        <h1 className="stats__title">Статистика</h1>
        <div className="stat__text-container">
          <p className="stats__text">Кликов всего: {totalClicks}</p>
          <p className="stats__text">Куплено обычных крипов рабов: {creeps}</p>
          <p className="stats__text">Поставленно торговцев на счетчик: {sallerCreeps}</p>
          <p className="stats__text">Установленно отстрелочных вышек: {towers}</p>
          <p className="stats__text">Прирученно гадзил: {gadzas}</p>
          <p className="stats__text">Lvl: {level}</p>
        </div>
      </div>
    </>
  );
};

export default Stats;