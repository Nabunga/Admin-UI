import React, { FC, useState } from "react";
import '../../CardPagination/CardPagination.scss';
import { Pagination } from 'antd';
import { axiosInstanse } from "../../../apis/axios";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { EntitiesActionTypes } from "../../../store/types/entities";

const EntitiesPagination: FC = () => {
  const dispatch = useDispatch()
  const {selectedCategory} = useTypedSelector(state => state.entities)
  const [page, setPage] = useState(1)
  const accTok: any = localStorage.getItem("access_token")
  const token = JSON.parse(accTok);

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
    getCarsByPagination()
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

export default EntitiesPagination;