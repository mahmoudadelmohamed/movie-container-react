import React, { Component } from 'react';
import Card from '../components/Card/Card';
import Pagination from '../components/Pagination/Pagination';
import Search from '../components/Search/Search';
import Loading from '../components/Loading/Loading';
import Title from '../components/Title/Title';
class DefaultPage extends Component {
  state = {
    movies: [],
    api_key: process.env.REACT_APP_API_SPACE,
    api_url: `https://api.themoviedb.org/3/discover/movie`,
    search_resualt: `https://api.themoviedb.org/3/search/movie`,
    loading: false,
    total_results: 0,
    current_page: 1,
    search: ''
  }
  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  handleSubmit = (e) => {
    let search_value = this.state.search;
    this.getData(search_value);
    this.setState({
      search: ''
    })
    e.preventDefault();
  }
  getData = (search_value) => {
    if(search_value) {
    fetch(`${this.state.search_resualt}?api_key=${process.env.REACT_APP_API_SPACE}&query=${search_value}`)
      .then(responsre => responsre.json())
      .then(data => {
        this.setState({
           movies: [...data.results]
        })
      })
      .catch(error => {
        console.log(error);
      })
    }
    else {
    fetch(`${this.state.api_url}?api_key=${this.state.api_key}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: [...data.results],
          loading: true,
          total_results: data.total_results
        })
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
  componentDidMount(){
    this.getData();
  }
  nextPage = (pageNumber) => {
    fetch(`${this.state.api_url}?api_key=${this.state.api_key}&page=${pageNumber}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: [...data.results],
          current_page: pageNumber,
          loading: true
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
  handleScroll = () => {
  if(window.pageYOffset >= 1000) {
    window.scrollTo(0, 0)
  }
}
  render() {
   const numberPages = Math.floor(this.state.total_results / 20);
   const moviesDetailes = this.state.movies.map(items => {
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
  console.log(numberPages, this.state.total_results);
  return (
     <>
     <Search
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        search={this.state.search}
      />
     { !this.state.loading  ? <Loading className="grow"/> :
      <div className="container">

      <div className="row">
        { moviesDetailes }
      </div>
      { numberPages > 20 ? <Pagination
         pages={ numberPages }
         nextPage={this.nextPage}
         current={this.state.current_page}
         scrollTo={ this.handleScroll }
       /> : null }

    </div> }
    </>
    );
  }
}

export default DefaultPage;
