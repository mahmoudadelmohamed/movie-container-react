import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import DetailesPage from './pages/DetailesPage';
import PersonDetails from './pages/PersonDetails';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
     <>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/DetailesPage/:id" component={DetailesPage} />
        <Route exact path="/PersonDetails/:id" component={PersonDetails} />
        <Route exact component={Error} />
       </Switch>
       </>
    );
  }
}

export default App;
