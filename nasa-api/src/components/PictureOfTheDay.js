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
          this.setState({
          picture: pictureData.data
        })
      }
      
    render() {
        console.log(this.props)
        if (this.state.picture.media_type === "video") {
            return(
                <div className="pod">
                    <h1 className="compHeader">Picture of the Day</h1>
                    <h2 className="compSubHeader">{this.state.picture.title}</h2>
                    <h2 className="compSubHeader">Date: {this.props.formatDate(this.state.picture.date)}</h2>
                    <iframe className="podPic" src={this.state.picture.url} width='680' height='527'  scrolling='no' frameBorder='0'/>
                    <section className="podExplanation">
                        <p> {this.state.picture.explanation}</p>
                        <h3>Copyright: {this.state.picture.copyright}</h3>
                    </section>
                </div>
            )
        } else {
            return(
                <div className="pod">
                    <h1 className="compHeader">Picture of the Day</h1>
                    <h2 className="compSubHeader">{this.state.picture.title}</h2>
                    <h2 className="compSubHeader">Date: {this.props.formatDate(this.state.picture.date)}</h2>
                    <img className="podPic" src={this.state.picture.url} />
                    <section className="podExplanation">
                        <p> {this.state.picture.explanation}</p>
                    </section>
                </div>
            )
        }
    }
}

export default PictureOfTheDay;