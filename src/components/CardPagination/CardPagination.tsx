import React, { FC, useState } from "react";
import './CardPagination.scss';
import { Pagination } from 'antd';
import { axiosInstanse } from "../../apis/axios";
import { useDispatch } from "react-redux";
import { OrderActionTypes } from "../../store/types/order";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const CardPagination: FC = () => {
  const dispatch = useDispatch()
  const {selectedOrderStatusId} = useTypedSelector(state => state.order)
  const [page, setPage] = useState(1)
  const accTok: any = localStorage.getItem("access_token")
  const token = JSON.parse(accTok);

  const handlePagination = () => {
    const getOrdersByPagination = async () => {
      const response = await axiosInstanse.get('/db/order', {
        params: {
          limit: 10,
          page: page,
          orderStatusId: selectedOrderStatusId,
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      dispatch({type: OrderActionTypes.ORDER_SET_ALL_ORDERS, payload: response.data.data})
    }
    getOrdersByPagination()
    setPage(page + 1)
  }

  return (
    <div className="order-card__paginator">
      <Pagination 
        defaultCurrent={1} 
        total={100} 
        showSizeChanger={false} 
        size={'small'}
        pageSize={10}
        onChange={handlePagination}
      />
    </div>
  )
}

export default CardPagination;