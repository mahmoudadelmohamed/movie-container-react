import React from 'react';
import { Button as Btn } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Buttons.scss";

const Button = ({ content, size, them, icon, className, handleClick, iconMarginLeft, iconMarginRight, order }) => {
  return (
 
   <Btn
    variant={them}
     size={size}
     className={className}
     onClick={() => (handleClick ? handleClick() : null)} >
      {icon && (
      <FontAwesomeIcon
        className={`fontAwesome m${iconMarginLeft}-2 m${iconMarginRight}-2 order-${order}`}
        icon={icon}
        size="1x"
        />
      )}
      { content }
    </Btn>
  );
}
export default Button;
