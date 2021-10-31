import React from 'react';
import './Auth.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import MainButton from '../MainButton/MainButton';

const Auth = () => {
  return (
    <>
      <div className="auth__wrapper">
        <header>
          <div className="auth__header">
            <Logo />
            <h1 className="header__text">Need for drive</h1>
          </div>
        </header>
        <main>
          <div className="auth__form">
            <div className="form__text">Вход</div>
            <form className="form-group">
              <label className="form__label-text" htmlFor="login">
                Почта
              </label>
              <input className="form__input" type="email" name="login" />
              <label className="form__label-text" htmlFor="password">
                Пароль
              </label>
              <input className="form__input" type="password" name="password" />
            </form>
            <div className="auth__footer">
              <a className="auth__link" href="#" >Запросить доступ</a>
              <MainButton btnText="Войти" btnClassName="btn btn_blue" />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Auth;