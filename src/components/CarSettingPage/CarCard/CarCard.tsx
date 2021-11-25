import React, { FC } from "react";
import './CarCard.scss';
import { Progress } from "antd";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { CarSettingsActionTypes } from "../../../store/types/carSettings";
import { ReactComponent as ImgMock } from '../../../assets/img-mock.svg';

const CarCard: FC = () => {

  const dispatch = useDispatch()
  const { description, name, categoryId, imgBase64, priceMin, priceMax, colors } = useTypedSelector(state => state.carSettings)

  const file2Base64 = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader: any = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.toString());
      reader.onerror = (error: any) => reject(error);
    })
  }

  async function Main() {
    const file: any = document.querySelector<any>('#myfile').files[0];
    dispatch({ type: CarSettingsActionTypes.CAR_SETTINGS_SET_IMG_BASE64, payload: await file2Base64(file) })
    dispatch({ type: CarSettingsActionTypes.CAR_SETTINGS_SET_IMG_PARAMETERS, payload: file })
  }

  const progressData = [
    imgBase64,
    name,
    categoryId,
    priceMin,
    priceMax,
    colors,
    description
  ]

  const sumItem = progressData.filter(Boolean).length;

  const progress = Math.round((sumItem / 7) * 100);

  return (
    <div className="car-card">

      <div className="car-card__download">
        {imgBase64 === "" ? <ImgMock className="download__img" /> : <img className="download__img" src={imgBase64} alt="car" />}
        <h2 className="download__header">
          {name}
        </h2>
        <p className="download__car-category">
          {categoryId}
        </p>
        <label className="download__input-wrapper">
          <input id="myfile" type="file" onChange={Main} />
          <span className="choose">Выберите файл...</span>
          <span className="right-part">Обзор</span>
        </label>
      </div>

      <div className="car-card__progress-bar">
        <div className="progress-bar__container">
          <p className="progress-bar__header">Заполнено</p>
          <Progress percent={progress} status={"active"} />
        </div>
      </div>

      <div className="car-card__description">
        <div className="description__container">
          <h3 className="description__header">Описание</h3>
          <p className="description__text">
            {description}
          </p>
        </div>
      </div>

    </div>
  )
};

export default CarCard;