import React from "react";

const Input = props => {
  return (
    <div>
      <input
        onChange={props.change}
        className={props.style}
        value={props.valueProp}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
