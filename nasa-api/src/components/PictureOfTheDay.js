import React, { Component } from 'react'
import axios from 'axios';

class PictureOfTheDay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            picture: [],
        }
    }

    render() {
        return(
            <div>
                Picture
            </div>
        )
    }
}

export default PictureOfTheDay;