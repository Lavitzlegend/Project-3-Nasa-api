import React, { Component } from "react";
import axios from 'axios';

class MarsRoverPhotos extends Component {
    constructor() {
        super()

        this.state = {
            roverPhotos: "",
            dataLoaded: false
        }
    }

    componentDidMount = async () => {
        const apiTest = await axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=eIMGP8aHIJwOWGztzhMAeZpVyHKseN8jMSKD6Px6");
        //console.log(apiTest.data.latest_photos)
        this.setState ({
            roverPhotos: apiTest.data.latest_photos,
            dataLoaded: true
        })
      }

    render () {
        //console.log(this.state.roverPhotos)
        return (
            
            <div className="rover">
                <h1>Mars Rover Photos</h1>
                <h2>Rover: Curiosity</h2>
                {this.state.dataLoaded ?
                <div>
                    {this.state.roverPhotos.map(onePhoto => (
                        <div className="marsRoverPic">
                            <img src={onePhoto.img_src} alt="Mars Rover Photo" className="roverPic"/>
                            <p>Camera: {onePhoto.camera.full_name}</p>
                            <p>Date: {onePhoto.earth_date}</p>
                            <p>Image ID: {onePhoto.id}</p>
                        </div>
                    ))}
                </div>
            : <p>... Loading ...</p>}
            </div>
        )
    }
}

export default MarsRoverPhotos;
