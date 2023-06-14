import React from "react";
import Content from "../../components/shared-components/Content";
import bgImage from '/images/bge1.jpg'

function Services(props) {
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
          OUR SERVICES
        </h1>

        <div
          className="post-123 page type-page status-publish has-post-thumbnail hentry category-solutions"
          id="post-123"
        >
          <div
            className="post-42 page type-page status-publish has-post-thumbnail hentry category-company"
            id="post-42"
          >
            <div className="about">
              <div className="description">
                <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                  Telval&rsquo;s strengths lie in infrastructure solutions like
                  Core, Transmission, RF, and Access. Its rapidly building
                  capabilities in BSS/OSS domain are at par with the industry,
                  while LTE skill development is already underway.
                </p>

                <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                  Telval&rsquo;s portfolio includes services ranging from the
                  access network to BSS/OSS domain; end to end with isolated
                  integrations services are offered in all Telecoms domains
                  below -
                </p>

                <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                  <b>Core:</b> RAN/IPRAN RBS, and BSC-Core. Swaps, Upgrades and
                  Migration. Testing, commissioning, and integration of MSS,
                  BSC, MGw, Blade Cluster, NTP, CBC. Solution Design, Project
                  Management.
                </p>

                <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                  Transmission: Microwave, OFC, Transmission Planning
                </p>

                <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                  <b>BSS/OSS:</b> Testing, and Integration of Charging System
                  (CS) and Mobile Broadband Charging (MBC) Products. Solution
                  Design, Project Management. In 2015 Telval built competencies
                  in Multimediation and Reporting Solutions
                </p>

                <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                  <b>SI Services:</b> Installation, Commissioning and
                  Integration. Hardware and Software Upgrades /Downgrades,
                  Expansion and Migrations of the Systems and Networks of most
                  Ericsson Products
                </p>

                <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                  Solutions Design, Solution Architecture, Planning and
                  Consultancy and Services On-site, On-job Competency Transfer
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="name" style={{marginLeft: '20px'}}>Managed Services</h2>

        <div
          className="post-42 page type-page status-publish has-post-thumbnail hentry category-company"
          id="post-42"
        >
          <div className="about">
            <div className="description">
              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                Active Infrastructure maintenance for BTS Sites
              </p>

              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                Passive Infrastructure maintenance
              </p>

              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                Generator Maintenance and DG Servicing
              </p>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Services;
