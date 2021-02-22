import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import PictureOfTheDay from './components/PictureOfTheDay';
import HomePage from './components/HomePage';
import MarsRoverPhotos from "./components/MarsRoverPhotos";
import InSightWeather from './components/InSightWeather';
import NearEarthObjects from './components/NearEarthObjects';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header>
          <section>
          <h1>Nasa App</h1>
          <a href="https://www.nasa.gov" target="_blank">
            <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="Nasa Logo" className="logo"/>
          </a>
          </section>
          <nav>
            <Link to="/"> Home Page </Link>
            <Link to="/pictureoftheday"> Picture of the Day </Link>
            <Link to="/rover"> Mars Rover Photos </Link>
            <Link to="/insightweather"> Mars Weather </Link>
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

        <Route path="/insightweather" render={() => (
          <InSightWeather />
        )} />

        <Route path="/neo" render={() => (
          <NearEarthObjects />
        )} />
      </div>
    );
  }
}

export default App;
