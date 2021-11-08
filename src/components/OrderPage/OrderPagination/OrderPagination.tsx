import React from "react";
import './OrderPagination.scss';
import { Pagination } from 'antd';


const OrderPagination = () => {
  return (
    <div className="order-card__paginator">
      <Pagination defaultCurrent={6} total={500} showSizeChanger={false} size={'small'} />
    </div>
  )
}

export default OrderPagination;