import React from "react";
import './OrderPageInfo.scss';
import OrderCarImg from '../../../assets/order-car-img.png';
import AddService from '../../AddService/AddService';

const OrderPageInfo = () => {
  return (
    <div className="order-card__info">
      <div className="info__car-img">
        <img src={OrderCarImg} alt="car" />
      </div>
      <div className="info__details">
        <p className="details__address"><span className="details_bold">ELANTRA</span> в <span className="details_bold">Ульяновск</span>, Нариманова 42<br /></p>
        <p className="details__date">12.06.2019 12:00 — 13.06.2019 12:00</p>
        <p className="details__color">Цвет: <span className="details_bold">Голубой</span></p>
      </div>
      <div className="info__additionals">
        <AddService divClassName="add-service" name="first" labelClassName="add-service__label" content="Полный бак"/>
        <AddService divClassName="add-service" name="second" labelClassName="add-service__label" content="Детское кресло"/>
        <AddService divClassName="add-service" name="third" labelClassName="add-service__label" content="Правый руль"/>
        
      </div>
      <div className="info__price">
        <p className="price">4 300 <span className="price__symbol">₽</span></p>
      </div>
      <div className="info__btn-group">
        <button className="info__btn info__btn_done">Готово</button>
        <button className="info__btn info__btn_reject">Отмена</button>
        <button className="info__btn info__btn_edit">Изменить</button>
      </div>
    </div>
  )
};

export default OrderPageInfo;