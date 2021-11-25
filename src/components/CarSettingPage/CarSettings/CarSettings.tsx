import React from "react";
import './CarSettings.scss';
import Input from '../../Input/Input';
import { ReactComponent as ColorPlusBtn } from '../../../assets/color-plus-btn.svg';
import AddService from "../../AddService/AddService";
import MainButton from "../../MainButton/MainButton";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { CarSettingsActionTypes } from "../../../store/types/carSettings";
import { axiosInstanse } from "../../../apis/axios";

const CarSettings = () => {

  const dispatch = useDispatch();
  const { name, categoryId, priceMin, priceMax, colors, newColor, description, imgBase64, imgParameters, createdCarId } = useTypedSelector(state => state.carSettings)

  const renderedColors = colors.map(color => {
    return <AddService key={color} divClassName="add-service" name="car-settings-first" labelClassName="add-service__label" content={color} checked={true} />
  })

  let addCar = {
    priceMax: priceMax,
    priceMin: priceMin,
    name: name,
    thumbnail: {
      mimetype: imgParameters?.type,
      originalname: imgParameters?.name,
      path: imgBase64,
      size: imgParameters?.size,
    },
    description: description,
    categoryId: {
      id: "5fd91add935d4e0be16a3c4b",
    },
    colors: colors,
  }

  const accTok: any = localStorage.getItem("access_token")
  const token = JSON.parse(accTok);
  console.log(token);
  
  
  const addNewCar = (token: string, carParams: any) => {
    return async (dispatch: any) => {
      try {
        const response = await axiosInstanse.post('/db/car', carParams, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
      })
        dispatch({type: CarSettingsActionTypes.CAR_SETTINGS_SET_CREATED_CAR_ID, payload: response.data.data.id})
        dispatch({type: CarSettingsActionTypes.CAR_SETTINGS_SET_SUCCESS_ALERT_IS_VISIBLE, payload: true})
        setTimeout(() => {
          dispatch({type: CarSettingsActionTypes.CAR_SETTINGS_SET_SUCCESS_ALERT_IS_VISIBLE, payload: false})
        }, 2000)
      } catch (error) {
        alert(error)
      }
    }
  }

  const deleteCar = (token: string, carId: string) => {
    return async (dispatch: any) => {
      try {
          await axiosInstanse.delete(`/db/car/${carId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
      })
      } catch (error) {
        alert(error)
      }
    }
  }

  const addNewCarHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const addNewCarWrap = addNewCar(token, addCar)
    addNewCarWrap(dispatch)
  }

  const rejectHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({type: CarSettingsActionTypes.CAR_SETTINGS_RESET})
  }

  const deleteCarHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const deleteCarWrap = deleteCar(token, createdCarId)
    deleteCarWrap(dispatch)
  }

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
              <Input
                labelClassName="car-settings__input-label"
                labelText="Модель автомобиля"
                name="car-model"
                inputClassName="car-settings__input"
                inputType="text"
                value={name}
                inputHandler={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: CarSettingsActionTypes.CAR_SETTINGS_SET_NAME, payload: e.target.value })}
              />
            </div>
            <div className="top-inputs_right">
              <Input
                labelClassName="car-settings__input-label"
                labelText="Тип автомобиля"
                name="car-type"
                inputClassName="car-settings__input"
                inputType="text"
                value={categoryId}
                inputHandler={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: CarSettingsActionTypes.CAR_SETTINGS_SET_CATEGORY_ID, payload: e.target.value })}
              />
            </div>
            <div className="top-inputs_right">
              <Input
                labelClassName="car-settings__input-label"
                labelText="Минимальная цена"
                name="car-type"
                inputClassName="car-settings__input"
                inputType="text"
                value={priceMin}
                inputHandler={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: CarSettingsActionTypes.CAR_SETTINGS_SET_PRICE_MIN, payload: e.target.value })}
              />
            </div>
            <div className="top-inputs_right">
              <Input
                labelClassName="car-settings__input-label"
                labelText="Максимальная цена"
                name="car-type"
                inputClassName="car-settings__input"
                inputType="text"
                value={priceMax}
                inputHandler={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: CarSettingsActionTypes.CAR_SETTINGS_SET_PRICE_MAX, payload: e.target.value })}
              />
            </div>
          </div>
          <div className="car-settings__colors">
            <div className="input-width">
              <Input
                labelClassName="car-settings__input-label"
                labelText="Доступные цвета"
                name="available-colors"
                inputClassName="car-settings__input-colors color-input"
                inputType="text"
                value={newColor}
                inputHandler={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: CarSettingsActionTypes.CAR_SETTINGS_SET_NEW_COLOR, payload: e.target.value })}
              />
            </div>
            <ColorPlusBtn className="btn-add-colors" onClick={(e: React.MouseEvent<any>) => dispatch({ type: CarSettingsActionTypes.CAR_SETTINGS_SET_COLORS, payload: [...colors, newColor] })} />
          </div>
          <div className="car-settings__add-service">
            {renderedColors}
          </div>
          <div className="description-area">
            <textarea className="description-area__textarea" name="description" id="" cols={30} rows={10} value={description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => dispatch({ type: CarSettingsActionTypes.CAR_SETTINGS_SET_DESCRIPTION, payload: e.target.value })}></textarea>
          </div>
        </div>

        <div className="car-settings__footer">
          <div className="footer__btn-group_left">
            <MainButton btnClassName="btn btn_blue" btnText="Сохранить" clickHandle={addNewCarHandler} />
            <MainButton btnClassName="btn btn_gray" btnText="Отменить" clickHandle={rejectHandler} />
          </div>
          <div className="footer__btn-group_right">
            <MainButton btnClassName="btn btn_red" btnText="Удалить" clickHandle={deleteCarHandler} />
          </div>
        </div>

      </div>
    </>
  )
};

export default CarSettings;