import React, { FC, useState } from "react";
import "./CardPagination.scss";
import { Pagination } from "antd";
import { axiosInstanse } from "../../apis/axios";
import { useDispatch } from "react-redux";
import { OrderActionTypes } from "../../store/types/order";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { token } from "../../constants";

const CardPagination = () => {
  const dispatch = useDispatch();
  const {
    selectedOrderStatusId,
    selectedCity,
    selectedCar,
    currentPage,
    ordersCount,
    allOrders,
  } = useTypedSelector((state) => state.order);

  const handlePagination = () => {
    const getOrdersByPagination = async () => {
      
      const response = await axiosInstanse.get("/db/order", {
        params: {
          limit: 10,
          page: currentPage,
          orderStatusId: selectedOrderStatusId,
          cityId: selectedCity,
          carId: selectedCar,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      dispatch({
        type: OrderActionTypes.ORDER_SET_CURRENT_PAGE,
        payload: currentPage + 1,
      });
      dispatch({
        type: OrderActionTypes.ORDER_SET_ALL_ORDERS,
        payload: response.data.data,
      });
    };
    getOrdersByPagination();
  };

  return (
    <div className="order-card__paginator">
      <Pagination
        defaultCurrent={1}
        pageSize={allOrders.length}
        total={ordersCount}
        showSizeChanger={false}
        size={"small"}
        onChange={handlePagination}
        current={currentPage + 1}
      />
    </div>
  );
};

export default CardPagination;
