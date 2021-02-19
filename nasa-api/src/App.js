import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import PictureOfTheDay from './components/PictureOfTheDay';
import HomePage from './components/HomePage';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Link to="/pictureoftheday"> Picture of the Day </Link>
            <Link to="/"> Home Page </Link>
          </nav>
        </header>
        
        <Route exact path="/" render={() => (
          <HomePage />
        )} />

        <Route path="/pictureoftheday" render={() => (
          <PictureOfTheDay />
        )} />
      </div>
    );
  }
}

export default App;
