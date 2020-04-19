import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import Card from '../components/Card/Card';
import Search from '../components/Search/Search';
import Loading from '../components/Loading/Loading';
import Title from '../components/Title/Title';
import Logo from '../components/Logo/Logo';
import List from '../components/List/List';
import Pagination from '../components/Pagination/Pagination';
import { Container, Col, Row } from 'react-bootstrap';
import { faPoll, faHeart, faCalendar } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
require('dotenv').config();
// console.log();
const list = [
  { name: 'Popular', api: 'popular', id: 1 , icon: faHeart},
  { name: 'Tod Rated', api: 'top_rated', id: 2, icon: faPoll },
  { name: 'Upcoming', api: 'upcoming', id: 3 ,icon: faCalendar },
]
class DefaultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discover: list,
      movies: [],
      api_url: `https://api.themoviedb.org/3/discover/movie`,
      search_resualt: `https://api.themoviedb.org/3/search/movie`,
      constant_api: `https://api.themoviedb.org/3/movie/`,
      genres: [],
      genres_url: `https://api.themoviedb.org/3/genre/movie/list`,
      api_key: process.env.REACT_APP_API_SPACE,
      loading: false,
      search: '',
      isMenuOpen: null,
      title_name: 'Popular',
      sub_title: 'movies',
      active_id: 1,
      total_results: 0,
      current_page: 1,
      handle_paginantion: ``,
      isMobile: null
      }
      window.addEventListener('resize', this.changeMobile)
  }
  // This to handle side menu when it open or close based on screen size
  changeMobile = () => {
   window.matchMedia("(max-width: 1024px)").matches
   ? this.setState({ isMobile: true })
   : this.setState({ isMobile: false })
  }
  // This to handle scrolling top when choosing one of the genres from movie sidemen
  scrollTo = () => {
    return window.scrollTo(0, 0);
  }
  // Handling change with the search feild
  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  // Handling submit with the search field
  handleSubmit = (e) => {
    let search_value = this.state.search;
    this.getData(search_value);
    this.setState({
      search: ''
    })
    e.preventDefault();
  }
  // Handling next and previous button in Search, genres and default page
  handlePagination = (pageNumber) => {
    axios.get(`${this.state.handle_paginantion}&page=${pageNumber}`)
      .then(response => {
        this.setState({
            movies: [...response.data.results],
            current_page: pageNumber
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
  handleClick = (id, api, name) => {
    if(id > 3) {
      // make a request based on genres by using the id of genre
      let url = `${this.state.api_url}?api_key=${this.state.api_key}&with_genres=${id}`;
      axios.get(url)
      .then(response => {
        this.setState({
          movies: [...response.data.results],
          title_name: name,
          sub_title: 'movies',
          active_id: id,
          handle_paginantion: response.config.url,
          total_results: response.data.total_results,
          current_page: 1
        })
      })
    }
    else {
        // make a request to fetching data of { popular, top_rated, upcoming }
        let url = `${this.state.constant_api}${api}?api_key=${this.state.api_key}`;
       axios.get(url)
       .then(response => {
         this.setState({
           movies: [...response.data.results],
           title_name: name,
            sub_title: 'movies',
            active_id: id,
            handle_paginantion: response.config.url,
            total_results: response.data.total_results,
            current_page: 1
         })
       })
    }
  }
 // make a request to fetching data of search end point
  getData = (search_value) => {
    if(search_value) {
      let url = `${this.state.search_resualt}?api_key=${process.env.REACT_APP_API_SPACE}&query=${search_value}`;
      axios.get(url)
        .then(response => {
          this.setState({
             movies: [...response.data.results],
             title_name: search_value,
             sub_title: 'results',
             handle_paginantion: response.config.url,
             total_results: response.data.total_results
          })
        })
    }
    else {
      // make a request to fetching data which show in the default page
      let url = `${this.state.api_url}?api_key=${process.env.REACT_APP_API_SPACE}`;
      axios.get(url)
        .then(response => {
          this.setState({
            movies: [...response.data.results],
            loading: true,
            handle_paginantion: response.config.url,
            total_results: response.data.total_results
          })
        })
    }
  }
  componentDidMount(){
    // make a request to fetching data genres which show in the sidemenu
    axios.get(`${this.state.genres_url}?api_key=${this.state.api_key}`)
      .then(response => {
        this.setState({
          genres: [...response.data.genres]
        })
    })
    this.getData();
  }
  renderMenu = () => {
    return (
      <div className="side-menu pb-3">
      <Logo />
      <List
        list={this.state.discover}
        handleClick={this.handleClick}
        title="discover"
        scrollTo={this.scrollTo}
        active_id={this.state.active_id}
      />
      <List
        list={this.state.genres}
        handleClick={this.handleClick}
        title="genres"
        scrollTo={this.scrollTo}
        active_id={this.state.active_id}
      />
      </div>
    );
  }
  isMenuOpen = ({isOpened}) => {
    this.setState({ isMenuOpen: isOpened })
  }
checkDisaple = (type) => {
   const { isMenuOpen } = this.state;
   if(type) {
     return (
       <Menu onStateChange={this.isMenuOpen} isOpen={isMenuOpen}>
           {this.renderMenu()}
        </Menu>
     );
   }
   return this.renderMenu();
}
  render() {
   const number_pages = Math.floor(this.state.total_results / 20);
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
  return (
     <>
      <Container fluid>
        <Row>
        <Col sm={2}>
        { this.checkDisaple(this.state.isMobile) }
        </Col>
          <Col lg={10} sm={12}>
          <Search
             handleChange={this.handleChange}
             handleSubmit={this.handleSubmit}
             search={this.state.search}
           />
          { !this.state.loading  ? <Loading className="grow"/> :
           <div className="container">
           <Title
            size="sm"
            title={this.state.title_name}
            sub_title={this.state.sub_title}
          />
           <div className="row pb-3">
               { moviesDetailes }
           </div>
           <div className="row pb-3 d-flex">
             <Pagination
              pages={number_pages}
              nextPage={this.handlePagination}
              current_page={this.state.current_page}
              scrollTo={ this.scrollTo }
               />
           </div>
         </div> }
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default DefaultPage;
