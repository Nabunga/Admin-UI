import React, { useState } from 'react';
import './Auth.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import MainButton from '../MainButton/MainButton';
import Input from '../Input/Input';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Dispatch } from "react"
import { axiosInstanse } from "../../apis/axios"
import { AuthAction, AuthActionTypes } from "../../store/types/auth"

const Auth = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logIn = (username: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
      try {
        const response = await axiosInstanse.post('/auth/login', {
          username: username,
          password: password
        })
        localStorage.setItem('access_token', JSON.stringify(response.data.access_token))
        dispatch({ type: AuthActionTypes.AUTH_SET_ACCESS_TOKEN, payload: response.data.access_token })
        history.push("/car-setting")
      } catch (error) {
        dispatch({ type: AuthActionTypes.AUTH_CATCH_REQUEST_ERROR, payload: "Ошибка авторизации" })
        alert(error)
      }
    }
  }

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const inputUsernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const inputPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const loginfunc = logIn(username, password)
    loginfunc(dispatch)
  }

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
                name="email"
                labelText="Почта"
                inputClassName="form__input"
                inputType="email"
                inputHandler={inputUsernameHandler}
                value={username}
              />
              <Input
                labelClassName="form__label-text"
                name="password"
                labelText="Пароль"
                inputClassName="form__input"
                inputType="password"
                inputHandler={inputPasswordHandler}
                value={password}
              />
            </form>
            <div className="auth__footer">
              <button className="auth__link">Запросить доступ</button>
              <MainButton btnText="Войти" btnClassName="btn btn_blue" clickHandle={loginHandler} />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Auth;