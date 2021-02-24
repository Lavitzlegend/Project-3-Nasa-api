import React, { Component } from 'react'
import axios from 'axios';

const nasaAPIKey = "dKN5xKkmeDWUEQEMaF13fpONtxkimP7vr0hPgjC7"

class ImageAndVideoLib extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageVideoVoy: [],
            imageVideoGal: [],
            apiDataLoaded: false
        }
    }

    componentDidMount = async () => {
        const imageVideoDataVoy = await axios.get(`https://images-api.nasa.gov/search?q=voyager&year_start=1980&year_end=1981`)
        const imageVideoDataGal = await axios.get(`https://images-api.nasa.gov/search?q=galileo&year_start=2001&year_end=2002`)
        console.log(imageVideoDataVoy);
        
          this.setState({
            imageVideoVoy: imageVideoDataVoy.data.collection.items,
            imageVideoGal: imageVideoDataGal.data.collection.items,
            apiDataLoaded: true
        })
      }
        
    render() {
        return(
            <div className="imgvidlib">
                <h1 className="compHeader">Images And Videos</h1>
                {this.state.apiDataLoaded && this.state.imageVideoVoy.map(imageVoy => (
                    <div>
                        <img className="voyPic" src={imageVoy.links[0].href}/>
                        <p className="voyDesc"> {imageVoy.data[0].description}</p>
                    </div>
                ))}

                    <div className="imgvidlibgal">
                        {this.state.apiDataLoaded && this.state.imageVideoGal.map(imageGal => (
                            <div>
                            <img className="galPic" src={imageGal.links[0].href}/>
                            <p className="galDesc"> {imageGal.data[0].description}</p>
                            </div>
                        ))}
                    </div>
            </div>


        )
    }
}

export default ImageAndVideoLib;