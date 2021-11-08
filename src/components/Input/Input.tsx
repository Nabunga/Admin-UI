import React, { FC } from 'react';
import './Input.scss';
import { InputProps } from '../../interfaces/interfaces';

const Input: FC<InputProps> = ({ labelClassName, htmlFor, labelText, inputClassName, inputType, inputName }) => {
  return (
    <>
    <div className="input-wrapper">
      <label className={labelClassName} htmlFor={htmlFor}>
        {labelText}
      </label>
      <input className={inputClassName} type={inputType} name={inputName} />
    </div>
    </>
  )
}

export default Input;