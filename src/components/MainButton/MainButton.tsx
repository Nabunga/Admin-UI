import React, {FC} from "react";
import './MainButton.scss';
import { MainButtonProps } from "../../types/components";
import { useDispatch } from "react-redux";

const MainButton: FC<MainButtonProps> = ({ btnText, btnClassName, clickHandle }) => {

  const dispatch = useDispatch()

  return <button className={btnClassName} onClick={e => dispatch(clickHandle)}>{btnText}</button>
};

export default MainButton;