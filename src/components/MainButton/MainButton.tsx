import React, {FC} from "react";
import './MainButton.scss';
import { MainButtonProps } from "../../types/components";

const MainButton: FC<MainButtonProps> = ({ btnText, btnClassName, clickHandle }) => {
  return <button className={btnClassName} onClick={clickHandle}>{btnText}</button>
};

export default MainButton;