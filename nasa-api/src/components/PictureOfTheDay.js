import React, { Component } from 'react'
import axios from 'axios';

const nasaAPIKey = "dKN5xKkmeDWUEQEMaF13fpONtxkimP7vr0hPgjC7"

class PictureOfTheDay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            picture: [],
        }
    }

    componentDidMount = async () => {
        const pictureData = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${nasaAPIKey}`)
        console.log(pictureData.data);
          this.setState({
          picture: pictureData.data
        })
      }

    render() {
        return(
            <div>
                Picture
                <img className="image" src={this.state.picture.url}/>
                <p className="explanation"> {this.state.picture.explanation}</p>
                <h2 className="date">{this.state.picture.date}</h2>
                <h1 className="copyright"> {this.state.picture.copyright}</h1>
            </div>
        )
    }
}

export default PictureOfTheDay;