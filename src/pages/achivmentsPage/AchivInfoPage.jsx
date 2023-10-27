import React from 'react';
import './achivInfo.css'
import Header from "../../components/Header";

const AchivInfoPage = () => {
  return (
    <>
      <Header/>
      <div className={'AchivInfo-container'}>
        <h2 className="AchivInfo__title">Все доступные ачивки на данный момент:</h2>
        <ul className="AchivInfo-list">
          <li className="AchivInfo-item">
            <p className="AchivInfo__text">Собрать 100 pugs</p>
          </li>
          <li className="AchivInfo-item">
            <p className="AchivInfo__text">Собрать 1000 pugs</p>
          </li>
          <li className="AchivInfo-item">
            <p className="AchivInfo__text">Собрать 10000 pugs</p>
          </li>
          <li className="AchivInfo-item">
            <p className="AchivInfo__text">Собрать 100000 pugs</p>
          </li>
          <li className="AchivInfo-item">
            <p className="AchivInfo__text">Собрать 1000000 pugs</p>
          </li>
          <li className="AchivInfo-item">
            <p className="AchivInfo__text">Собрать 100000000 pugs</p>
          </li>
        </ul>
      </div>
    </>

  );
};

export default AchivInfoPage;