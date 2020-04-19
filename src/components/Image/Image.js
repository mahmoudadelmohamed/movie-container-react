import React from 'react';
import imageFounder from '../../assets/images/notfound.png';
import Loading from '../Loading/Loading';
import "./Image.scss";
const Image = ({ src, loading }) => {
  return(
    <div className="image-wrapper">
      { loading ?  <img src={src ? src : `${imageFounder}`} alt={src} className="image" /> : <Loading className="border"/> }
     </div>
  )
}
export default Image;
