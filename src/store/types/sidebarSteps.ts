export interface SidebarStepsState {
  currentTabIndex: string;
  tabIndexOne: string;
  tabIndexTwo: string;
  tabIndexThree: string;
  tabIndexFour: string;
  tabIndexFive: string;
  tabIndexSix: string;
  tabIndexSeven: string;
}

export enum SidebarActionTypes {
  SIDEBAR_SET_CURRENT_INDEX = "SIDEBAR_SET_CURRENT_INDEX",
}

interface sidebarSetCurrentIndexAction {
  type: SidebarActionTypes.SIDEBAR_SET_CURRENT_INDEX;
  payload: string;
}

export type sidebarStepsAction = sidebarSetCurrentIndexAction