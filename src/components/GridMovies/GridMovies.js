import React, { Component } from 'react';
import Title from '../Title/Title';
import Card from '../Card/Card';
import axios from 'axios';
import { Container } from "react-bootstrap";
class GridMovies extends Component {
   constructor(props) {
     super(props);
     this.state = {
       id: this.props.id,
       title: this.props.title,
       sub_title: this.props.sub_title,
       api_url: this.props.api_url,
       api_key: process.env.REACT_APP_API_SPACE,
       movies: []
     }
   }
   componentDidMount() {
     axios.get(`${this.state.api_url}${this.state.id}/recommendations?api_key=${this.state.api_key}`)
       .then(response => {
         this.setState({
           movies: [...response.data.results]
         })
       })
   }

  render() {
    const { title, sub_title } = this.state;
    const movies = this.state.movies.map((items, index) => {
      return (
        <Card
          key={items.id}
          poster={items.poster_path}
          title={items.title}
          vote={items.vote_average}
          id={items.id}
          loading={this.state.loading}
        />
    );
    })
    return (
      <Container className="pb-3" >
      <div className="pt-5">
        <Title title={ title } sub_title={ sub_title } />
      </div>
      <div className="row">
        { movies }
      </div>
      </Container>
    );
  }

}

export default GridMovies;
