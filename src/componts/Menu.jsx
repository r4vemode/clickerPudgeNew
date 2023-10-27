import React, { useRef, useState } from 'react';
import '../style.css'
import Store from "./Store";

const Menu = ({score, setScore, scorePerClick, setScorePerClick}) => {
  const pudgeRef = useRef();

  const handleClick = () => {
    pudgeRef.current.classList.add("pudge-clicked");

    setTimeout(() => {
      pudgeRef.current.classList.remove("pudge-clicked");
    }, 100); // время анимации

    setScore(score + scorePerClick);
  }

  return (
    <div>
      <section className="main">
        <h1 className="menu__titles">Накликайте кучу пуджей!</h1>
        <div className="container">
          <div className="munu">
            <h1 className="menu__title">Pudges: {score}</h1>
            <button className={'pudge'} onClick={handleClick}>
              <img className={'pgimg'}
                   ref={pudgeRef}
                   src="/img/pudge.png" alt=""/>
            </button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
