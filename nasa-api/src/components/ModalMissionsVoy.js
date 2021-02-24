import React, {Component} from "react";
import styled, { keyframes } from "styled-components";
import {fadeIn} from "react-animations"

class ModalMissionsVoy extends Component {
    constructor(props) {
        super(props)
        
    }

    render () {
        const fadeAnimationIn = keyframes`${fadeIn}`;

        const MyAnimation = styled.div`
        animation: 1s ${fadeAnimationIn}
        `
        return (
            console.log(this.props),
            <div className="modal">
                <MyAnimation className="modalContent">
                    <div className="modalTitle">
                        <h2>Voyager Mission Overview</h2>
                    </div>
                    <div className="modalBody">
                        <p>The twin Voyager 1 and 2 spacecraft are exploring where nothing from Earth has flown before. Continuing on their more-than-40-year journey since their 1977 launches, they each are much farther away from Earth and the sun than Pluto. n (VIM), will explore the outermost edge of the Sun's domain.</p>
                        <nav className="navModal">
                            <button className="modalButton" onClick={() => this.props.handleShow()}>Hide</button>
                            <a className="modalButton" href="https://voyager.jpl.nasa.gov/mission/" target="_blank">Even more!</a>
                        </nav>
                    </div>
                </MyAnimation>
            </div>
        )
    }
}

export default ModalMissionsVoy;