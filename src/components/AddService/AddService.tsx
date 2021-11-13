import React, {FC} from "react";
import "./AddService.scss";
import { AddServiceProps } from "../../types/components";

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
