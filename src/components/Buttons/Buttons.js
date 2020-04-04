import React from 'react';
import { Button as Btn } from "react-bootstrap";
import "./Buttons.scss";

const Button = ({ icon, content, className, handleClick }) => {
  return (
    <Btn
      className={`${className}`} onClick={() => (handleClick ? handleClick() : null)} >
      { content }
    <span className={`btn_icon`}>{icon}</span>
    </Btn>
  );
}
export default Button;
