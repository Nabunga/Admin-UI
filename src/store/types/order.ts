export interface OrderState {
  currentOrderStatus: string;
  selectedOrderStatusId: string | null;
  allOrders: any[];
}

export enum OrderActionTypes {
  ORDER_SET_CURRENT_ORDER_STATUS = "ORDER_SET_CURRENT_ORDER_STATUS",
  ORDER_SET_SELECTED_ORDER_STATUS_ID = "ORDER_SET_SELECTED_ORDER_STATUS",
  ORDER_SET_ALL_ORDERS = "ORDER_SET_ALL_ORDERS",
}

interface OrderSetSelectedOrderStatusIdAction {
  type: OrderActionTypes.ORDER_SET_SELECTED_ORDER_STATUS_ID;
  payload: string;
}

interface OrderSetCurrentOrderStatusAction {
  type: OrderActionTypes.ORDER_SET_CURRENT_ORDER_STATUS;
  payload: string;
}

interface OrderSetAllOrdersAction {
  type: OrderActionTypes.ORDER_SET_ALL_ORDERS;
  payload: any[];
}

export type OrderAction = OrderSetSelectedOrderStatusIdAction | OrderSetCurrentOrderStatusAction | OrderSetAllOrdersAction