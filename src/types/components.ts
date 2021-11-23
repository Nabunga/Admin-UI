import {ReactChild, ReactNode } from "react";

export interface AddServiceProps {
  divClassName: string;
  name: string;
  labelClassName: string;
  content: string;
  checked?: boolean;
}

export interface MainButtonProps {
  btnText: string;
  btnClassName: string;
  clickHandle?: any;
}

export interface SidebarNavItemProps {
  navItemIcon: React.ReactChild | React.ReactNode;
  navItemText: string;
  id: string;
  onClick: any;
}

export interface InputProps {
  labelClassName: string;
  name: string;
  labelText: string;
  inputClassName: string;
  inputType: string;
  inputHandler?: any;
  value: string | number;
}

export interface DropdownMenuProps {
  btnText: string;
}

export interface CardHeaderProps {
  rejectBtn?: React.Component | ReactNode,
}