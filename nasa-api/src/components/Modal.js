import React, {Component} from "react";
import styled, { keyframes } from "styled-components";
import {fadeIn} from "react-animations"
import {fadeOut} from "react-animations"

class Modal extends Component {
    constructor(props) {
        super(props)

    }

    render () {
        const fadeAnimationIn = keyframes`${fadeIn}`;
        const fadeAnimationOut = keyframes`${fadeOut}`;

        const MyModal = styled.div`
        text-align: left;
        animation: 0.5s ${fadeAnimationIn}
        `

        return (
            console.log(this.props),
            <div className="modal">
                <MyModal className="modalContent">
                    <div className="modalTitle">
                        <h2>Comparison between Mars and Earts's atmospheric pressure</h2>
                    </div>
                    <div className="modalBody">
                        <p>The atmosphere of Mars is much thinner than Earth's. The average surface pressure is less than 1% of the Earth's value.</p>
                        <ul>
                            <li>At sea level: 101,325Pa</li>
                            <li>New York City: 101,600Pa</li>
                            <li>Mexico City: 81,360Pa</li>
                            <li>La Paz, Bolivia: 73,775Pa</li>
                        </ul>
                        <button onClick={() => this.props.handleShow()}>Hide</button>
                    </div>
                </MyModal>
            </div>
        )
    }
}

export default Modal;