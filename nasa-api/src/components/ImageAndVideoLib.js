import React, { Component } from 'react'
import axios from 'axios';
import ModalMissionsVoy from "./ModalMissionsVoy"
import ModalMissionsGal from "./ModalMissionsGal"

const nasaAPIKey = "dKN5xKkmeDWUEQEMaF13fpONtxkimP7vr0hPgjC7"

class ImageAndVideoLib extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageVideoVoy: [],
            imageVideoGal: [],
            apiDataLoaded: false,
            showVoy: false
        }
    }

    componentDidMount = async () => {
        const imageVideoDataVoy = await axios.get(`https://images-api.nasa.gov/search?q=voyager&year_start=1980&year_end=1981`)
        const imageVideoDataGal = await axios.get(`https://images-api.nasa.gov/search?q=galileo&year_start=2001&year_end=2002`)
        console.log(imageVideoDataVoy.data.collection.items[0].data[0].date_created);
        
          this.setState({
            imageVideoVoy: imageVideoDataVoy.data.collection.items,
            imageVideoGal: imageVideoDataGal.data.collection.items,
            apiDataLoaded: true
        })
      }

      showModalVoy = () => {
        this.setState({
            showVoy: !this.state.showVoy,
        })
      }

      showModalGal = () => {
        this.setState({
            showGal: !this.state.showGal,
        })
      }

    render() {
        return(
            <div className="imgvidlib">
                <h1 className="compHeader">Image And Video Libary</h1>
                <div className="modalDisplay">
                    {this.state.showVoy ? <ModalMissionsVoy handleShow={this.showModalVoy}/> : <p></p>}
                    {this.state.showGal ? <ModalMissionsGal handleShow={this.showModalGal}/> : <p></p>}
                </div>
                <div className="container3">
                    <div className="imgvidlibMission">
                        <nav className="navMission">
                            <h2 className="compSubHeader">Voyager</h2>
                            <div className="modalShow">
                                <button className="missionButton voyager" onClick={() => this.showModalVoy()}>More about this Mission</button>
                            </div>
                        </nav>
                        {this.state.apiDataLoaded && this.state.imageVideoVoy.map(imageVoy => {
                            const imageVoyArray = imageVoy.data[0].date_created.split('')
                            const imageVoyNums = imageVoyArray.map(num => (parseInt(num)))
                            const imageVoyNumsArray = this.props.formatDate(`${imageVoyNums.slice(0, 1)}` + `${imageVoyNums.slice(1, 2)}` + `${imageVoyNums.slice(2, 3)}` + `${imageVoyNums.slice(3, 4)}-` + `${imageVoyNums.slice(5, 6)}` + `${imageVoyNums.slice(6, 7)}-` + `${imageVoyNums.slice(8, 9)}` + `${imageVoyNums.slice(9, 10)}`)
                            
                            return(
                                <div>
                                    <img className="voyPic" src={imageVoy.links[0].href}/>
                                    <p className="voyDesc"> {imageVoy.data[0].description}</p>
                                    <p className="voyDate"> {imageVoyNumsArray}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="imgvidlibMission">
                        <nav className="navMission">
                            <h2 className="compSubHeader">Galileo</h2>
                            <div className="modalShow">
                                    <button className="missionButton galileo" onClick={() => this.showModalGal()} >More about this Mission</button>
                            </div>
                        </nav>
                        {this.state.apiDataLoaded && this.state.imageVideoGal.map(imageGal => {
                            const imageGalArray = imageGal.data[0].date_created.split('')
                            const imageGalNums = imageGalArray.map(num => (parseInt(num)))
                            const imageGalNumsArray = this.props.formatDate(`${imageGalNums.slice(0, 1)}` + `${imageGalNums.slice(1, 2)}` + `${imageGalNums.slice(2, 3)}` + `${imageGalNums.slice(3, 4)}-` + `${imageGalNums.slice(5, 6)}` + `${imageGalNums.slice(6, 7)}-` + `${imageGalNums.slice(8, 9)}` + `${imageGalNums.slice(9, 10)}`)
                            
                            return(
                                <div>
                                    <img className="galPic" src={imageGal.links[0].href}/>
                                    <p className="galDesc"> {imageGal.data[0].description}</p>
                                    <p className="galDate"> {imageGalNumsArray}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <a className="backToTop" href="#top">Back to top</a>
            </div>
        )
    }
}

export default ImageAndVideoLib;