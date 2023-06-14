import React from "react";
import bgImage from '/images/bg2.jpg'
import Content from "../../components/shared-components/Content";
import CandidateImage from '/images/candidate.jpg'

function Candidates(props) {
  return (
    <Content className="subsection">
      <div className="overlay"></div>

      <div
        className="background"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="wrapper">
        <h1
          className="title"
          style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}
        >
          CANDIDATES
        </h1>

        <div
          className="post-123 page type-page status-publish has-post-thumbnail hentry category-solutions"
          id="post-123"
        >
          <div className="solutions">
            <div className="description">
              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                We have below openings currently. If you fit in one of those
                roles, please apply right away and we will revert to you with
                the shortest time possible.
              </p>

              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                <taledo-jobs
                  widget-key="RAPQVTABEHUSKSNR"
                  lang="en"
                ></taledo-jobs>
              </p>
            </div>

            <div className="gallery">
              <div className="gallery-item active">
                <img className="img-fluid" src={CandidateImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Candidates;
