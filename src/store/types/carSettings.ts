export interface CarSettingsState {
  priceMax: number;
  priceMin: number;
  name: string;
  imgBase64: string;
  imgParameters: any;
  description: string;
  categoryId: string;
  colors: any[];
  newColor: string;
  createdCarId: string;
  successAlertIsVisible: boolean;
}

export enum CarSettingsActionTypes {
  CAR_SETTINGS_SET_PRICE_MAX = 'CAR_SETTINGS_SET_PRICE_MAX',
  CAR_SETTINGS_SET_PRICE_MIN = 'CAR_SETTINGS_SET_PRICE_MIN',
  CAR_SETTINGS_SET_NAME = 'CAR_SETTINGS_SET_NAME',
  CAR_SETTINGS_SET_IMG_BASE64 = 'CAR_SETTINGS_SET_IMG_BASE64',
  CAR_SETTINGS_SET_IMG_PARAMETERS = 'CAR_SETTINGS_SET_IMG_PARAMETERS',
  CAR_SETTINGS_SET_DESCRIPTION = 'CAR_SETTINGS_SET_DESCRIPTION',
  CAR_SETTINGS_SET_CATEGORY_ID = 'CAR_SETTINGS_SET_CATEGORY_ID',
  CAR_SETTINGS_SET_COLORS = 'CAR_SETTINGS_SET_COLORS',
  CAR_SETTINGS_SET_NEW_COLOR = 'CAR_SETTINGS_SET_NEW_COLOR',
  CAR_SETTINGS_SET_CREATED_CAR_ID = 'CAR_SETTINGS_SET_CREATED_CAR_ID',
  CAR_SETTINGS_SET_SUCCESS_ALERT_IS_VISIBLE = 'CAR_SETTINGS_SET_SUCCESS_ALERT_IS_VISIBLE',
}

interface CarSettingsSetPriceMaxAction {
  type: CarSettingsActionTypes.CAR_SETTINGS_SET_PRICE_MAX;
  payload: number;
}
interface CarSettingsSetPriceMinAction {
  type: CarSettingsActionTypes.CAR_SETTINGS_SET_PRICE_MIN;
  payload: number;
}
interface CarSettingsSetNameAction {
  type: CarSettingsActionTypes.CAR_SETTINGS_SET_NAME;
  payload: string;
}
interface CarSettingsSetImgBase64Action {
  type: CarSettingsActionTypes.CAR_SETTINGS_SET_IMG_BASE64;
  payload: string;
}
interface CarSettingsSetDescriptionAction {
  type: CarSettingsActionTypes.CAR_SETTINGS_SET_DESCRIPTION;
  payload: string;
}
interface CarSettingsSetCategoryIdAction {
  type: CarSettingsActionTypes.CAR_SETTINGS_SET_CATEGORY_ID;
  payload: string;
}
interface CarSettingsSetColorsAction {
  type: CarSettingsActionTypes.CAR_SETTINGS_SET_COLORS;
  payload: any[];
}
interface CarSettingsSetNewColorAction {
  type: CarSettingsActionTypes.CAR_SETTINGS_SET_NEW_COLOR;
  payload: string;
}
interface CarSettingsSetImgParametersAction {
  type: CarSettingsActionTypes.CAR_SETTINGS_SET_IMG_PARAMETERS;
  payload: any;
}
interface CarSettingsSetCreatedCarIdAction {
  type: CarSettingsActionTypes.CAR_SETTINGS_SET_CREATED_CAR_ID;
  payload: string;
}
interface CarSettingsSetSuccessAlertIsVisibleAction {
  type: CarSettingsActionTypes.CAR_SETTINGS_SET_SUCCESS_ALERT_IS_VISIBLE;
  payload: boolean;
}

export type CarSettingsAction = CarSettingsSetPriceMaxAction | CarSettingsSetPriceMinAction | CarSettingsSetNameAction | CarSettingsSetImgBase64Action | CarSettingsSetDescriptionAction | CarSettingsSetCategoryIdAction | CarSettingsSetColorsAction | CarSettingsSetNewColorAction | CarSettingsSetImgParametersAction | CarSettingsSetCreatedCarIdAction | CarSettingsSetSuccessAlertIsVisibleAction