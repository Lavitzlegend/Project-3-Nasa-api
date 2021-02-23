import React, { Component } from 'react'
import axios from 'axios';

const nasaAPIKey = "dKN5xKkmeDWUEQEMaF13fpONtxkimP7vr0hPgjC7"

class ImageAndVideoLib extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageVideo: [],
            apiDataLoaded: false
        }
    }

    componentDidMount = async () => {
        const imageVideoData = await axios.get(`https://images-api.nasa.gov/search?q=voyager&media_type=image&year_start=1980&year_end=1981`)
        console.log("test");
        console.log(imageVideoData);
          this.setState({
            imageVideo: imageVideoData.data.collection.items,
            apiDataLoaded: true
        })
      }

        
    render() {
        return(
            <div className="imgvidlib">
                <h1 className="compHeader">Images And Videos</h1>
                {this.state.apiDataLoaded && this.state.imageVideo.map(image => (
                    <img className="podPic" src={image.links[0].href}/>))
                }
                
            </div>
        )
    }
}

export default ImageAndVideoLib;