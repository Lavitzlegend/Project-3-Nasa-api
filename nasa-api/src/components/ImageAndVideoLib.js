import React, { Component } from 'react'
import axios from 'axios';

const nasaAPIKey = "dKN5xKkmeDWUEQEMaF13fpONtxkimP7vr0hPgjC7"
console.log("test");
class ImageAndVideoLib extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageVideo: [],
        }
    }

    componentDidMount = async () => {
        const imageVideoData = await axios.get(`https://images-api.nasa.gov//asset/JSC-20160921-PH_JNB01_0002?api_key=${nasaAPIKey}`)
        console.log("test");
        console.log(imageVideoData);
          this.setState({
            imageVideo: imageVideoData.nasa_id
        })
      }

    render() {
        return(
            <div className="imgvidlib">
                <h1 className="compHeader">Images And Videos</h1>
                
            </div>
        )
    }
}

export default ImageAndVideoLib;