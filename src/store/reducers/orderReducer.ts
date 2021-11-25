import { OrderAction, OrderActionTypes, OrderState } from "../types/order";

const initialState: OrderState = {
  selectedOrderStatusId: null,
  allOrders: [],
  currentPage: 0,
  selectedPeriod: null,
  selectedCar: null,
  selectedCity: null,
  defaultOrderStatus: "Все заказы",
  defaultPeriod: "Все периоды",
  defaultCar: "Модель",
  defaultCity: "Город",
  ordersCount: null
}

export const orderReducer = (state = initialState, action: OrderAction): OrderState => {
  switch(action.type) {
    case OrderActionTypes.ORDER_SET_SELECTED_ORDER_STATUS_ID:
      return {...state, selectedOrderStatusId: action.payload}
    case OrderActionTypes.ORDER_SET_ALL_ORDERS:
      return {...state, allOrders: action.payload}
    case OrderActionTypes.ORDER_SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload}
    case OrderActionTypes.ORDER_SET_SELECTED_PERIOD:
      return {...state, selectedPeriod: action.payload}
    case OrderActionTypes.ORDER_SET_SELECTED_CAR:
      return {...state, selectedCar: action.payload}
    case OrderActionTypes.ORDER_SET_SELECTED_CITY:
      return {...state, selectedCity: action.payload}
    case OrderActionTypes.ORDER_SET_DEFAULT_ORDER_STATUS:
      return {...state, defaultOrderStatus: action.payload}
    case OrderActionTypes.ORDER_SET_DEFAULT_PERIOD:
      return {...state, defaultPeriod: action.payload}
    case OrderActionTypes.ORDER_SET_DEFAULT_CAR:
      return {...state, defaultCar: action.payload}
    case OrderActionTypes.ORDER_SET_DEFAULT_CITY:
      return {...state, defaultCity: action.payload}
    case OrderActionTypes.ORDER_SET_ORDERS_COUNT:
      return {...state, ordersCount: action.payload}
    default:
      return state
  }
}