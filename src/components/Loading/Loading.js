import React from 'react';
import { Spinner } from 'react-bootstrap';
import "./Loading.scss";


const Loading = ({ className }) => {
  return (
    <div className="loading">
        <Spinner animation={ className } />
    </div>
  );
}
export default Loading;
