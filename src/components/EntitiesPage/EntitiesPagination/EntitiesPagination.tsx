import React, { FC, useState } from "react";
import '../../CardPagination/CardPagination.scss';
import { Pagination } from 'antd';
import { axiosInstanse } from "../../../apis/axios";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { EntitiesActionTypes } from "../../../store/types/entities";

const EntitiesPagination: FC = () => {
  const dispatch = useDispatch()
  const {selectedCategory,carsCount} = useTypedSelector(state => state.entities)
  let [page, setPage] = useState(0)
  

  const handlePagination = () => {
    const getCarsByPagination = async () => {
      const response = await axiosInstanse.get('/db/car', {
        params: {
          limit: 20,
          page: page,
          categoryId: selectedCategory,
        },
      })
      dispatch({type: EntitiesActionTypes.ENTITIES_SET_ALL_CARS, payload: response.data.data})
    }
    setPage(++page)
    getCarsByPagination()
  }
     
  return (
    <div className="order-card__paginator">
      <Pagination 
        defaultCurrent={1} 
        total={carsCount} 
        showSizeChanger={false} 
        size={'small'}
        pageSize={10}
        onChange={handlePagination}
        current={page + 1}
      />
    </div>
  )
}

export default EntitiesPagination;