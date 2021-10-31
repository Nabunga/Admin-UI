import React, {FC} from "react";
import './MainButton.scss';

interface MainButtonProps {
  btnText: string,
  btnClassName: string,
}

const MainButton: FC<MainButtonProps> = ({ btnText, btnClassName }) => {
  return <button className={btnClassName}>{btnText}</button>
};

export default MainButton;