import React from 'react';
import bgImage from '/images/teambg.jpg'

function Team(props) {
    return (
        <>
             <div
              className="background"
              style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            <div className="wrapper">
              <h1
                className="title"
                style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}
              >
                Team TELVAL
              </h1>

              <div
                className="post-42 page type-page status-publish has-post-thumbnail hentry category-company"
                id="post-42"
              >
                <div className="about">
                  <div className="description">
                    <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                      TELVAL management team is known for their professionalism,
                      hard work, deep experience and skills in IT-ICT, Core,
                      BSS, and Network Roll-outs. Their contribution in many EU,
                      Africa and India is well-established. Team TELVAL enjoys a
                      reputation within the Telecom industry for Competence,
                      Commitment, and Efficiency. With almost twenty years&#39;
                      experience hands-on in a multitude of domains in the
                      wireless Industry our teams are known for commitment, has
                      the spirit to win, are consultative and easily understood.
                      The team possesses a business acumen complemented with a
                      vast set of techno-managerial experience in their
                      respective fields.
                    </p>

                    <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                      Our resourceful, creative, and innovative approach has
                      consistently been successful in accomplishing our
                      client&rsquo;s goals and meets their targets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}

export default Team;