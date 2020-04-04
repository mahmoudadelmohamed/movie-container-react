import React, { Component } from 'react';
import Poster from "../Poster/Poster";
import Rating from "../Rating/Rating";

import "./Card.scss";
import '../Rating/Rating.scss'

 class Card extends Component {
   render() {
     const { poster, title, vote, id, loading } = this.props;
     return (
       <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
       <div className="card text-center border-0 d-flex justify-content-center align-items-center">
         <div className="img-container">
           <Poster id={id} poster={poster} loading={loading} />
         </div>
         <div className="card-body">
           <div className="cart-text text-capitalize">
             <h2 className="h2-header card_title"> {title} </h2>
           </div>
           <span>
             <Rating rate={(vote / 10) * 5} />
           </span>
         </div>
       </div>
     </div>
    );
  }
}
export default Card;
