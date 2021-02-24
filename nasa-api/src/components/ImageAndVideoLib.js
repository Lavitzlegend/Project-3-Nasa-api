import React, { Component } from 'react'
import axios from 'axios';
import ModalMissions from "./ModalMissions"

const nasaAPIKey = "dKN5xKkmeDWUEQEMaF13fpONtxkimP7vr0hPgjC7"

class ImageAndVideoLib extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageVideoVoy: [],
            imageVideoGal: [],
            apiDataLoaded: false,
            show: false
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
                        {this.state.apiDataLoaded && this.state.imageVideoVoy.map(imageVoy => (
                            <div>
                                <img className="voyPic" src={imageVoy.links[0].href}/>
                                <p className="voyDesc"> {imageVoy.data[0].description}</p>
                                <p className="voyDate"> {imageVoy.data[0].date_created}</p>
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
                                <p className="galDate"> {imageGal.data[0].date_created}</p>
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