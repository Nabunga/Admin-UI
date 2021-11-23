import { EntitiesAction, EntitiesActionTypes, EntitiesState } from "../types/entities"

const initialState: EntitiesState = {
  category: [],
  allCars: [],
  selectedCategory: null,
  carsByCategory: [],
  selectedCategoryName: "Любая",
}

export const entitiesReducer = (state = initialState, action: EntitiesAction): EntitiesState => {
  switch(action.type) {
    case EntitiesActionTypes.ENTITIES_SET_CATEGORY:
      return {...state, category: action.payload}
    case EntitiesActionTypes.ENTITIES_SET_ALL_CARS:
      return {...state, allCars: action.payload}
    case EntitiesActionTypes.ENTITIES_SET_SELECTED_CATEGORY:
      return {...state, selectedCategory: action.payload}
    case EntitiesActionTypes.ENTITIES_SET_CARS_BY_CATEGORY:
      return {...state, carsByCategory: action.payload}
    case EntitiesActionTypes.ENTITIES_SET_SELECTED_CATEGORY_NAME:
      return {...state, selectedCategoryName: action.payload}
    default:
      return state
  }
}