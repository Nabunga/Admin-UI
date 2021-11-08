import React, { FC } from 'react';
import './Input.scss';

interface InputProps {
  labelClassName: string,
  htmlFor: string,
  labelText: string,
  inputClassName: string,
  inputType: string,
  inputName: string
}

const Input: FC<InputProps> = ({ labelClassName, htmlFor, labelText, inputClassName, inputType, inputName }) => {
  return (
    <>
      <label className={labelClassName} htmlFor={htmlFor}>
        {labelText}
      </label>
      <input className={inputClassName} type={inputType} name={inputName} />
    </>
  )
}

export default Input;