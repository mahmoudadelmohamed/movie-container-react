import React from 'react';
import imageFounder from '../../assets/images/notfound.png';
import { Link } from 'react-router-dom';
const Poster = ({ id, poster } ) => {
    return (
      <Link to={`/DetailesPage/${id}`}>
        <img
          src= {poster ? `https://image.tmdb.org/t/p/w780/${poster}` : imageFounder}
          alt="poster_img"
          className={`card-img-top card_img`} />
      </Link>
    );
}
export default Poster
