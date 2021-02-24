import React, {Component} from "react";
import styled, { keyframes } from "styled-components";
import {fadeIn} from "react-animations"

class ModalMissionsGal extends Component {
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
                <MyAnimation className="modalContentMission">
                    <div className="modalTitle">
                        <h2>Galileo Mission Overview</h2>
                    </div>
                    <div className="modalBody">
                        <p>Galileo orbited Jupiter for almost eight years (1996-2003), and made close passes by all its major moons. Its camera and nine other instruments sent back reports that allowed scientists to determine, among other things, that Jupiter’s icy moon Europa probably has a subsurface ocean with more water than the total amount found on Earth.</p>
                        <nav className="navModalMission">
                            <button className="modalButton" onClick={() => this.props.handleShow()}>Hide</button>
                            <a className="modalButtonMission" href="https://solarsystem.nasa.gov/missions/galileo/overview/" target="_blank">Even more!</a>
                        </nav>
                    </div>
                </MyAnimation>
            </div>
        )
    }
}

export default ModalMissionsGal;