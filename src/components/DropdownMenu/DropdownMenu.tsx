import React from "react";
import './index.css';
import { Menu, Dropdown, Button } from 'antd';
import 'antd/dist/antd.css';

const DropdownMenu = () => {

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
      <Button>За неделю</Button>
    </Dropdown>

  )
};

export default DropdownMenu;