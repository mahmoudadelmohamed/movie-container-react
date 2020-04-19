import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import imageFounder from '../assets/images/notfound.png';
import Image from '../components/Image/Image';
import Title from '../components/Title/Title';
import Paragraph from '../components/Paragraph/Paragraph';
import Buttons from '../components/Buttons/Buttons';
import GridMovies from '../components/GridMovies/GridMovies';
import { faHome, faLink } from "@fortawesome/free-solid-svg-icons";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';
// https://api.themoviedb.org/3/person/287?api_key=ea9e6ac8643082244c38fae131ea1769
class PersonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      api_url: `https://api.themoviedb.org/3/`,
      api_key: process.env.REACT_APP_API_SPACE,
      detailes: {}
    }
  }
  componentDidMount() {
    axios.get(`${this.state.api_url}person/${this.state.id}?api_key=${this.state.api_key}`)
      .then(response => {
       this.setState({
          detailes: response.data
       })
        // console.log(response.data);
      })
  }

  render() {
    const { birthday, name, profile_path, biography, imdb_id, homepage} = this.state.detailes;

     console.log(this.state.detailes);

   console.log(homepage);
    return (
      <Container fluid className="mt-5">
        <Row className="d-flex align-items-center">
          <Col lg={5} sm={12}>
          <Image
            src={profile_path ? `https://image.tmdb.org/t/p/w780${profile_path}` : `${imageFounder}`}
            loading={profile_path}
          />
          </Col>
          <Col lg={5} sm={12}>
            <Title size="lg" title={name} sub_title={birthday} />
            { biography && (
                <Paragraph title="The biography" text={biography} className="mb-lg-40 mt-lg-40" />
            ) }
            <div className="d-flex justify-content-between align-items-start">
            { homepage &&
              <a
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration: 'none'}}>
              <Buttons
                order="1"
                icon={faLink}
                content="Website"
                them="outline-primary"
                iconMarginLeft="l"
                />
            </a> }
              <a
              href={`https://www.imdb.com/name/${imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration: 'none'}}>
              <Buttons
               order="1"
               iconMarginLeft="l"
               icon={faImdb}
               content="IMDB"
               them="outline-primary"
               />
              </a>
              <Link to="/" style={{textDecoration: 'none'}}>
              <Buttons
                icon={faHome}
                content="Back"
                them="outline-pages"
                iconMarginRight="r"
              />
              </Link>
            </div>
          </Col>
        </Row>
        <GridMovies
          title="also enters in"
          sub_title="movies"
          actor_id={ this.state.id }
          api_url={ this.state.api_url }
          api_key={ this.state.api_key }
        />
      </Container>
    );
  }
}
/*
<Container fluid>
  <Row className="d-flex align-items-center">
  <Col lg={5} sm={12}>
    <Image
      src={profile_path ? `https://image.tmdb.org/t/p/w780${profile_path}` : `${imageFounder}`}
    />
   </Col>
  </Row>
</Container>
*/
export default PersonDetails;
