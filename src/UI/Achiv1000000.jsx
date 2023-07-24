import React from 'react';

const AchivmentItem = () => {
  return (
    <div>
      <div className="ach-main__container">
        <div className="ach-container">
          <div className="ach-title-container">
            <img className={'star-img'} src="/img/star.png" alt=""/>
            <h1 className="ach-title">
              Поздравляем!
            </h1>
            <img className={'star-img'} src="/img/star.png" alt=""/>
          </div>
          <div className="ach-text-container">
            <p className="ach-text">
              Вы разблокировали достижение "Владелец зоопарка из гадзил", дай бог здоровья.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchivmentItem;