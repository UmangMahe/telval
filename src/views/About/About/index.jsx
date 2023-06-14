import React from "react";
import bgImage from '/images/bge1.jpg'

function AboutSection(props) {
  return (
    <>
      <div
        className="background"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="wrapper">
        <h1
          className="title"
          style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
        >
          About
        </h1>

        <div className="team-member fadeIn animated" id="11">
          <h2 className="name" style={{ marginLeft: "20px" }}>
            <kbd>Vision_</kbd>
          </h2>

          <div
            className="post-42 page type-page status-publish has-post-thumbnail hentry category-company"
            id="post-42"
          >
            <div className="about">
              <div className="description">
                <p
                  style={{
                    opacity: 1,
                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                    marginLeft: "40px",
                  }}
                >
                  To become the most profitable and most preferred employer to
                  the IT and Telecoms professionals by becoming the most
                  preferred service provider to its clients. TELVAL&rsquo;s
                  vision is to commit itself to the ever-connecting world
                  actively and contribute to its rapid evolution.
                </p>

                <h2
                  style={{
                    opacity: 1,
                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                    marginLeft: "40px",
                    fontSize: 'revert'
                  }}
                >
                  <kbd>The Journey</kbd>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div
          className="post-42 page type-page status-publish has-post-thumbnail hentry category-company"
          id="post-42"
        >
          <div className="about">
            <div className="description">
              <p
                style={{
                  opacity: 1,
                  transform: "matrix(1, 0, 0, 1, 0, 0)",
                  marginLeft: "40px",
                }}
              >
                With presence in 10 countries including three in Europe, TELVAL
                is ever solidifying its position in the skills, knowledge and
                client-network while expanding its footprints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
