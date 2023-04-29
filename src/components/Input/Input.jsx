import React from 'react';
import InputWrapper from './Input-UI';

export const Input = ({
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  label,
}) => {
  return (
    <InputWrapper>
      {label && (
        <label className='label-input' htmlFor={id || name}>
          {label}
        </label>
      )}
      <input
        className='input'
        type={type}
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};
