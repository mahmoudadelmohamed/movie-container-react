import React from 'react';
import Stars from "react-rating";
import { FaStar  } from 'react-icons/fa';
import { FaRegStar  } from 'react-icons/fa';
import "./Rating.scss";


const Rating = ({ rate, text, classname }) => {
  return (
      <div className={`${classname} ${text ? 'd-flex align-items-center' : '' }`}>
        <Stars
          emptySymbol = {
            <FaRegStar className="stars" />
          }
          fullSymbol = {
            <FaStar className="stars" />
          }
          initialRating={rate}
          readonly
         />
         { text ? <p className="m-0 small-bold primary-light ml-2" >{text}</p> : null }

      </div>
  );
}
export default Rating;
