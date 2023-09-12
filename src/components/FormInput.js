import React from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const { label, onChange, errorMessage, currState = {},  id, ...inputprops } = props;
  console.log(currState)
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputprops} onChange={onChange} />
      <span>{currState.isTouched && currState.error}</span>
    </div>
  );
};

export default FormInput;
