import React from 'react';
import {Link} from "react-router-dom";
import './headerMenuStyle.css'

const HeaderMenu = () => {
  return (
    <div>
      <div className="menu">
        <Link to="pages/profile" className="header__link">Профиль</Link>
        <Link to="pages/leaderBoard" className="header__link">Таблица лидеров</Link>
        <Link to="pages/stats" className="header__link">Статистика</Link>
      </div>
    </div>
  );
};

export default HeaderMenu;