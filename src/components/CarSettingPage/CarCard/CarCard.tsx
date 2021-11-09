import React from "react";
import './CarCard.scss';
import CarCardImg from '../../../assets/car-card.png';
import { Progress } from "antd";

const CarCard = () => {
  return (
    <div className="car-card">

      <div className="car-card__download">
        <img className="download__img" src={CarCardImg} alt="car" />
        <h2 className="download__header">
          Hyndai, i30 N
        </h2>
        <p className="download__car-category">
          Компакт-кар
        </p>
        <label className="download__input-wrapper">
          <input type="file" />
          <span className="choose">Выберите файл...</span>
          <span className="right-part">Обзор</span>
        </label>
      </div>

      <div className="car-card__progress-bar">
        <div className="progress-bar__container">
          <p className="progress-bar__header">Заполнено</p> 
          <Progress percent={75} status={"active"} />
        </div>
      </div>

      <div className="car-card__description">
        <div className="description__container">
          <h3 className="description__header">Описание</h3>
          <p className="description__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae quod dolorum sint alias, possimus illum assumenda eligendi cumque?
          </p>
        </div>
      </div>

    </div>
  )
};

export default CarCard;