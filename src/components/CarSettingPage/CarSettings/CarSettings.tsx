import React from "react";
import './CarSettings.scss';
import Input from '../../Input/Input';
import { ReactComponent as ColorPlusBtn } from '../../../assets/color-plus-btn.svg';
import AddService from "../../AddService/AddService";
import MainButton from "../../MainButton/MainButton";

const CarSettings = () => {
  return (
    <>
      <div className="car-settings__wrapper">

        <div className="car-settings__header">
          <h2 className="settings-header">
            Настройки автомобиля
          </h2>
        </div>

        <div className="car-settings__content">
          <div className="top-inputs">
            <div className="top-inputs_left">
              {/* <Input
                labelClassName="car-settings__input-label"
                labelText="Модель автомобиля"
                name="car-model"
                inputClassName="car-settings__input"
                inputType="text"
              /> */}
            </div>
            <div className="top-inputs_right">
              {/* <Input
                labelClassName="car-settings__input-label"
                labelText="Тип автомобиля"
                name="car-type"
                inputClassName="car-settings__input"
                inputType="text"
              /> */}
            </div>
          </div>
          <div className="car-settings__colors">
            <div className="input-width">
              {/* <Input
                labelClassName="car-settings__input-label"
                labelText="Доступные цвета"
                name="available-colors"
                inputClassName="car-settings__input-colors color-input"
                inputType="text"
              /> */}
            </div>
            <ColorPlusBtn className="btn-add-colors" />
          </div>
          <div className="car-settings__add-service">
            <AddService divClassName="add-service" name="car-settings-first" labelClassName="add-service__label" content="Красный" />
            <AddService divClassName="add-service" name="car-settings-second" labelClassName="add-service__label" content="Белый" />
            <AddService divClassName="add-service" name="car-settings-third" labelClassName="add-service__label" content="Черный" />
          </div>
        </div>

        <div className="car-settings__footer">
          <div className="footer__btn-group_left">
            <MainButton btnClassName="btn btn_blue" btnText="Сохранить" />
            <MainButton btnClassName="btn btn_gray" btnText="Отменить" />
          </div>
          <div className="footer__btn-group_right">
            <MainButton btnClassName="btn btn_red" btnText="Удалить" />
          </div>
        </div>
        
      </div>
    </>
  )
};

export default CarSettings;