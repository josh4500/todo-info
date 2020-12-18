import React from "react";
//TODO
const Input = ({ type, name, className, placeholder, onChange }) => {
  return (
    <input
      className={className}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
