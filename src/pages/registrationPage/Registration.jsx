import React from 'react';
import './registration.css'
import {Link} from "react-router-dom";
import Header from "../../components/Header";
const Registration = () => {
  return (
    <>
      <Header/>
      <div className="registration__box">
        <div className={'registration__container'}>
          <img className={'registration__img'} src="/img/pudge.png" alt=""/>
          <ul className="registration__list">
            <li className="registration__item">
              <h2 className="registration__title">Регистрация</h2>
            </li>
            <li className="registration__item">
              <form action="" className="registration__form">
                <input type="email" className="registration__input" placeholder={'Введите почту'}/>
                <input type="password" className="registration__input" placeholder={'Введите пароль'}/>
                <button type={"submit"} className="registration__btn">Зарегистрироваться</button>
              </form>
            </li>
          </ul>
          <p className="registration__link-text">
            Уже есть аккаунт? <Link className={'registration__link'} to={'/pages/authPage'}>Войти</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;