import React from 'react';
import './Auth.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import MainButton from '../MainButton/MainButton';
import Input from '../Input/Input';

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
              <Input
                labelClassName="form__label-text"
                htmlFor="email"
                labelText="Почта"
                inputClassName="form__input"
                inputType="email"
                inputName="email"
              />
              <Input
                labelClassName="form__label-text"
                htmlFor="password"
                labelText="Пароль"
                inputClassName="form__input"
                inputType="password"
                inputName="password"
              />
            </form>
            <div className="auth__footer">
              <button className="auth__link">Запросить доступ</button>
              <MainButton btnText="Войти" btnClassName="btn btn_blue" />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Auth;