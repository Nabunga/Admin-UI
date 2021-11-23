import React, { FC } from "react";
import './CardHeader.scss';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { ReactComponent as BtnDropdownIcon } from '../../assets/btn-dropdown.svg';
import MainButton from '../MainButton/MainButton';
import { CardHeaderProps } from "../../types/components";
import { axiosInstanse } from "../../apis/axios";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EntitiesActionTypes } from "../../store/types/entities";

const CardHeader: FC<CardHeaderProps> = ({ rejectBtn }) => {
  
  const {selectedCategory,selectedCategoryName} = useTypedSelector(state => state.entities)

  const getCarsByCategory = () => {
    return async (dispatch: any) => {
      try {
        const response = await axiosInstanse.get('/db/car', {
          params: {
            limit: 20,
            page: 1,
            categoryId: selectedCategory
          }
        })
        dispatch({ type: EntitiesActionTypes.ENTITIES_SET_CARS_BY_CATEGORY, payload: response.data.data })
      } catch (error) {
        alert(error)
      }
    }
  }  

  return (
    <div className="order-card__header">
      <div className="dropdown-btn-group">
        <div className="dropdown-group">
          <DropdownMenu btnText={selectedCategoryName} />
          <BtnDropdownIcon className="dropdown-group__icon" />
        </div>
      </div>
      <div className="dropdown-btn-group__accept-btn">
        {rejectBtn}
        <MainButton btnText="Применить" btnClassName="btn btn_blue" clickHandle={getCarsByCategory()} />
      </div>
    </div>
  )
}

export default CardHeader;