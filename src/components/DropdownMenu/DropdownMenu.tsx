import React, { FC } from "react";
import './DropdownMenu.scss';
import { Menu, Dropdown, Button } from 'antd';
import { DropdownMenuProps } from "../../types/components";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { EntitiesActionTypes } from "../../store/types/entities";

const DropdownMenu: FC<DropdownMenuProps> = ({ btnText }) => {
  const dispatch = useDispatch()
  const { category, selectedCategoryName } = useTypedSelector(state => state.entities)

  const renderedItems = category?.map((cat) => {
    
    return (
      <Menu.Item id={cat.name}>
        <button
          className="dropdown-btn"
          id={cat?.id}
          onClick={(e: React.MouseEvent) => {
            dispatch({ type: EntitiesActionTypes.ENTITIES_SET_SELECTED_CATEGORY, payload: cat.id })
            dispatch({ type: EntitiesActionTypes.ENTITIES_SET_SELECTED_CATEGORY_NAME, payload: cat.name })
          }}
        >
          {cat.name}
        </button>
      </Menu.Item>
    )
  })
  
  
  const menu = (
    <Menu>
      {renderedItems}
    </Menu>
  )

  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <Button id="1">{selectedCategoryName}</Button>
    </Dropdown>
  )
};

export default DropdownMenu;