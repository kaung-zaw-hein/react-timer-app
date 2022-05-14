import React from "react";
const Button = ({ title, activeClass, _callback,disabled}) => {
  return (
    <button className={activeClass} onClick={_callback} disabled={disabled}>
      {title}
    </button>
  );
};
export default Button;
