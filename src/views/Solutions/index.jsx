import React from "react";
import Content from "../../components/shared-components/Content";
import SolutionsImage from '/images/solutions.jpg'
import bgImage from '/images/bg2.jpg'


function Solutions(props) {
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
          Solutions
        </h1>
        <div
          className="post-123 page type-page status-publish has-post-thumbnail hentry category-solutions"
          id="post-123"
        >
          <h2>IP Monitoring and Alert Solution</h2>

          <div className="solutions">
            <div className="description">
              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                &quot;Constant network chatter from smartphones and their
                applications are overwhelming network cores. On normal days they
                can handle that traffic, but even a small glitch throws
                everything out of whack&quot; (GigaCom)
              </p>

              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                &quot;Through 2015, 80% of outages impacting mission-critical
                services will be caused by people and process issues, and more
                than 50% of those outages will be caused by
                change/configuration/release integration and hand-off
                issues.&quot; (Gartner)
              </p>

              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                Telval has built an innovative solution which essentially aims
                to keep the MPBN and MPLS caused network outages at lowest.
                Generally, for any failure in MPBN ring, it takes 3 to 5 hours
                to just detect the point of failure. Our solution reduces this
                duration to minimal; it eliminates the human diagnosis to spot
                such a failure, helping operators to reduce the revenue losses
                due to such failures.
              </p>
            </div>

            <h2>Mobile Money Reporting</h2>

            <div className="description">
              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                &quot;Constant network chatter from smartphones and their
                applications are overwhelming network cores. On normal days they
                can handle that traffic, but even a small glitch throws
                everything out of whack&quot; (GigaCom)
              </p>

              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                &quot;Through 2015, 80% of outages impacting mission-critical
                services will be caused by people and process issues, and more
                than 50% of those outages will be caused by
                change/configuration/release integration and hand-off
                issues.&quot; (Gartner)
              </p>

              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                Telval has built an innovative solution which essentially aims
                to keep the MPBN and MPLS caused network outages at lowest.
                Generally, for any failure in MPBN ring, it takes 3 to 5 hours
                to just detect the point of failure. Our solution reduces this
                duration to minimal; it eliminates the human diagnosis to spot
                such a failure, helping operators to reduce the revenue losses
                due to such failures.
              </p>
            </div>

            <div className="gallery">
              <div className="gallery-item active">
                <span style={{fontSize: "28px"}}>
                  <img className="img-fluid" src={SolutionsImage} />
                </span>
              </div>

              <div className="gallery-item active">&nbsp; &nbsp; &nbsp;&nbsp;</div>

              <div className="gallery-item active"></div>
            </div>
          </div>
        </div>
        &nbsp;
      </div>
    </Content>
  );
}

export default Solutions;
