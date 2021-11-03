import React, { FC } from 'react';
import './SidebarNavItem.scss';

interface SidebarNavItemProps {
  navItemIcon: React.ReactChild | React.ReactNode,
  navItemText: string
}

const SidebarNavItem: FC<SidebarNavItemProps> = ({ navItemIcon, navItemText }) => {
  return (
    <div className="sidebar-item">
      {navItemIcon}
      <p className="sidebar-item__text">{navItemText}</p>
    </div>
  )
};

export default SidebarNavItem;