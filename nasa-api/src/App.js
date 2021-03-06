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

  changeFormatDate = (xDate) => {
    const today= new Date(xDate)
    const month=parseInt(today.getMonth());
    const day=parseInt(today.getDate()+1);
    const year= parseInt(today.getFullYear());
    const date= new Date(year, month, day)
    return (date.toDateString())
}

  render() {
    return (
      <div className="App">
        <div className="topHeader">
          <header>
            <h1 className="pageTitle">MISC Space App</h1>
          </header>

          <nav>
            <Link to="/"> Home Page </Link>
            <Link to="/pictureoftheday"> Picture of the Day </Link>
            <Link to="/rover"> Mars Rover Photos </Link>
            <Link to="/insightweather"> Mars Weather </Link>
            <Link to="/imageandvideolib"> Image Library Archive </Link>
            <Link to="/neo"> Near Earth Objects </Link>
          </nav>
        </div>
      
        <Route exact path="/" render={() => (
          <HomePage />
        )} />

        <Route path="/pictureoftheday" render={() => (
          <PictureOfTheDay formatDate={this.changeFormatDate}/>
        )} />

        <Route path="/rover" render={() => (
          <MarsRoverPhotos formatDate={this.changeFormatDate}/>
        )} />

        <Route path="/insightweather" render={() => (
          <InSightWeather formatDate={this.changeFormatDate}/>
        )} />

        <Route path="/imageandvideolib" render={() => (
          <ImageAndVideoLib formatDate={this.changeFormatDate}/>
        )} />

        <Route path="/neo" render={() => (
          <NearEarthObjects />
        )} />
      </div>
    );
  }
}

export default App;