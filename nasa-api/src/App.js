import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import PictureOfTheDay from './components/PictureOfTheDay';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        App is displaying
        <PictureOfTheDay />
      </div>
    );
  }
}

export default App;
