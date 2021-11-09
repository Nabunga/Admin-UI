import { ReactNode } from "react";

export interface AddServiceProps {
  divClassName: string,
  name: string,
  labelClassName: string,
  content: string
}

export interface MainButtonProps {
  btnText: string,
  btnClassName: string,
}

export interface InputProps {
  labelClassName: string,
  htmlFor: string,
  labelText: string,
  inputClassName: string,
  inputType: string,
  inputName: string
}

export interface DropdownMenuProps {
  btnText: string
}

export interface CardHeaderProps {
  rejectBtn?: React.Component | ReactNode,
  dropdownTextOne: string,
  dropdownTextTwo: string,
  dropdownTextThree: string,
  dropdownTextFour: string,
}