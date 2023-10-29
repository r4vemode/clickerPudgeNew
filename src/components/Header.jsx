import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import '../styles/headerStyles.css'

const Header = () => {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={'header__navigation'}>
      <nav className="header__nav">
        <div className={'menu__btn-box'}>
          <button className="profile__nav-btn" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 34 34" fill="none">
              <g clipPath="url(#clip0_403_3188)">
                <path d="M1 6H23C23.2652 6 23.5196 5.89464 23.7071 5.7071C23.8946 5.51957 24 5.26521 24 5C24 4.73478 23.8946 4.48043 23.7071 4.29289C23.5196 4.10536 23.2652 4 23 4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5C0 5.26521 0.105357 5.51957 0.292893 5.7071C0.48043 5.89464 0.734784 6 1 6Z" fill="#374957"/>
                <path d="M1 11H15C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10C16 9.73478 15.8946 9.48043 15.7071 9.29289C15.5196 9.10536 15.2652 9 15 9H1C0.734784 9 0.48043 9.10536 0.292893 9.29289C0.105357 9.48043 0 9.73478 0 10C0 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8946 0.734784 11 1 11Z" fill="#374957"/>
                <path d="M15 19H1C0.734784 19 0.48043 19.1054 0.292893 19.2929C0.105357 19.4804 0 19.7348 0 20C0 20.2652 0.105357 20.5196 0.292893 20.7071C0.48043 20.8947 0.734784 21 1 21H15C15.2652 21 15.5196 20.8947 15.7071 20.7071C15.8946 20.5196 16 20.2652 16 20C16 19.7348 15.8946 19.4804 15.7071 19.2929C15.5196 19.1054 15.2652 19 15 19Z" fill="#374957"/>
                <path d="M23 14H1C0.734784 14 0.48043 14.1054 0.292893 14.2929C0.105357 14.4804 0 14.7348 0 15C0 15.2652 0.105357 15.5196 0.292893 15.7071C0.48043 15.8947 0.734784 16 1 16H23C23.2652 16 23.5196 15.8947 23.7071 15.7071C23.8946 15.5196 24 15.2652 24 15C24 14.7348 23.8946 14.4804 23.7071 14.2929C23.5196 14.1054 23.2652 14 23 14Z" fill="#374957"/>
              </g>
              <defs>
                <clipPath id="clip0_403_3188">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className={menuVisible ? 'menu-visible' : 'menu-hidden'}>
            <ul className={'profile__nav-list'}>
              <li>
                <Link className={'profile__link'} to="/" onClick={toggleMenu}>Кликер</Link>
              </li>
              <li>
                <Link className={'profile__link'} to="/pages/profile" onClick={toggleMenu}>Профиль</Link>
              </li>
              <li>
                <Link className={'profile__link'} to="/pages/statsPage" onClick={toggleMenu}>Статистика</Link>
              </li>
              <li>
                <Link className={'profile__link'} to="/pages/achivmentsPage" onClick={toggleMenu}>Доступные ачивки</Link>
              </li>
              <li>
                <Link className={'profile__link'} to="/pages/registrationPage" onClick={toggleMenu}>Создать аккаунт</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;