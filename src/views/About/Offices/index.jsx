import React from 'react';

function Offices(props) {
    return (
        <>
          <div
              className="background"
              style={{backgroundImage: "url('/images/bge2.jpg')"}}
            ></div>

            <h1
              className="title"
              style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)", lineHeight: "initial"}}
            >
              TELVAL Global Presence
            </h1>

            <p></p>

            <h3>
              <iframe
                height="720"
                src="https://www.google.com/maps/d/u/0/embed?mid=1QF-Hk_T3HR7flZ0dgb7-ssAMxjcjWTYO&amp;ehbc=2E312F"
                width="960"
              ></iframe>
            </h3>  
        </>
    );
}

export default Offices;