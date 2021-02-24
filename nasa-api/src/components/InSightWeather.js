import React, { Component } from 'react'
import axios from 'axios';
import Modal from "./Modal"

const apiKey = "wfN54hzmlrCWgefGrpTSJJX3Vkrb10lzxziTmzCR"

class InSightWeather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherInfo: [],
            solKeys: [],
            apiDataLoaded: false,
            formatDate: '',
            show: false
        }
    }

    componentDidMount = async () => {
        const inSight = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`)
        //console.log(inSight);
        const solKeys = inSight.data.sol_keys.map(key => (this.state.solKeys.unshift(key)));
        //console.log(solKeys)
        //console.log(this.state.solKeys)
    
        this.setState({
            weatherInfo: inSight.data,
            apiDataLoaded: true,
        })
    }

    changeFormatDate = (xDate) => {
        //console.log(xDate)
        const today= new Date(xDate)
        const month=parseInt(today.getMonth());
        const day=parseInt(today.getDate()+1);
        const year= parseInt(today.getFullYear());
        const date= new Date(year, month, day)
        //console.log(date.toDateString())
        return (date.toDateString())
    }

    showModal = () => {
        const showModalSt= this.state.show;
        this.setState({
            show: !this.state.show
        })
        return showModalSt
      }

    render() {
        const renderWeatherInfo = this.state.weatherInfo;

        const renderSolKey1 = this.state.solKeys[0];
        const renderSolKey2 = this.state.solKeys[1];
        
        const renderWeatherKey1 = renderWeatherInfo[`${renderSolKey1}`]
        const Day1Array = this.state.apiDataLoaded && renderWeatherKey1.Last_UTC.split('')
        const Day1Nums = this.state.apiDataLoaded && Day1Array.map(num => (parseInt(num)))
        const Day1NumsArray = this.state.apiDataLoaded && this.changeFormatDate(`${Day1Nums.slice(0, 1)}` + `${Day1Nums.slice(1, 2)}` + `${Day1Nums.slice(2, 3)}` + `${Day1Nums.slice(3, 4)}-` + `${Day1Nums.slice(5, 6)}` + `${Day1Nums.slice(6, 7)}-` + `${Day1Nums.slice(8, 9)}` + `${Day1Nums.slice(9, 10)}`)

        const renderWeatherKey2 = renderWeatherInfo[`${renderSolKey2}`]
        const Day2Array = this.state.apiDataLoaded && renderWeatherKey2.Last_UTC.split('')   
        const Day2Nums = this.state.apiDataLoaded && Day2Array.map(num => (parseInt(num)))
        const Day2NumsArray = this.state.apiDataLoaded && this.changeFormatDate(`${Day2Nums.slice(0, 1)}` + `${Day2Nums.slice(1, 2)}` + `${Day2Nums.slice(2, 3)}` + `${Day2Nums.slice(3, 4)}-` + `${Day2Nums.slice(5, 6)}` + `${Day2Nums.slice(6, 7)}-` + `${Day2Nums.slice(8, 9)}` + `${Day2Nums.slice(9, 10)}`)
        
        return(
            <div className="marsWeather">
                <h1 className="compHeader">Mars Weather</h1>
                <div className="weather">
                <div>
                    {this.state.show ? <Modal modalState={this.state.show}/> : <p></p>}
                </div>
                    <div className="iframe">
                        <iframe src='https://mars.nasa.gov/layout/embed/image/mslweather/' width='680' height='527'  scrolling='no' frameBorder='0'></iframe>
                    </div>
                    <div className="weatherInfo">
                        <h2>Insight Rover:</h2><br></br>
                        <h2 className="compSubHeader">Most Recent Sol: {this.state.apiDataLoaded && renderSolKey1}</h2>
                        <h3 className="compSubHeader">Earth Date: {this.state.apiDataLoaded && this.props.formatDate(Day1NumsArray)}</h3>
                        <h4>Average Pressure (Pa): {this.state.apiDataLoaded && renderWeatherKey1.PRE.av}</h4>
                        <br></br>
                        <h2 className="compSubHeader">Sol: {this.state.apiDataLoaded && renderSolKey2}</h2>
                        <h3 className="compSubHeader">Earth Date: {this.state.apiDataLoaded && this.props.formatDate(Day2NumsArray)}</h3>
                        <h4>Average Pressure (Pa): {this.state.apiDataLoaded && renderWeatherKey2.PRE.av}</h4>
                        <div className="modalShow">
                            <button className="modalButton" onClick={() => this.showModal()}> What does this mean? </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InSightWeather;