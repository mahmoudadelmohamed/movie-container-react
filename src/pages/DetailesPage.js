import React, { Component } from 'react';
import Image from '../components/Image/Image';
import imageFounder from '../assets/images/notfound.png';
import Rating from '../components/Rating/Rating';
import Title from '../components/Title/Title';
import GenresList from '../components/GenresList/GenresList';
import Paragraph from '../components/Paragraph/Paragraph';
import Buttons from '../components/Buttons/Buttons';
import Slider from '../components/Slider/Slider';
import { faArrowLeft, faPlay, faLink } from "@fortawesome/free-solid-svg-icons";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import ModalVideo from 'react-modal-video'
require('dotenv').config();

class DetailesPage extends Component {
  constructor(props) {
    super(props)
      this.state = {
        id: this.props.match.params.id,
        api_url: `https://api.themoviedb.org/3/movie/`,
        total_results: 0,
        current_page: 1,
        currentSearch: '',
        movie_detailes: {},
        movie_trailer: '',
        isVideoOpen: false,
        person_slider: []
      }
  }
 openModal = () => {
   this.setState({
     iscVideoOpen: true
   })
 }
  componentDidMount() {
    fetch(`${this.state.api_url}${this.state.id}?api_key=${process.env.REACT_APP_API_SPACE}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movie_detailes: {...data}
        })
      })
      .catch(error => {
        console.log(error);
      })
      fetch(`${this.state.api_url}${this.state.id}${`/videos`}?api_key=${process.env.REACT_APP_API_SPACE}`)
        .then(response => response.json())
        .then(data => {
          let trailer_id = data.results[0].key;
          this.setState({
            movie_trailer: trailer_id
          })
        })
        .catch(error => {
          console.log(error);
        })
        fetch(`${this.state.api_url}${this.state.id}/credits?api_key=${process.env.REACT_APP_API_SPACE}`)
          .then(response => response.json())
          .then(data => {
            let slider_people = data.cast;
            this.setState({
              person_slider: slider_people
            })

          })
          .catch(error => {
            console.log(error);
          })
  }
  render() {
  const {
    poster_path,
    vote_average,
    title,
    tagline,
    spoken_languages,
    runtime,
    release_date,
    genres,
    overview,
    homepage,
    imdb_id
  } = this.state.movie_detailes;

  return (
     <Container fluid className="mt-5">

        <Row className="d-flex align-items-center">
          <Col lg={5} sm={12}>
          <Image
            src={poster_path ? `https://image.tmdb.org/t/p/w780${poster_path}` : `${imageFounder}`}
            loading={poster_path}
          />
           </Col>

           <Col lg={5} sm={12}>
            <Title size="lg" title={title} sub_title={tagline} />
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-lg-20 mb-xl-40 mb-xs-40 mt-3">
              <Rating rate={(vote_average /10) * 5} text={vote_average} classname="mr-xs-20 mb-xs-10"/>
              <h3 className="spcial_language">
                {spoken_languages && spoken_languages.length > 0 && spoken_languages[0].name} / {' '}
                {runtime} min. / {release_date && release_date.split('-')[0]}
              </h3>
            </div>
            {genres && genres.length > 0 && (
            <GenresList
            list={genres}
            title="The Genres"
            className="mb-xs-40" />
          )}
            {overview && <Paragraph title="The Synopsis" text={overview} className="mb-xs-40" />}
            { this.state.person_slider && <Slider title="the cast" person={this.state.person_slider} /> }
            <div className="d-flex justify-content-between align-items-start">
              { homepage &&
                <a
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration: 'none'}}>
                <Buttons
                // faArrowLeft, faPlay, faLink
                  order="1"
                  icon={faLink}
                  content="Website"
                  them="outline-primary"
                  iconMarginLeft="l"

                  />
              </a> }
              <a
                href={`https://www.imdb.com/title/${imdb_id}`}
                target="_blank" rel="noopener noreferrer"
                style={{textDecoration: 'none'}}>
                <Buttons
                 order="1"
                 iconMarginLeft="l"
                 icon={faImdb}
                 content="IMDB"
                 them="outline-primary"
                 />
              </a>
               {this.state.movie_trailer &&
                 <Buttons
                  order="1"
                  icon={faPlay}
                  content="Trailer"
                  them="outline-primary"
                  iconMarginLeft="l"
                  handleClick={ this.openModal }
                 />
               }
              <Buttons
                icon={faArrowLeft}
                content="Back"
                them="outline-primary"
                iconMarginLeft="r"
              />
            </div>
           </Col>

        </Row>
      <ModalVideo
        channel='youtube'
        isOpen={this.state.iscVideoOpen}
        videoId={this.state.movie_trailer}
        onClose={() => this.setState({iscVideoOpen: false})}
       />

     </Container>

    );
  }

}

export default DetailesPage;
