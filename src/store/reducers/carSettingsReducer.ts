import { CarSettingsAction, CarSettingsActionTypes, CarSettingsState } from "../types/carSettings";

const initialState: CarSettingsState = {
  priceMax: 0,
  priceMin: 0,
  name: "",
  imgBase64: "",
  imgParameters: {},
  description: "",
  categoryId: "",
  colors: [],
  newColor: "",
  createdCarId: "",
  successAlertIsVisible: false,
}

export const carSettingsReducer = (state = initialState, action: CarSettingsAction): CarSettingsState => {
  switch(action.type) {
    case CarSettingsActionTypes.CAR_SETTINGS_SET_PRICE_MAX:
      return {...state, priceMax: action.payload}
    case CarSettingsActionTypes.CAR_SETTINGS_SET_PRICE_MIN:
      return {...state, priceMin: action.payload}
    case CarSettingsActionTypes.CAR_SETTINGS_SET_NAME:
      return {...state, name: action.payload}
    case CarSettingsActionTypes.CAR_SETTINGS_SET_IMG_BASE64:
      return {...state, imgBase64: action.payload}
    case CarSettingsActionTypes.CAR_SETTINGS_SET_IMG_PARAMETERS:
      return {...state, imgParameters: action.payload}
    case CarSettingsActionTypes.CAR_SETTINGS_SET_DESCRIPTION:
      return {...state, description: action.payload}
    case CarSettingsActionTypes.CAR_SETTINGS_SET_CATEGORY_ID:
      return {...state, categoryId: action.payload}
    case CarSettingsActionTypes.CAR_SETTINGS_SET_COLORS:
      return {...state, colors: action.payload}
    case CarSettingsActionTypes.CAR_SETTINGS_SET_NEW_COLOR:
      return {...state, newColor: action.payload}
    case CarSettingsActionTypes.CAR_SETTINGS_SET_CREATED_CAR_ID:
      return {...state, createdCarId: action.payload}
    case CarSettingsActionTypes.CAR_SETTINGS_SET_SUCCESS_ALERT_IS_VISIBLE:
      return {...state, successAlertIsVisible: action.payload}
    default:
      return state
  }
}