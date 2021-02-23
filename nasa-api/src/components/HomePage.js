import React from 'react';

const HomePage = (props) => {
    return(
        <div>
            <section className="section1">
                <h1 className="pageSubTitle">Mildly Interesting and Slightly Concerning</h1>
                <h1 className="pageSubTitle">Space App</h1>
            </section>
            <div className="container">
                <div className="item">
                    <h1 className="absolute">Did you know?</h1>
                    <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/pia24311-_01_approach_2000.jpg" alt="Mars Cover" className="marsCover"/>
                </div>

                <div className="itemPar">
                    <p className="darkContent"><b>Sol</b> (borrowed from the Latin word for sun) is a solar day on Mars; that is, a Mars-day. A sol is the apparent interval between two successive returns of the Sun to the same meridian (sundial time) as seen by an observer on Mars. It is one of several units for timekeeping on Mars.</p>
                    <p className="darkContent">A sol is slightly longer than an Earth day. It is approximately 24 hours, 39 minutes, 35 seconds long. A Martian year is approximately 668 sols, equivalent to approximately 687 Earth days.</p>
                    <a className="button" href="https://en.wikipedia.org/wiki/Sol_(day_on_Mars)" target="_blank">Learn More</a>
                </div>

                <div className="itemPar">
                    <p className="darkContent">The largest, most advanced rover NASA has sent to another world touched down on Mars Thursday February 18th, after a 203-day journey traversing 293 million miles (472 million kilometers). Confirmation of the successful touchdown was announced in mission control at NASA’s Jet Propulsion Laboratory in Southern California at 3:55 p.m. EST (12:55 p.m. PST).</p>
                    <a className="button" href="https://www.nasa.gov/press-release/touchdown-nasas-mars-perseverance-rover-safely-lands-on-red-planet" target="_blank">Learn More</a>
                </div>
                <div className="item">
                    <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nhq202102180017.jpg" alt="Perseverance Landing" className="marsCover"/>
                </div>
            </div>
            <section className="section2"></section>
            <footer>This is a footer
                <a href="https://www.nasa.gov" target="_blank">
                    <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="Nasa Logo" className="logo"/>
                </a>
            </footer>
        </div>
    )
}

export default HomePage;