import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import PictureOfTheDay from './components/PictureOfTheDay';
import HomePage from './components/HomePage';
import MarsRoverPhotos from "./components/MarsRoverPhotos"


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Nasa App</h1>
          <nav>
            <Link to="/pictureoftheday"> Picture of the Day </Link>
            <Link to="/rover"> Mars Rover Photos </Link>
            <Link to="/"> Home Page </Link>
          </nav>
        </header>
        
        <Route exact path="/" render={() => (
          <HomePage />
        )} />

        <Route path="/pictureoftheday" render={() => (
          <PictureOfTheDay />
        )} />

        <Route path="/rover" render={() => (
          <MarsRoverPhotos />
        )} />
      </div>
    );
  }
}

export default App;
