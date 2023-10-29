import React from 'react';
import './achiveModal.css'
import {useGameContext} from "../../GameContext";

const AchivModals = ({ achievementId }) => {
  const {
    savedName
  } = useGameContext();

  let title, imgSrc, text;

  switch (achievementId) {
    case 1:
      title = "100 пуджей!";
      imgSrc = "/img/100pugs.jpg";
      text = "Поздравляю с первой сотней pugs!! Ты на пути к великому, помни это, когда принесешь мне очередную голову этой свиньи! Удачи друг мой.";
      break;
    case 2:
      title = "1000 пуджей!";
      imgSrc = "/img/1000pugs.jpg";
      text = "Ты достиг 1000 pugs! Отлично! Рано или поздно ты станешь великим охотником, но пока не сдавай темп и продолжай в том же духе";
      break;
    case 3:
      title = "10 000 пуджей!";
      imgSrc = "/img/10000pugs.jpg";
      text = "Ты достиг 10 000 pugs! Это просто невероятно!";
      break;
    case 4:
      title = "100 000 пуджей!";
      imgSrc = "/img/100000pugs.jpg";
      text = `ОГО!! Уже первая сотня пуджей на подходе? Класс! ${savedName},я рад что ты выбрал нашу таверну для сдачи валюты!`;
      break;
    case 5:
      title = "1 000 000 пуджей!";
      imgSrc = "/img/1000000pugs.jpg";
      text = "Ты достиг 1 000 000 pugs! Гигант мысли! Если устал, можешь передохнуть конечно, но я уверен, что если немного поднажать, то можно достигнуть еще больших высот в списке великих охотников, в котором ты уже занял свое заслуженное место конечно же)))";
      break;
    case 6:
      title = "10 000 000 пуджей!";
      imgSrc = "/img/10000000pugs.jpg";
      text = "ВСЕ!! 10 000 00 pugs! Можешь пойти и купить себе яхту, виллу, и любой спорткар на выбор засчет нашей валюты! честно, это не скам, попробуй сам.";
      break;
    default:
      title = "Неизвестное достижение";
      imgSrc = "/img/pudge.png";
      text = "Что-то пошло не так, пожалуйста, напишите об этом разработчику.";
      break;
  }

  return (
    <div className={'achiv__modal-box'}>
      <div className={'achiv__modal-container'}>
        <ul className="achiv__modal-list">
          <li className="achiv__modal-item">
            <img className={'achiv__modal-img'} src={imgSrc} alt={title}/>
          </li>
          <li className="achiv__modal-item-text">
            <h2 className="achiv__modal-title">
              {title}
            </h2>
            <p className="achiv__modal-text">{text}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AchivModals;