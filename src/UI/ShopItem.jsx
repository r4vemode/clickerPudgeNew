import React, {useState} from 'react';
import {useGameContext} from "../GameContext";


const ShopItems = () => {
  const {
                     score,
                     setScore,
                     scorePerClick,
                     setScorePerClick,
                     arcanaPrice,
                     bottlePrice,
                     maskPrice,
                     hookPrice,
                     setArcanaPrice,
                     setBottlePrice,
                     setMaskPrice,
                     setHookPrice,
                     rapierPrice,
                     setRapierPrice,
                     midasPrice,
                     setMidasPrice
                   } = useGameContext();

  const buyArcana = () => {
    if (score >= arcanaPrice) {
      setScore(score - arcanaPrice);
      setScorePerClick(scorePerClick + 150);
      setArcanaPrice(arcanaPrice * 2);
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  }

  const buybottle = () => {
    if (score >= bottlePrice) {
      setScore(score - bottlePrice);
      setScorePerClick(scorePerClick + 2);
      setBottlePrice(bottlePrice * 2);
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  };

  const buyMask = () => {
    if (score >= maskPrice) {
      setScore(score - maskPrice);
      setScorePerClick(scorePerClick + 8);
      setMaskPrice(maskPrice * 2);
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  };

  const buyHook = () => {
    if (score >= hookPrice) {
      setScore(score - hookPrice);
      setScorePerClick(scorePerClick + 60);
      setHookPrice(hookPrice * 2);
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  };

  const buyMidas = () => {
    if (score >= midasPrice) {
      setScore(score - midasPrice);
      setScorePerClick(scorePerClick + 30);
      setMidasPrice(midasPrice * 2);
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  }

  const buyRapier = () => {
    if (score >= rapierPrice) {
      setScore(score - rapierPrice);
      setScorePerClick(scorePerClick + 90);
      setRapierPrice(rapierPrice * 2);
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  }

  return (
    <div>
      <ul className="store__list">

        <div className="store__list-container">

          <li className="store__item arcana-item" onClick={buybottle}>
            <div className="card-container">
              <div className="bottle-slot"></div>
              <h3 className="menu__title">Мужская бутылка</h3>
              <p className="menu__title-min">{bottlePrice} PUG, дает + 2 к клику</p>
            </div>
          </li>

          <li className="store__item arcana-item" onClick={buyMask}>
            <div className="card-container">
              <div className="mask-slot"></div>
              <h3 className="menu__title">Злая(очень) маска</h3>
              <p className="menu__title-min">{maskPrice} PUG, дает + 8 к клику</p>
            </div>
          </li>

        </div>

        <div className="store__list-container">

          <li className="store__item midas-item" onClick={buyMidas}>
            <div className="card-container">
              <div className="midas-slot"></div>
              <h3 className="menu__title">Золотая ручка</h3>
              <p className="menu__title-min">{midasPrice} PUG, дает + 30 к клику</p>
            </div>
          </li>

          <li className="store__item hook-item" onClick={buyHook}>
            <div className="card-container">
              <img className={'hook'} src="/img/hook.png" alt=""/>
              <h3 className="menu__title">Крутой хук</h3>
              <p className="menu__title-min">{hookPrice} PUG, дает + 60 к клику</p>
            </div>
          </li> 

        </div>

        <div className="store__list-container">

          <li className="store__item rapier-item" onClick={buyRapier}>
            <div className="card-container">
              <div className="rapier-slot"></div>
              <h3 className="menu__title">Острая рапира</h3>
              <p className="menu__title-min">{rapierPrice} PUG, дает + 90 к клику</p>
            </div>
          </li>

          <li className="store__item arcana-item" onClick={buyArcana}>
            <div className="card-container">
              <div className="arcana-slot"></div>
              <h3 className="menu__title">Четкая аркана</h3>
              <p className="menu__title-min">{arcanaPrice} PUG, дает + 150 к клику</p>
            </div>
          </li>

        </div>
      </ul>

    </div>
  );
};

export default ShopItems;
