import React from 'react';
import "./Title.scss";
const Title = ({ size, title, sub_title }) => {
  return (
    <div className="mb-xs-20">
      <div>
        <h1 className="h1-2-light title_uppercase">{title}</h1>
        <h2 className="h2-light title_uppercase">{sub_title}</h2>
      </div>
    </div>
  );
}
export default Title;
