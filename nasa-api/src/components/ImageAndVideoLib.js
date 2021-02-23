import React, { Component } from 'react'
import axios from 'axios';

const nasaAPIKey = "dKN5xKkmeDWUEQEMaF13fpONtxkimP7vr0hPgjC7"

class ImageAndVideoLib extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageVideo: [],
            imageVideoMeta: [],
            apiDataLoaded: false
        }
    }

    componentDidMount = async () => {
        const imageVideoData = await axios.get(`https://images-api.nasa.gov/search?q=voyager&year_start=1980&year_end=1981`)
        const imageVideoDataMeta = await axios.get(`https://images-api.nasa.gov/asset/172_ISS-Slosh?api_key=${nasaAPIKey}`)
        console.log("test");
        console.log(imageVideoData);
        console.log(imageVideoDataMeta);
          this.setState({
            imageVideo: imageVideoData.data.collection.items,
            imageVideoMeta: imageVideoDataMeta.data.collection.items,
            apiDataLoaded: true
        })
      }

        
    render() {
        return(
            <div className="imgvidlib">
                <h1 className="compHeader">Images And Videos</h1>
                {this.state.apiDataLoaded && this.state.imageVideo.map(image => (
                    <div>
                    <img className="podPic" src={image.links[0].href}/>
                    <p className="podDesc"> {image.data[0].description}</p>
                    </div>
                ))}
                
            </div>
        )
    }
}

export default ImageAndVideoLib;