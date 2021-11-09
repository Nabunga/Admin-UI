import React, {FC} from "react";
import './MainButton.scss';
import { MainButtonProps } from "../../interfaces/interfaces";

const MainButton: FC<MainButtonProps> = ({ btnText, btnClassName }) => {
  return <button className={btnClassName}>{btnText}</button>
};

export default MainButton;