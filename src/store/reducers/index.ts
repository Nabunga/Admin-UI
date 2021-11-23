import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { carSettingsReducer } from "./carSettingsReducer";
import { entitiesReducer } from "./entitiesReducer";
import { orderReducer } from "./orderReducer";
import { sidebarReducer } from "./sidebarReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  carSettings: carSettingsReducer,
  entities: entitiesReducer,
  order: orderReducer,
})

export type RootState = ReturnType<typeof rootReducer>