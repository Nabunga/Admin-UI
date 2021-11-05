import React from "react";
import './OrderPageHeader.scss';
import DropdownMenu from '../../DropdownMenu/DropdownMenu';
import { ReactComponent as BtnDropdownIcon } from '../../../assets/btn-dropdown.svg';
import MainButton from '../../MainButton/MainButton';

const OrderPageHeader = () => {
  return (
    <div className="order-card__header">
      <div className="dropdown-btn-group">
        <div className="dropdown-group">
          <DropdownMenu btnText="За неделю" />
          <BtnDropdownIcon className="dropdown-group__icon" />
        </div>
        <div className="dropdown-group">
          <DropdownMenu btnText="Модель" />
          <BtnDropdownIcon className="dropdown-group__icon" />
        </div>
        <div className="dropdown-group">
          <DropdownMenu btnText="Город" />
          <BtnDropdownIcon className="dropdown-group__icon" />
        </div>
        <div className="dropdown-group">
          <DropdownMenu btnText="Статус" />
          <BtnDropdownIcon className="dropdown-group__icon" />
        </div>
      </div>
      <div className="dropdown-btn-group__accept-btn">
        <MainButton btnText="Применить" btnClassName="btn btn_blue" />
      </div>
    </div>
  )
}

export default OrderPageHeader;