import React, {Component} from "react"

class Modal extends Component {
    constructor(props) {
        super(props)

    }

    render () {
        console.log(this.props.modalState)
        return (
            <div className={`modal ${this.props.modalState ? `show`: ""}`}>
                <div className="modalContent">
                    <div className="modalHeader">
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
                        </div>
                        <div className="modalFooter">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;