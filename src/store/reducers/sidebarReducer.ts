import { SidebarStepsState, sidebarStepsAction, SidebarActionTypes } from "../types/sidebarSteps";

const initialState: SidebarStepsState = {
 currentTabIndex: "1",
 tabIndexOne: "1",
 tabIndexTwo: "2",
 tabIndexThree: "3",
 tabIndexFour: "4",
 tabIndexFive: "5",
 tabIndexSix: "6",
 tabIndexSeven: "7",
}

export const sidebarReducer = (state = initialState, action: sidebarStepsAction): SidebarStepsState => {
  switch(action.type) {
    case SidebarActionTypes.SIDEBAR_SET_CURRENT_INDEX:
      return { ...state, currentTabIndex: action.payload }
    default:
      return state
  }
}