import React, { FC, useEffect, useState } from "react";
import '../../DropdownMenu/DropdownMenu.scss';
import { Menu, Dropdown, Button } from 'antd';
import { DropdownMenuProps } from "../../../types/components";
import { useDispatch } from "react-redux";
import { axiosInstanse } from "../../../apis/axios";
import { OrderActionTypes } from "../../../store/types/order";

const OrderPageDropdownMenu: FC<DropdownMenuProps> = ({ btnText }) => {
  const dispatch = useDispatch()
  const [orderStatus, setOrderStatus] = useState<any[]>([]);

  const accTok: any = localStorage.getItem("access_token")
  const token = JSON.parse(accTok);

  useEffect(() => {
    async function getStatuses() {
      const res = await axiosInstanse.get('/db/orderStatus', {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      setOrderStatus(res.data.data)
    }
    getStatuses()
  }, [])

  const renderedStatuses = orderStatus.map(status => {
    return (
      <>
        <Menu.Item id={status.id}>
          <button className="dropdown-btn" id={status.id} onClick={(e: React.MouseEvent) => {
            dispatch({ type: OrderActionTypes.ORDER_SET_SELECTED_ORDER_STATUS_ID, payload: status.id })
            dispatch({ type: OrderActionTypes.ORDER_SET_CURRENT_ORDER_STATUS, payload: status.name })
          }}>
            {status.name}
          </button>
        </Menu.Item>
      </>
    )
  })

  const menu = (
    <Menu>
      {renderedStatuses}
    </Menu>
  )

  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <Button>{btnText}</Button>
    </Dropdown>
  )
};

export default OrderPageDropdownMenu;