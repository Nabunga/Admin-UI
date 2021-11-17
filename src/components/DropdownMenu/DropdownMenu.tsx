import React, { FC } from "react";
import './DropdownMenu.scss';
import { Menu, Dropdown, Button } from 'antd';
import { DropdownMenuProps } from "../../types/components";

const DropdownMenu: FC<DropdownMenuProps> = ({ btnText }) => {

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <Button>{btnText}</Button>
    </Dropdown>
  )
};

export default DropdownMenu;