import React, { FC } from "react";
import '../../CardHeader/CardHeader.scss';
import { ReactComponent as BtnDropdownIcon } from '../../../assets/btn-dropdown.svg';
import MainButton from '../../MainButton/MainButton';
import { CardHeaderProps } from "../../../types/components";
import OrderPageDropdownMenu from "../OrderPageDropdownMenu/OrderPageDropdownMenu";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { axiosInstanse } from "../../../apis/axios";
import { OrderActionTypes } from "../../../store/types/order";
import { useDispatch } from "react-redux";
import { menuCars, menuCities, menuOrderStatuses, menuPeriod } from "./constants";
import { token } from "../../../constants";

const OrderPageCardHeader: FC<CardHeaderProps> = ({getPeriod}) => {
  const dispatch = useDispatch()
  const {selectedOrderStatusId,currentPage,selectedCity,selectedCar,defaultOrderStatus,defaultPeriod,defaultCar,defaultCity} = useTypedSelector(state => state.order)
  

  const getOrdersHandler = () => {
    const setOrders = async () => {
      const response = await axiosInstanse.get('/db/order', {
        params: {
          limit: 10,
          page: currentPage,
          orderStatusId: selectedOrderStatusId,
          // createdAt: getPeriod,
          cityId: selectedCity,
          carId: selectedCar,
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      dispatch({type: OrderActionTypes.ORDER_SET_CURRENT_PAGE, payload: 0})
      dispatch({ type: OrderActionTypes.ORDER_SET_ALL_ORDERS, payload: response.data.data })
      dispatch({type: OrderActionTypes.ORDER_SET_ORDERS_COUNT, payload: response.data.count})
    }
    setOrders()
  }

  return (
    <div className="order-card__header">
      <div className="dropdown-btn-group">
        <div className="dropdown-group">
          <OrderPageDropdownMenu btnText={defaultOrderStatus} menu={menuOrderStatuses}/>
          <BtnDropdownIcon className="dropdown-group__icon" />
        </div>
        <div className="dropdown-group">
          <OrderPageDropdownMenu btnText={defaultPeriod} menu={menuPeriod}/>
          <BtnDropdownIcon className="dropdown-group__icon" />
        </div>
        <div className="dropdown-group">
          <OrderPageDropdownMenu btnText={defaultCar} menu={menuCars}/>
          <BtnDropdownIcon className="dropdown-group__icon" />
        </div>
        <div className="dropdown-group">
          <OrderPageDropdownMenu btnText={defaultCity} menu={menuCities}/>
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