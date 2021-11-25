import React, { FC } from "react";
import './Header.scss';
import { ReactComponent as MagnifierIcon } from '../../assets/magnifier.svg';
import { ReactComponent as NotificationIcon } from '../../assets/notification.svg';
import { ReactComponent as CountNotificationIcon } from '../../assets/count.svg';
import { ReactComponent as DropdownIcon } from '../../assets/dropdown.svg';
import Avatar from '../../assets/avatar.png'
import { ReactComponent as AlertCloseIcon } from '../../assets/alert-close-icon.svg';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { CarSettingsActionTypes } from "../../store/types/carSettings";

const Header: FC = () => {

  const dispatch = useDispatch()
  const {successAlertIsVisible} = useTypedSelector(state => state.carSettings)

  const closeHandler = (e: React.MouseEvent) => {
    dispatch({type: CarSettingsActionTypes.CAR_SETTINGS_SET_SUCCESS_ALERT_IS_VISIBLE, payload: false})
  }

  return (
    <>
      <div className="header">
        <div className="search-form">
          <MagnifierIcon className="search-form__icon" />
          <p className="search-form__text">
            Поиск ...
          </p>
        </div>
        <div className="user-info">
          <div className="notification">
            <NotificationIcon />
            <CountNotificationIcon className="notification__count-icon" />
          </div>
          <div className="user">
            <img className="user__img" src={Avatar} alt="user" />
            <p className="user__name">Admin</p>
            <DropdownIcon className="user__dropdown-icon" />
          </div>
        </div>
      </div>

      <div className={successAlertIsVisible ? "success-alert visible" : "success-alert"}>
        <div className="success-alert__text">
          Успех! Машина сохранена
        </div>
        <div className="success-alert__icon">
          <AlertCloseIcon onClick={closeHandler} />
        </div>
      </div>

    </>
  )
};

export default Header;