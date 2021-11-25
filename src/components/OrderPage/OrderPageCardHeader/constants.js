import { Menu } from "antd";
import { OrderActionTypes } from "../../../store/types/order";
import { store } from "../../../store";

const dropdownPeriodOfTime = [
  { value: "За сегодня", text: "За сегодня" },
  { value: "За неделю", text: "За неделю" },
  { value: "За месяц", text: "За месяц" },
  { value: "За год", text: "За год" },
];

const renderedPeriodOfTime = dropdownPeriodOfTime.map((period) => {
  return (
    <Menu.Item id={period.value}>
      <button 
        className="dropdown-btn" 
        id={period.value} 
        value={period.value}
        onClick={() => {
          store.dispatch({type: OrderActionTypes.ORDER_SET_SELECTED_PERIOD, payload: period.value})
          store.dispatch({type: OrderActionTypes.ORDER_SET_DEFAULT_PERIOD, payload: period.text})
          }}
      >
        {period.text}
      </button>
    </Menu.Item>
  );
});

export const menuPeriod = (
  <Menu>
    {renderedPeriodOfTime}
  </Menu>
)

const dropdownCars = [
  { value: "61445b2a72b8f90bb63a4594", text: "Solaris" },
  { value: "6133465b9036850bb6e3eff7", text: "Skoda, RS" },
  { value: "600f5cc6ad015e0bb6997d42", text: "Tesla Model 3" },
  { value: "61228bab2aed9a0b9b850eab", text: "Renault" },
  { value: "600f4935ad015e0bb6997d30", text: "Nissan, Qashqai" },
  { value: "600f4a97ad015e0bb6997d37", text: "Nissan, X-Trail" },
  { value: "Любая", text: "Любая" },
];

const renderedCars = dropdownCars.map((car) => {
  return (
    <Menu.Item id={car.value}>
      <button 
        className="dropdown-btn" 
        id={car.value} 
        value={car.value}
        onClick={() => {
          store.dispatch({type: OrderActionTypes.ORDER_SET_SELECTED_CAR, payload: car.value})
          store.dispatch({type: OrderActionTypes.ORDER_SET_DEFAULT_CAR, payload: car.text})
        }}
      >
        {car.text}
      </button>
    </Menu.Item>
  );
});

export const menuCars = (
  <Menu>
    {renderedCars}
  </Menu>
)

const dropdownCities = [
  { value: "5ea07ad3099b810b946c6254", text: "Ульяновск" },
  { value: "5ea07c10099b810b946c627a", text: "Казань" },
  { value: "6011452fad015e0bb6997e1d", text: "Уфа" },
  { value: "612ba69d9036850bb6e3e7b9", text: "Омск" },
  { value: "60d6e4d32aed9a0b9b84fa82", text: "Краснодар" },
  { value: "614e46c818f5c2264119aeeb", text: "Самара" },
  { value: "60bc9a4c2aed9a0b9b82fcb3", text: "Москва" },
  { value: "6005b8f9ad015e0bb6997778", text: "Санкт-Петербург" },
];

const renderedCities = dropdownCities.map((city) => {
  return (
    <Menu.Item id={city.value}>
      <button 
        className="dropdown-btn" 
        id={city.value} 
        value={city.value}
        onClick={() => {
          store.dispatch({type: OrderActionTypes.ORDER_SET_SELECTED_CITY, payload: city.value})
          store.dispatch({type: OrderActionTypes.ORDER_SET_DEFAULT_CITY, payload: city.text})
          }}
      >
        {city.text}
      </button>
    </Menu.Item>
  );
});

export const menuCities = (
  <Menu>
    {renderedCities}
  </Menu>
)

const dropdownOrderStatuses = [
  { value: "5e26a191099b810b946c5d89", text: "Новые" },
  { value: "5e26a1f0099b810b946c5d8b", text: "Подтвержденные" },
  { value: "5e26a1f5099b810b946c5d8c", text: "Отмененные" },
  { value: "6114e4502aed9a0b9b850846", text: "Временные" },
];

const renderedOrderStatuses = dropdownOrderStatuses.map((orderStatus) => {
  return (
    <Menu.Item id={orderStatus.value}>
      <button 
        className="dropdown-btn" 
        id={orderStatus.value} 
        value={orderStatus.value}
        onClick={() => {
          store.dispatch({type: OrderActionTypes.ORDER_SET_SELECTED_ORDER_STATUS_ID, payload: orderStatus.value})
          store.dispatch({type: OrderActionTypes.ORDER_SET_DEFAULT_ORDER_STATUS, payload: orderStatus.text})
        }}
      >
        {orderStatus.text}
      </button>
    </Menu.Item>
  );
});

export const menuOrderStatuses = (
  <Menu>
    {renderedOrderStatuses}
  </Menu>
)