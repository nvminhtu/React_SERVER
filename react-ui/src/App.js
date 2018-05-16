import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import LandingPage from './components/LandingPage';
import ConnectedPage from './components/ConnectedPage';
import ErrorPage from './components/ErrorPage';


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/connected" component={ConnectedPage}/>
            <Route exact path="/error" component={ErrorPage}/>
          </div>
        </Router>
    );
  }
}

export default App;
