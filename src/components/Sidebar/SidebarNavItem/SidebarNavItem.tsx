import React, { FC } from 'react';
import './SidebarNavItem.scss';
import { SidebarNavItemProps } from '../../../types/components';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ navItemIcon, navItemText, id, onClick }) => {
  
  const {currentTabIndex} = useTypedSelector(state => state.sidebar)
  
  return (
    <div id={id} className={currentTabIndex === id ? "sidebar-item sidebar-item_active" : "sidebar-item"} onClick={onClick}>
      {navItemIcon}
      <p id={id} className={currentTabIndex === id ? "sidebar-item__text sidebar-item__text_active" : "sidebar-item__text"}>{navItemText}</p>
    </div>
  )
};

export default SidebarNavItem;