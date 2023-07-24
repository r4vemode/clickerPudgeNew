import React from 'react';
import AchivmentItem from "./AchivmentItem";


const ShopItems = ({componentName, score, setScore, scorePerClick, setScorePerClick, }) => {

  const buyArcana = () => {
    if (score >= 20000) {
      setScore(score - 20000);
      setScorePerClick(scorePerClick + 90);
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  }

  const buybottle = () => {
    if (score >= 20) {
      setScore(score - 20);
      setScorePerClick(scorePerClick + 2);
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  }

  const buyMask = () => {
    if (score >= 100) {
      setScore(score - 100);
      setScorePerClick(scorePerClick + 8);
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  }

  const buyHook = () => {
    if (score >= 10000) {
      setScore(score - 10000);
      setScorePerClick(scorePerClick + 30);
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
                <p className="menu__title-min">20 PUG, дает + 2 к клику</p>
              </div>
            </li>

            <li className="store__item arcana-item" onClick={buyMask}>
              <div className="card-container">
                <div className="mask-slot"></div>
                <h3 className="menu__title">Злая(очень) маска</h3>
                <p className="menu__title-min">100 PUG, дает + 8 к клику</p>
              </div>
            </li>

          </div>

          <div className="store__list-container">

            <li className="store__item hook-item" onClick={buyHook}>
              <div className="card-container">
                <img className={'hook'} src="/img/hook.png" alt=""/>
                <h3 className="menu__title">Крутой хук</h3>
                <p className="menu__title-min">10000 PUG, дает + 30 к клику</p>
              </div>
            </li>

            <li className="store__item arcana-item" onClick={buyArcana}>
              <div className="card-container">
                <div className="arcana-slot"></div>
                <h3 className="menu__title">Четкая аркана</h3>
                <p className="menu__title-min">20000 PUG, дает + 90 к клику</p>
              </div>
            </li>

          </div>
        </ul>

      </div>
  );
};

export default ShopItems;
