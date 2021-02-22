import React from 'react';

const HomePage = (props) => {
    return(
        <div>
            <section className="section1">
                <h1>Mildly Interesting and Slightly Concerning Space App</h1>
            </section>

            <section className="section2">
                <h1>Did you know?</h1>
                <p>Sol (borrowed from the Latin word for sun) is a solar day on Mars; that is, a Mars-day. A sol is the apparent interval between two successive returns of the Sun to the same meridian (sundial time) as seen by an observer on Mars. It is one of several units for timekeeping on Mars.</p>
                <p>A sol is slightly longer than an Earth day. It is approximately 24 hours, 39 minutes, 35 seconds long. A Martian year is approximately 668 sols, equivalent to approximately 687 Earth days.</p>
                <button name="more">Learn More
                    <a href="https://en.wikipedia.org/wiki/Sol_(day_on_Mars)"></a>
                </button>
            </section>
        </div>
    )
}

export default HomePage;