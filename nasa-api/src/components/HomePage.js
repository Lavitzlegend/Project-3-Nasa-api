import React from 'react';

const HomePage = (props) => {
    return(
        <div>
            <section className="section1">
                <h1>Mildly Interesting and Slightly Concerning Space App</h1>
            </section>
            <div className="container">
                    <div className="item">
                        <h1 className="absolute">Did you know?</h1>
                        <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/pia24311-_01_approach_2000.jpg" alt="mars Cover" className="marsCover"/>
                    </div>
                    <div className="itemPar">
                        <p className="lightContent"><b>Sol</b> (borrowed from the Latin word for sun) is a solar day on Mars; that is, a Mars-day. A sol is the apparent interval between two successive returns of the Sun to the same meridian (sundial time) as seen by an observer on Mars. It is one of several units for timekeeping on Mars.</p>
                        <br></br>
                        <p className="darkContent">A sol is slightly longer than an Earth day. It is approximately 24 hours, 39 minutes, 35 seconds long. A Martian year is approximately 668 sols, equivalent to approximately 687 Earth days.</p>
                        <a className="button" href="https://en.wikipedia.org/wiki/Sol_(day_on_Mars)">Learn More</a>
                    </div>
                <div className="item">
                    <h1>PENDING</h1> 
                </div>
            </div>
        </div>
    )
}

export default HomePage;