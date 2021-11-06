import React from "react";
import './Header.scss';
import {ReactComponent as MagnifierIcon} from '../../assets/magnifier.svg';
import {ReactComponent as NotificationIcon} from '../../assets/notification.svg';
import {ReactComponent as CountNotificationIcon} from '../../assets/count.svg';
import {ReactComponent as DropdownIcon} from '../../assets/dropdown.svg';
import Avatar from '../../assets/avatar.png'

const Header = () => {
  return (
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
  )
};

export default Header;