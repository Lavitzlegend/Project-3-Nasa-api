import React, { Component } from "react";
import axios from 'axios';
import Modal from "./Modal"

class MarsRoverPhotos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            roverPhotos: "",
            dataLoaded: false,
            singlePic: "",
            show: false
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

      handleClik = (e) => {
          //console.log(e.target.id)
          const foundPic = this.state.roverPhotos.find(onePic => {
              return onePic.id == e.target.id
          });
          this.setState({
              singlePic: foundPic
          })
      }

    render () {
        //console.log(this.props)
        //console.log(this.state.roverPhotos)
        //console.log(this.state.singlePic)
        return (
            <div className="rover">
                <h1 className="compHeader">Mars Rover Photos</h1>
                <h2 className="compSubHeader">Rover: Curiosity</h2>

                
                {this.state.dataLoaded ?
                <div>
                    {this.state.singlePic ? 
                    <div className="marsRoverPic">
                        <h2 className="compSubHeader">Earth Date: {this.props.formatDate(this.state.singlePic.earth_date)}</h2>
                        <h3>Camera: {this.state.singlePic.camera.full_name}</h3>
                        <img src={this.state.singlePic.img_src} alt="Mars Rover Photo" className="roverPic"/>
                    </div>
                    : <p></p>}
                    <div className="marsRoverThumbnails">
                        {this.state.roverPhotos.map(onePhoto => (
                            <div>
                                <img src={onePhoto.img_src} alt="Mars Rover Photo" className="thumbnail" key={onePhoto.id} id={onePhoto.id}onClick={this.handleClik}/>
                            </div>
                        ))}
                    </div>
                </div>
            : <p>... Loading ...</p>}
            <a className="backToTop" href="#top">Back to top</a>    
            </div>
        )
    }
}

export default MarsRoverPhotos;
