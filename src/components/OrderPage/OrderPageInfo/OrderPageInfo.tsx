import React, { FC, useEffect } from "react";
import './OrderPageInfo.scss';
import AddService from '../../AddService/AddService';
import { axiosInstanse } from "../../../apis/axios";
import { useDispatch } from "react-redux";
import { OrderActionTypes } from "../../../store/types/order";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import moment from "moment";

const OrderPageInfo: FC = () => {
  const dispatch = useDispatch()
  const { allOrders } = useTypedSelector(state => state.order)
  const accTok: any = localStorage.getItem("access_token")
  const token = JSON.parse(accTok);
  console.log(allOrders);

  useEffect(() => {
    const getAllOrders = async () => {
      const response = await axiosInstanse.get('/db/order', {
        params: {
          limit: 10,
          page: 0
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      dispatch({ type: OrderActionTypes.ORDER_SET_ALL_ORDERS, payload: response.data.data })
    }
    getAllOrders()
  }, [])

  const renderedOrders = allOrders.map(order => {
    let startDate = moment(order?.dateFrom).format("DD.MM.yyyy : h:mm")
    let endDate = moment(order?.dateTo).format("DD.MM.yyyy : h:mm")
    return (
      <>
        <div className="order-card__info">
          <div className="info__car-img">
            <img
              src={order?.carId?.thumbnail?.path.includes('base64') ? order?.carId?.thumbnail?.path : `https://api-factory.simbirsoft1.com${order?.carId?.thumbnail?.path}`}
              alt="car"
              style={{ height: '63px', width: "138px" }}
            />
          </div>
          <div className="info__details">
            <p className="details__address"><span className="details_bold">{order?.carId?.name}</span> в <span className="details_bold">{order?.cityId?.name}</span>, {order?.pointId?.address}<br /></p>
            <p className="details__date">{startDate} — {endDate}</p>
            <p className="details__color">Цвет: <span className="details_bold">{order?.carId?.colors?.[0]}</span></p>
          </div>
          <div className="info__additionals">
            <AddService divClassName="add-service" name="first" labelClassName="add-service__label" content="Полный бак" checked={order?.isFullTank ? true : false} />
            <AddService divClassName="add-service" name="second" labelClassName="add-service__label" content="Детское кресло" checked={order?.isNeedChildChair ? true : false} />
            <AddService divClassName="add-service" name="third" labelClassName="add-service__label" content="Правый руль" checked={order?.isRightWheel ? true : false} />
          </div>
          <div className="info__price">
            <p className="price">{order?.carId?.priceMax} <span className="price__symbol">₽</span></p>
          </div>
          <div className="info__btn-group">
            <button className="info__btn info__btn_done">Готово</button>
            <button className="info__btn info__btn_reject">Отмена</button>
            <button className="info__btn info__btn_edit">Изменить</button>
          </div>
        </div>
      </>
    )
  })

  return <>{ renderedOrders }</>
  


};

export default OrderPageInfo;