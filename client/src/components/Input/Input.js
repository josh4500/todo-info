import React, { useState, useRef, useEffect } from "react";
import valid from "./valid.png";
import invalid from "./invalid.png";

const Input = ({
  id,
  style,
  type,
  name,
  className,
  placeholder,
  value,
  onChange,
  onKeyDown,
}) => {
  const [validate, setValidate] = useState(null);
  const InputRef = useRef();
  useEffect(() => {
    if (InputRef.current.value) {
      if (InputRef.current.type === "email") {
        if (
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            InputRef.current.value.toLowerCase()
          )
        ) {
          setValidate(true);
        } else {
          setValidate(false);
        }
      }

      if (InputRef.current.name === "username") {
        if (/^[0-9a-zA-Z]+$/.test(InputRef.current.value)) setValidate(true);
        else {
          setValidate(false);
        }
      }
      if (InputRef.current.name === "password") {
        if (/^[0-9a-zA-Z]+$/.test(InputRef.current.value)) setValidate(true);
        else {
          setValidate(false);
        }
      }
      if (InputRef.current.name === "cPassword") {
        if (document.getElementById("sPass").value === InputRef.current.value)
          setValidate(true);
        else {
          setValidate(false);
        }
      }
    } else {
      setValidate(null);
    }
  }, [InputRef, value]);
  return (
    <div className={className}>
      <input
        id={id}
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
      {type !== "checkbox" ? (
        validate === null ? (
          ""
        ) : (
          <img className="validated" src={validate ? valid : invalid} alt="" />
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
