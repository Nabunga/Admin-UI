export interface EntitiesState {
  category: any[];
  allCars: any[];
  carsCount: number | undefined;
  selectedCategory: string | null;
  selectedCategoryName: string;
  carsByCategory: any[];
}

export enum EntitiesActionTypes {
  ENTITIES_SET_CATEGORY = "ENTITIES_SET_CATEGORY",
  ENTITIES_SET_ALL_CARS = "ENTITIES_SET_ALL_CARS",
  ENTITIES_SET_SELECTED_CATEGORY = "ENTITIES_SET_SELECTED_CATEGORY",
  ENTITIES_SET_CARS_BY_CATEGORY = "ENTITIES_SET_CARS_BY_CATEGORY",
  ENTITIES_SET_SELECTED_CATEGORY_NAME = "ENTITIES_SET_SELECTED_CATEGORY_NAME",
  ENTITIES_SET_CARS_COUNT = "ENTITIES_SET_CARS_COUNT",
}

interface EntitiesSetCategoryAction {
  type: EntitiesActionTypes.ENTITIES_SET_CATEGORY;
  payload: any[];
}

interface EntitiesSetAllCarsAction {
  type: EntitiesActionTypes.ENTITIES_SET_ALL_CARS;
  payload: any[];
}

interface EntitiesSetSelectedCategoryAction {
  type: EntitiesActionTypes.ENTITIES_SET_SELECTED_CATEGORY;
  payload: string;
}

interface EntitiesSetCarsByCategoryAction {
  type: EntitiesActionTypes.ENTITIES_SET_CARS_BY_CATEGORY;
  payload: any[];
}

interface EntitiesSetSelectedCategoryNameAction {
  type: EntitiesActionTypes.ENTITIES_SET_SELECTED_CATEGORY_NAME;
  payload: string;
}

interface EntitiesSetCarsCountAction {
  type: EntitiesActionTypes.ENTITIES_SET_CARS_COUNT;
  payload: number;
}

export type EntitiesAction = EntitiesSetCategoryAction | EntitiesSetAllCarsAction | EntitiesSetSelectedCategoryAction | EntitiesSetCarsByCategoryAction | EntitiesSetSelectedCategoryNameAction | EntitiesSetCarsCountAction