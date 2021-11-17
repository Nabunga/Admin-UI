import React from 'react';
import './Input.scss';
import { InputProps } from '../../types/components';

const Input: React.FC<InputProps> = ({ labelClassName, name, labelText, inputClassName, inputType, inputHandler, value }) => {
  
 
  return (
    <>
    <div className="input-wrapper">
      <label className={labelClassName} htmlFor={name}>
        {labelText}
      </label>
      <input className={inputClassName} type={inputType} name={name} value={value} onChange={inputHandler} />
    </div>
    </>
  )
}

export default Input;