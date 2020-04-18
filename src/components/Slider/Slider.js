import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import imageFounder from '../../assets/images/profile-fail.png';
import "./Slider.scss";
class Sliding extends Component {

  render() {
    const { title, person } = this.props;
    const sliderRender = person.map(({ profile_path, id }) => {
      const background = {
        backgroundImage: `url(${
          profile_path
          ? `https://image.tmdb.org/t/p/w342${profile_path}`
          : `${imageFounder}`
        })`
      }
      return (
        <Link to={`/PersonDetails/${id}`} key={id}>
        <div className="slider__slide">
          <div className="slider__img" style={background}></div>
        </div>
        </Link>
      );
    })
    let settings = {

       speed: 400,
       slidesToShow: 9,
       slidesToScroll: 1,
       autoplay: true,
       responsive: [
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 5
     }
   },
   {
     breakpoint: 1440,
     settings: {
       slidesToShow: 8
     }
   },
   {
     breakpoint: 796,
     settings: {
       slidesToShow: 8
     }
   }
 ]
    };
    return (
      <div>
      <h2 className="title_mt  title_uppercase">{title}</h2>
          <Slider {...settings} className="slider mb-4">
            { sliderRender }
          </Slider>

      </div>
    );
  }
}
export default Sliding;
