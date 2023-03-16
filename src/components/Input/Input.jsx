import React from 'react';

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
    <div>
      {label && <label htmlFor={id || name}>{label}:</label>}
      <input
        type={type}
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
