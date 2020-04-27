import React from 'react';
import notFoundImage from '../../assets/images/not-found.png';
const Empty = ({ title, title_name }) => {
  return (
    <div className="text-center d-flex justify-content-center align-items-center h-100 flex-column">
      <h1 className="h1-2-light title_uppercase">Sorry!</h1>
      <h2 className="h2-light title_uppercase">{title} {title_name}</h2>
      <img src={notFoundImage} alt="notFoundImage" className="w-50 mb-4"/>
      {/*
        <Link to="/" style={{textDecoration: 'none'}}>
        <Buttons
          icon={faHome}
          order="1"
          content="Back"
          them="outline-primary"
          iconMarginLeft="l"
        />
        </Link>
        */ }
    </div>
  );
}
export default Empty;
