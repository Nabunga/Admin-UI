import React, { FC, useState } from "react";
import '../../CardHeader/CardHeader.scss';
import { ReactComponent as BtnDropdownIcon } from '../../../assets/btn-dropdown.svg';
import MainButton from '../../MainButton/MainButton';
import { CardHeaderProps } from "../../../types/components";
import OrderPageDropdownMenu from "../OrderPageDropdownMenu/OrderPageDropdownMenu";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { axiosInstanse } from "../../../apis/axios";
import { OrderActionTypes } from "../../../store/types/order";
import { useDispatch } from "react-redux";

const OrderPageCardHeader: FC<CardHeaderProps> = () => {
  const dispatch = useDispatch()
  const {currentOrderStatus,selectedOrderStatusId} = useTypedSelector(state => state.order)
  const accTok: any = localStorage.getItem("access_token")
  const token = JSON.parse(accTok);

  const getOrdersHandler = () => {
    const setOrders = async () => {
      const response = await axiosInstanse.get('/db/order', {
        params: {
          limit: 10,
          page: 2,
          orderStatusId: selectedOrderStatusId,
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      dispatch({ type: OrderActionTypes.ORDER_SET_ALL_ORDERS, payload: response.data.data })
    }
    setOrders()
  }

  return (
    <div className="order-card__header">
      <div className="dropdown-btn-group">
        <div className="dropdown-group">
          <OrderPageDropdownMenu btnText={currentOrderStatus} />
          <BtnDropdownIcon className="dropdown-group__icon" />
        </div>
      </div>
      <div className="dropdown-btn-group__accept-btn">
        <MainButton btnText="Применить" btnClassName="btn btn_blue" clickHandle={getOrdersHandler}/>
      </div>
    </div>
  )
}

export default OrderPageCardHeader;