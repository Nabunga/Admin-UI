import React from "react";
import './Sidebar.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as BlogIcon } from '../../assets/BlogIcon.svg';
import { ReactComponent as BlogPostsIcon } from '../../assets/BlogPostsIcon.svg';
import { ReactComponent as AddNewPostIcon } from '../../assets/AddNewPostIcon.svg';
import { ReactComponent as OverviewIcon } from '../../assets/OverviewIcon.svg';
import { ReactComponent as FormsIcon } from '../../assets/FormsIcon.svg';
import { ReactComponent as PersonIcon } from '../../assets/PersonIcon.svg';
import { ReactComponent as ErrorIcon } from '../../assets/ErrorIcon.svg';
import SidebarNavItem from "./SidebarNavItem/SidebarNavItem";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { SidebarActionTypes } from "../../store/types/sidebarSteps";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {

  const dispatch = useDispatch();

  const { tabIndexOne, tabIndexTwo, tabIndexThree, tabIndexFour, tabIndexFive, tabIndexSix, tabIndexSeven, currentTabIndex } = useTypedSelector(state => state.sidebar)

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Logo className="sidebar__logo" />
        <h1 className="sidebar__header-text">Need for car</h1>
      </div>
      <nav className="sidebar__items">
        <NavLink to="/car-setting">
          <SidebarNavItem
            navItemIcon={<BlogIcon className={currentTabIndex === "1" ? "item-icon_enabled" : "item-icon_disabled"} />}
            navItemText="Карточка автомобиля"
            id={tabIndexOne}
            onClick={() => dispatch({ type: SidebarActionTypes.SIDEBAR_SET_CURRENT_INDEX, payload: tabIndexOne })}
          />
        </NavLink>
        <NavLink to="/entities">
          <SidebarNavItem
            navItemIcon={<BlogPostsIcon className={currentTabIndex === "2" ? "item-icon_enabled" : "item-icon_disabled"} />}
            navItemText="Список авто"
            id={tabIndexTwo}
            onClick={() => dispatch({ type: SidebarActionTypes.SIDEBAR_SET_CURRENT_INDEX, payload: tabIndexTwo })}
          />
        </NavLink>
        <NavLink to="/order-page">
          <SidebarNavItem
            navItemIcon={<AddNewPostIcon className={currentTabIndex === "3" ? "item-icon_enabled" : "item-icon_disabled"} />}
            navItemText="Заказы"
            id={tabIndexThree}
            onClick={() => dispatch({ type: SidebarActionTypes.SIDEBAR_SET_CURRENT_INDEX, payload: tabIndexThree })}
          />
        </NavLink>
        <NavLink to="/error">
          <SidebarNavItem
            navItemIcon={<OverviewIcon className={currentTabIndex === "4" ? "item-icon_enabled" : "item-icon_disabled"} />}
            navItemText="Menu 4"
            id={tabIndexFour}
            onClick={() => dispatch({ type: SidebarActionTypes.SIDEBAR_SET_CURRENT_INDEX, payload: tabIndexFour })}
          />
        </NavLink>
        <NavLink to="/error">
          <SidebarNavItem
            navItemIcon={<FormsIcon className={currentTabIndex === "5" ? "item-icon_enabled" : "item-icon_disabled"} />}
            navItemText="Menu 5"
            id={tabIndexFive}
            onClick={() => dispatch({ type: SidebarActionTypes.SIDEBAR_SET_CURRENT_INDEX, payload: tabIndexFive })}
          />
        </NavLink>
        <NavLink to="/error">
          <SidebarNavItem
            navItemIcon={<PersonIcon className={currentTabIndex === "6" ? "item-icon_enabled" : "item-icon_disabled"} />}
            navItemText="Menu 6"
            id={tabIndexSix}
            onClick={() => dispatch({ type: SidebarActionTypes.SIDEBAR_SET_CURRENT_INDEX, payload: tabIndexSix })}
          />
        </NavLink>
        <NavLink to="/error">
          <SidebarNavItem
            navItemIcon={<ErrorIcon className={currentTabIndex === "7" ? "item-icon_enabled" : "item-icon_disabled"} />}
            navItemText="Menu 7"
            id={tabIndexSeven}
            onClick={() => dispatch({ type: SidebarActionTypes.SIDEBAR_SET_CURRENT_INDEX, payload: tabIndexSeven })}
          />
        </NavLink>
      </nav>
    </div>
  )
};

export default Sidebar;