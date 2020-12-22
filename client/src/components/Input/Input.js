import React, { useEffect, useRef } from "react";

const Input = ({
  ref,
  style,
  type,
  name,
  className,
  placeholder,
  value,
  onChange,
  onKeyDown,
}) => {
  const InputRef = useRef();
  useEffect(() => {
    InputRef.current.addEventListener("keypress", () => {});
  }, []);
  return (
    <div className={className}>
      <input
        ref={InputRef}
        style={style}
        className="auth-input"
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {/* <div className="validated"></div> */}
    </div>
  );
};

export default Input;
