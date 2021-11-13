import {ReactChild, ReactNode } from "react";

export interface AddServiceProps {
  divClassName: string;
  name: string;
  labelClassName: string;
  content: string;
}

export interface MainButtonProps {
  btnText: string;
  btnClassName: string;
  clickHandle?: any;
}

export interface InputProps {
  labelClassName: string;
  name: string;
  labelText: string;
  inputClassName: string;
  inputType: string;
  inputHandler?: any;
  value: string;
}

export interface DropdownMenuProps {
  btnText: string;
}

export interface CardHeaderProps {
  rejectBtn?: React.Component | ReactNode,
  dropdownTextOne: string;
  dropdownTextTwo: string;
  dropdownTextThree: string;
  dropdownTextFour: string;
}