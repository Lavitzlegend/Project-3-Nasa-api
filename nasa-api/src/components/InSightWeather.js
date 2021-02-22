import React, { Component } from 'react'
import axios from 'axios';

const apiKey = "wfN54hzmlrCWgefGrpTSJJX3Vkrb10lzxziTmzCR"

class InSightWeather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherInfo: [],
            solKeys: [],
            apiDataLoaded: false,
        }
    }

    componentDidMount = async () => {
        const inSight = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`)
        console.log(inSight);
        const solKeys = inSight.data.sol_keys.map(key => (this.state.solKeys.unshift(key)));
        console.log(solKeys)
        console.log(this.state.solKeys)
       
        
        this.setState({
            weatherInfo: inSight.data,
            apiDataLoaded: true,
        })
    }

    render() {
        const renderWeatherInfo = this.state.weatherInfo;

        const renderSolKey1 = this.state.solKeys[0];
        const renderSolKey2 = this.state.solKeys[1];
        
        const renderWeatherKey1 = renderWeatherInfo[`${renderSolKey1}`]
        const Day1Array = this.state.apiDataLoaded && renderWeatherKey1.Last_UTC.split('')
        const renderWeatherKey2 = renderWeatherInfo[`${renderSolKey2}`]
        const Day2Array = this.state.apiDataLoaded && renderWeatherKey2.Last_UTC.split('')   
        
        return(
            <div>
                <h2>Most Recent Sol: {this.state.apiDataLoaded && renderSolKey1}</h2>
                <h3>Earth Date: {this.state.apiDataLoaded && Day1Array.slice(0, 10)}</h3>
                <h4>Average Pressure (Pa) - {this.state.apiDataLoaded && renderWeatherKey1.PRE.av}</h4>
                <h4>Minimum Pressure (Pa) - {this.state.apiDataLoaded && renderWeatherKey1.PRE.mn}</h4>
                <h4>Maximum Pressure (Pa) - {this.state.apiDataLoaded && renderWeatherKey1.PRE.mx}</h4><br></br>
                <h2>Sol: {this.state.apiDataLoaded && renderSolKey2}</h2>
                <h3>Earth Date: {this.state.apiDataLoaded && Day2Array.slice(0, 10)}</h3>
                <h4>Average Pressure (Pa) - {this.state.apiDataLoaded && renderWeatherKey2.PRE.av}</h4>
                <h4>Minimum Pressure (Pa) - {this.state.apiDataLoaded && renderWeatherKey2.PRE.mn}</h4>
                <h4>Maximum Pressure (Pa) - {this.state.apiDataLoaded && renderWeatherKey2.PRE.mx}</h4>
                <iframe src='https://mars.nasa.gov/layout/embed/image/mslweather/' width='800' height='530'  scrolling='no' frameborder='0'></iframe>
            </div>
        )
    }
}

export default InSightWeather;