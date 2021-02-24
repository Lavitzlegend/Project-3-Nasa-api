import React, { Component } from 'react'
import axios from 'axios';
import ModalMissions from "./ModalMissions"

const nasaAPIKey = "dKN5xKkmeDWUEQEMaF13fpONtxkimP7vr0hPgjC7"

class ImageAndVideoLib extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageVideo: [],
            imageVideoMeta: [],
            imageVideoGal: [],
            imageVideoGalMeta: [],
            apiDataLoaded: false,
            show: false
        }
    }

    componentDidMount = async () => {
        const imageVideoData = await axios.get(`https://images-api.nasa.gov/search?q=voyager&year_start=1980&year_end=1981`)
        const imageVideoDataMeta = await axios.get(`https://images-api.nasa.gov/asset/172_ISS-Slosh?api_key=${nasaAPIKey}`)
        const imageVideoDataGal = await axios.get(`https://images-api.nasa.gov/search?q=galileo&year_start=1977&year_end=2011`)
        const imageVideoDataGalMeta = await axios.get(`https://images-api.nasa.gov/asset/172_ISS-Slosh?api_key=${nasaAPIKey}`)
        //console.log("test");
        //console.log(imageVideoData);
        //console.log(imageVideoDataMeta);
          this.setState({
            imageVideo: imageVideoData.data.collection.items,
            imageVideoMeta: imageVideoDataMeta.data.collection.items,
            imageVideoGal: imageVideoDataGal.data.collection.items,
            imageVideoGalMeta: imageVideoDataGalMeta.data.collection.items,
            apiDataLoaded: true
        })
      }

      showModal = () => {
        const showModalSt= this.state.show;
        this.setState({
            show: !this.state.show
        })
        return showModalSt
      }

      handleClik = (e) => {
        console.log(e.target.classList[1])
        const target=e.target.classList[1];
        //console.log(target);
        return target
        };
   
    render() {
        return(
            <div className="imgvidlib">
                <h1 className="compHeader">Image And Video Libary</h1>
                <div className="modalDisplay">
                    {this.state.show ? <ModalMissions handleShow={this.showModal}/> : <p></p>}
                </div>
                <div className="container3">
                    <div className="imgvidlibMission">
                        <nav className="navMission">
                            <h2 className="compSubHeader">Voyager</h2>
                            <div className="modalShow">
                                <button className="missionButton voyager" onClick={() => this.showModal()} onClick={this.handleClik} >More about this Mission</button>
                            </div>
                        </nav>
                        {this.state.apiDataLoaded && this.state.imageVideo.map(image => (
                            <div>
                                <img className="voyPic" src={image.links[0].href}/>
                                <p className="voyDesc"> {image.data[0].description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="imgvidlibMission">
                        <nav className="navMission">
                            <h2 className="compSubHeader">Galileo</h2>
                            <div className="modalShow">
                                    <button className="missionButton galileo" onClick={() => this.showModal()} >More about this Mission</button>
                            </div>
                        </nav>
                        {this.state.apiDataLoaded && this.state.imageVideoGal.map(imageGal => (
                            <div>
                                <img className="galPic" src={imageGal.links[0].href}/>
                                <p className="galDesc"> {imageGal.data[0].description}</p>
                            </div>
                     ))}
                    </div>
                </div>
                <a className="backToTop" href="#top">Back to top</a>
            </div>
        )
    }
}

export default ImageAndVideoLib;