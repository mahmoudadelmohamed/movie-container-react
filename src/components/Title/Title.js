import React from 'react';
import "./Title.scss";
const Title = ({ size, title, sub_title }) => {
  return (
    <>
   { size === 'lg' ? (
      <div className="mb-xs-40 title_container">
           <h1 className="h1-2-light title_uppercase">{title}</h1>
           <h2 className="h2-light title_uppercase">{sub_title}</h2>
       </div>
     ):
     <div className="mb-xs-20 title_container">
          <h1 className="h1-light  title_uppercase">{title}</h1>
          <h2 className="title_uppercase">{sub_title}</h2>
      </div>
    }

    </>
  );
}
export default Title;
