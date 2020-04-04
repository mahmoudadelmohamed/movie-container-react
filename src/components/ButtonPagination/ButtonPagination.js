import React from "react";
import { Button as Btn } from "react-bootstrap";
import "./ButtonPagination.scss";

const ButtonPagination = ({
  current,
  handleClick,
  pages,
  content,
  leftIcon,
  rightIcon,
  className,
  scrollTo
}) => {
  return (
    <>
      <div
        className={
          current > 1
            ? "d-flex align-items-center justify-content-between"
            : "d-flex align-items-center justify-content-end"
        }
      >
        {current > 1 ? (
          <Btn
            onClick={() => {
              handleClick(current - 1);
              scrollTo();
            }}
            className={className}
          >
            <span>{leftIcon}</span>
            <span className="button_left">{content}</span>
            <span>{current - 1}</span>
          </Btn>
        ) : (
          ""
        )}
        {current < pages + 1 ? (
          <Btn
            onClick={() => {
              handleClick(current + 1);
              scrollTo();
            }}
            className={className}
          >
            <span>{content}</span>
            <span className="button_right">{current + 1}</span>
            <span>{rightIcon}</span>
          </Btn>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default ButtonPagination;
/*
<div className={current > 1 ?
 'd-flex align-items-center justify-content-between' :
 'd-flex align-items-center justify-content-end'}>
 { current > 1 ? <Btn onClick={() =>handleClick(current - 1)} className={className}>
   <span>{leftIcon}</span>
   <span className="button_left">{content}</span>
   <span>{current - 1}</span>
 </Btn> : '' }
 { current < pages + 1 ? <Btn onClick={() => handleClick(current + 1)} className={className}>
   <span>{content}</span>
   <span className="button_right">{current + 1}</span>
   <span>{rightIcon}</span>
 </Btn> : '' }
    </div>
*/
