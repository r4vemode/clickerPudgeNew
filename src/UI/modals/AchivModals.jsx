import React from 'react';
import './achiveModal.css'

const AchivModals = () => {
  return (
    <div className={'achiv__modal-box'}>
      <div className={'achiv__modal-container'}>
        <ul className="achiv__modal-list">
          <li className="achiv__modal-item">
            <img className={'achiv__modal-img'} src="/img/profile-achive.jpg" alt=""/>
          </li>
          <li className="achiv__modal-item">
            <h2 className="achiv__modal-title">
              100 пуджей!
            </h2>
            <p className="achiv__modal-text">Поздравляю с первой сотней pugs!! Ты на пути к великому, помни это, когда принесешь мне очередную голову этой свиньи! Удачи друг мой.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AchivModals;