import React, { Component } from 'react'
import axios from 'axios';

const apiKey = "wfN54hzmlrCWgefGrpTSJJX3Vkrb10lzxziTmzCR"

class NearEarthObjects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            objects: [],
            apiDataLoaded: false,
        }
    }

    componentDidMount = async () => {
        const nearEarthObjects = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-02-19&end_date=2021-02-21&api_key=${apiKey}`)
        // console.log(nearEarthObjects.data.near_earth_objects);
       
        this.setState({
            objects: nearEarthObjects.data.near_earth_objects,
            apiDataLoaded: true,
        })
    }

    render() {      
        return(
            <div>
                <div className="neo">
                    <h1 className="compHeader">Near Earth Objects</h1>
                </div>
                <div className="container2">
                    <div className="item2">
                        <h2 className="compSubHeader">Date: Feb 21st 2021</h2>
                        <div>{this.state.apiDataLoaded ? this.state.objects['2021-02-21'].map((object, index) => (
                            <div className="neoBlock" key={`Neo ` + index}>
                                <h4>Object {index + 1}: {object.name}</h4>
                                <p className="neoPtop">Average Diameter: {((object.estimated_diameter.feet.estimated_diameter_min + object.estimated_diameter.feet.estimated_diameter_max)/2).toFixed(2)} ft</p>
                                <p className="neoPbottom">Run For Our Lives? = {`${object.is_potentially_hazardous_asteroid}`}</p>
                                <a className="button" href={object.nasa_jpl_url} >More Info</a>
                            </div>
                        )) : "Loading..."}</div>
                    </div>

                    <div className="item2">
                    <h2 className="compSubHeader">Date: Feb 20th 2021</h2>
                    <div>{this.state.apiDataLoaded ? this.state.objects['2021-02-20'].map((object, index) => (
                        <div key={`Neo ` + index} className="neoBlock">
                            <h4>Object {index + 1}: {object.name}</h4>
                            <p className="neoPtop">Average Diameter: {((object.estimated_diameter.feet.estimated_diameter_min + object.estimated_diameter.feet.estimated_diameter_max)/2).toFixed(2)} ft</p>
                            <p className="neoPbottom">Run For Our Lives? = {`${object.is_potentially_hazardous_asteroid}`}</p>
                            <a className="button" href={object.nasa_jpl_url} >More Info</a>
                        </div>
                    )) : "Also Loading..."}</div>
                    </div>

                    <div className="item2">
                    <h2 className="compSubHeader">Date: Feb 19th 2021</h2>
                    <div>{this.state.apiDataLoaded ? this.state.objects['2021-02-19'].map((object, index) => (
                        <div key={`Neo ` + index} className="neoBlock">
                            <h4>Object {index + 1}: {object.name}</h4>
                            <p className="neoPtop">Average Diameter: {((object.estimated_diameter.feet.estimated_diameter_min + object.estimated_diameter.feet.estimated_diameter_max)/2).toFixed(2)} ft</p>
                            <p className="neoPbottom">Run For Our Lives? = {`${object.is_potentially_hazardous_asteroid}`}</p>
                            <a className="button" href={object.nasa_jpl_url} >More Info</a>
                        </div>
                    )) : "So Much Loading..."}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NearEarthObjects;