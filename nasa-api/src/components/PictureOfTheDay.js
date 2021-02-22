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
            </div>
        )
    }
}

export default PictureOfTheDay;