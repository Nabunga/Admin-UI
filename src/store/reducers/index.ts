import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { carSettingsReducer } from "./carSettingsReducer";
import { sidebarReducer } from "./sidebarReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  carSettings: carSettingsReducer,
})

export type RootState = ReturnType<typeof rootReducer>