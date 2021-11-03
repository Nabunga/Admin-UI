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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Logo className="sidebar__logo"/>
        <h1 className="sidebar__header-text">Need for car</h1>
      </div>
      <nav className="sidebar__items">
        <SidebarNavItem navItemIcon={<BlogIcon className="item-icon_disabled" />} navItemText="Карточка автомобиля"/>
        <SidebarNavItem navItemIcon={<BlogPostsIcon className="item-icon_disabled" />} navItemText="Список авто"/>
        <SidebarNavItem navItemIcon={<AddNewPostIcon className="item-icon_disabled" />} navItemText="Заказы"/>
        <SidebarNavItem navItemIcon={<OverviewIcon className="item-icon_disabled" />} navItemText="Menu 4"/>
        <SidebarNavItem navItemIcon={<FormsIcon className="item-icon_disabled" />} navItemText="Menu 5"/>
        <SidebarNavItem navItemIcon={<PersonIcon className="item-icon_disabled" />} navItemText="Menu 6"/>
        <SidebarNavItem navItemIcon={<ErrorIcon className="item-icon_disabled" />} navItemText="Menu 7"/>
      </nav>
    </div>
  )
};

export default Sidebar;