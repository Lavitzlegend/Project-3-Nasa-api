import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import PictureOfTheDay from './components/PictureOfTheDay';
import HomePage from './components/HomePage';
import MarsRoverPhotos from "./components/MarsRoverPhotos";
import InSightWeather from './components/InSightWeather';
import ImageAndVideoLib from './components/ImageAndVideoLib';
import NearEarthObjects from './components/NearEarthObjects';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="pageTitle">MISC Space App</h1>
          
        </header>
          <nav>
            <Link to="/"> Home Page </Link>
            <Link to="/pictureoftheday"> Picture of the Day </Link>
            <Link to="/rover"> Mars Rover Photos </Link>
            <Link to="/insightweather"> Mars Weather </Link>
            <Link to="/imageandvideolib"> Image And Video Library </Link>
            <Link to="/neo"> Near Earth Objects </Link>
          </nav>
      
        
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

        <Route path="/imageandvideolib" render={() => (
          <ImageAndVideoLib />
        )} />

        <Route path="/neo" render={() => (
          <NearEarthObjects />
        )} />
      </div>
    );
  }
}

export default App;