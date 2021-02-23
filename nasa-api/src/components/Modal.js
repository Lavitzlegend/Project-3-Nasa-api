import React, {Component} from "react"

class Modal extends Component {
    constructor(props) {
        super(props)

    }
    

    render () {
        return (
            <div className="modal">
                <div className="modalContent" onClick={e => e.stopPropagation()}>
                    <div className="modalHeader">
                        <div className="modalTitle">
                            <h1>Compare Mars atmospheric pressure with Earth's</h1>
                        </div>
                        <div className="modalBody">
                            <h3>The atmosphere of Mars is much thinner than Earth's. The average surface pressure is less than 1% of the Earth's value.</h3>
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