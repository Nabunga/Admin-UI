import { OrderAction, OrderActionTypes, OrderState } from "../types/order";

const initialState: OrderState = {
  selectedOrderStatusId: null,
  currentOrderStatus: "Все заказы",
  allOrders: [],
}

export const orderReducer = (state = initialState, action: OrderAction): OrderState => {
  switch(action.type) {
    case OrderActionTypes.ORDER_SET_SELECTED_ORDER_STATUS_ID:
      return {...state, selectedOrderStatusId: action.payload}
    case OrderActionTypes.ORDER_SET_CURRENT_ORDER_STATUS:
      return {...state, currentOrderStatus: action.payload}
    case OrderActionTypes.ORDER_SET_ALL_ORDERS:
      return {...state, allOrders: action.payload}
    default:
      return state
  }
}