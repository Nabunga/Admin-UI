import React, { FC } from "react";
import './CardHeader.scss';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { ReactComponent as BtnDropdownIcon } from '../../assets/btn-dropdown.svg';
import MainButton from '../MainButton/MainButton';
import { CardHeaderProps } from "../../interfaces/interfaces";

const CardHeader: FC<CardHeaderProps> = ({ rejectBtn, dropdownTextOne, dropdownTextTwo, dropdownTextThree, dropdownTextFour }) => {
  return (
    <div className="order-card__header">
      <div className="dropdown-btn-group">
        <div className="dropdown-group">
          <DropdownMenu btnText={dropdownTextOne} />
          <BtnDropdownIcon className="dropdown-group__icon" />
        </div>
        <div className="dropdown-group">
          <DropdownMenu btnText={dropdownTextTwo} />
          <BtnDropdownIcon className="dropdown-group__icon" />
        </div>
        <div className="dropdown-group">
          <DropdownMenu btnText={dropdownTextThree} />
          <BtnDropdownIcon className="dropdown-group__icon" />
        </div>
        <div className="dropdown-group">
          <DropdownMenu btnText={dropdownTextFour} />
          <BtnDropdownIcon className="dropdown-group__icon" />
        </div>
      </div>
      <div className="dropdown-btn-group__accept-btn">
        {rejectBtn}
        <MainButton btnText="Применить" btnClassName="btn btn_blue" />
      </div>
    </div>
  )
}

export default CardHeader;