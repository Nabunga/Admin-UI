export interface OrderState {
  defaultOrderStatus: string;
  defaultPeriod: string;
  defaultCar: string;
  defaultCity: string;
  selectedOrderStatusId: string | null;
  selectedPeriod: string | null;
  selectedCar: string | null;
  selectedCity: string | null;
  currentPage: number;
  allOrders: any[];
  ordersCount: any;
}

export enum OrderActionTypes {
  ORDER_SET_DEFAULT_ORDER_STATUS = "ORDER_SET_DEFAULT_ORDER_STATUS",
  ORDER_SET_DEFAULT_PERIOD = "ORDER_SET_DEFAULT_PERIOD",
  ORDER_SET_DEFAULT_CAR = "ORDER_SET_DEFAULT_CAR",
  ORDER_SET_DEFAULT_CITY = "ORDER_SET_DEFAULT_CITY",
  ORDER_SET_SELECTED_ORDER_STATUS_ID = "ORDER_SET_SELECTED_ORDER_STATUS",
  ORDER_SET_ALL_ORDERS = "ORDER_SET_ALL_ORDERS",
  ORDER_SET_CURRENT_PAGE = "ORDER_SET_CURRENT_PAGE",
  ORDER_SET_SELECTED_PERIOD = "ORDER_SET_SELECTED_PERIOD",
  ORDER_SET_SELECTED_CAR = "ORDER_SET_SELECTED_CAR",
  ORDER_SET_SELECTED_CITY = "ORDER_SET_SELECTED_CITY",
  ORDER_SET_ORDERS_COUNT = "ORDER_SET_ORDERS_COUNT",
}

interface OrderSetSelectedOrderStatusIdAction {
  type: OrderActionTypes.ORDER_SET_SELECTED_ORDER_STATUS_ID;
  payload: string;
}

interface OrderSetDefaultOrderStatusAction {
  type: OrderActionTypes.ORDER_SET_DEFAULT_ORDER_STATUS;
  payload: string;
}

interface OrderSetAllOrdersAction {
  type: OrderActionTypes.ORDER_SET_ALL_ORDERS;
  payload: any[];
}

interface OrderSetCurrentPageAction {
  type: OrderActionTypes.ORDER_SET_CURRENT_PAGE;
  payload: number;
}

interface OrderSetSelectedPeriodAction {
  type: OrderActionTypes.ORDER_SET_SELECTED_PERIOD;
  payload: string;
}

interface OrderSetSelectedCarAction {
  type: OrderActionTypes.ORDER_SET_SELECTED_CAR;
  payload: string;
}

interface OrderSetSelectedCityAction {
  type: OrderActionTypes.ORDER_SET_SELECTED_CITY;
  payload: string;
}

interface OrderSetDefaultPeriodAction {
  type: OrderActionTypes.ORDER_SET_DEFAULT_PERIOD;
  payload: string;
}

interface OrderSetDefaultCarAction {
  type: OrderActionTypes.ORDER_SET_DEFAULT_CAR;
  payload: string;
}

interface OrderSetDefaultCityAction {
  type: OrderActionTypes.ORDER_SET_DEFAULT_CITY;
  payload: string;
}

interface OrderSetOrdersCountAction {
  type: OrderActionTypes.ORDER_SET_ORDERS_COUNT;
  payload: any;
}

export type OrderAction = OrderSetSelectedOrderStatusIdAction | OrderSetDefaultOrderStatusAction | OrderSetAllOrdersAction | OrderSetCurrentPageAction | OrderSetSelectedPeriodAction | OrderSetSelectedCarAction | OrderSetSelectedCityAction | OrderSetDefaultPeriodAction | OrderSetDefaultCarAction | OrderSetDefaultCityAction | OrderSetOrdersCountAction