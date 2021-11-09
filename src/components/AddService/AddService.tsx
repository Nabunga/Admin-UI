import React, {FC} from "react";
import "./AddService.scss";
import { AddServiceProps } from "../../interfaces/interfaces";

const AddService: FC<AddServiceProps> = ({ divClassName, name, labelClassName, content }) => {
  return (
    <div className={divClassName}>

      <input type="checkbox" name={name} id={name} />
      <label className={labelClassName} htmlFor={name}>
        {content}
      </label>

    </div>
  );
};

export default AddService;
