import React, { useEffect, useRef } from "react";

const Input = ({
  ref,
  type,
  name,
  className,
  placeholder,
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
        className="auth-input"
        name={name}
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
