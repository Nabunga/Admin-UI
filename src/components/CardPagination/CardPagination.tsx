import React from "react";
import './CardPagination.scss';
import { Pagination } from 'antd';


const CardPagination = () => {
  return (
    <div className="order-card__paginator">
      <Pagination defaultCurrent={6} total={500} showSizeChanger={false} size={'small'} />
    </div>
  )
}

export default CardPagination;