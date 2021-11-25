import React, { FC } from "react";
import '../../DropdownMenu/DropdownMenu.scss';
import { Dropdown, Button } from 'antd';
import { DropdownMenuProps } from "../../../types/components";

const OrderPageDropdownMenu: FC<DropdownMenuProps> = ({ btnText, menu }) => {
    
  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <Button id="1">{btnText}</Button>
    </Dropdown>
  )
};

export default OrderPageDropdownMenu;