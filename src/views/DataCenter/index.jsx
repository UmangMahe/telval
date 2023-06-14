import React from "react";
import Content from "../../components/shared-components/Content";

function DataCenter(props) {

  return (
    <Content className="subsection">
      <div className="overlay"></div>

      <div
        className="background"
        style={{backgroundImage: "url('images/bg3.jpg')"}}
      ></div>

      <div className="wrapper">
        <h1
          className="title"
          style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}
        >
          Managed IT Services
        </h1>
        &nbsp;
        <div
          className="post-123 page type-page status-publish has-post-thumbnail hentry category-solutions"
          id="post-123"
        >
          <div className="solutions">
            <h3>IMAC</h3>
            <div className="description">
              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                Though our experienced engineers we provide rapid transfer and
                sheltered re-positioning of IT equipment without unnecessary
                disruptions and complications.
              </p>
              &nbsp;
            </div>
            <h3>Break Fix</h3>
            <div className="description">
              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                We provide break fix services to our customers. We have
                resources for short-term tasks as well as long-term contract
                based break fix. Our break fix services cover both End Users and
                Data Centres.
              </p>
            </div>
            &nbsp;
            <h3>Global Deployments</h3>
            <div className="description">
              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                Our team of experts have extensive experience in deploying
                Desktops, Servers and Network devices across the Globe. We can
                help you with planning and execution so that it provides you
                with greater savings as well as fast execution.
              </p>
            </div>
            &nbsp;
            <h3>IT Asset Disposal Services</h3>
            <div className="description">
              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                We provide IT Asset Disposal Services, we are a trusted company
                when it comes to decommissioning IT assets, we make sure that
                all data is erased permanently from all devices.
              </p>
            </div>
            &nbsp;
            <h3>Site surveys &amp; Installation</h3>
            <div className="description">
              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                We perform site surveys followed by the installation of IT
                devices for our customers across the globe with the help of our
                experienced service delivery team.
              </p>
            </div>
            &nbsp;
            <h3>Stock Inventory and Audits</h3>
            <div className="description">
              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                We provide services for stock inventory and audits around the
                world for our clients. We have been providing this service to
                our customers following their defined parameters.
              </p>
            </div>
            &nbsp;
            <h3>Resource on SLA</h3>
            <div className="description">
              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                Need a resource in 4 hours? We can help with that across EMEA,
                APAC &amp; Americas. We will work with you to put in place a
                robust system that ensures techs on site on short notice,
                mitigating issues in the shortest possible time.
              </p>
            </div>
            &nbsp;
            <h3>Asset Disposal and Destruction</h3>
            <div className="description">
              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                Do you have old hardware that needs to be disposed/destroyed? We
                can help you with all your disposal needs. We also provide
                peace-of-mind disposal of any hardware which may carry any data.
                Using industry standard tools, services and procedures to
                securely wipe sensitive data to make recovery impossible.
              </p>
            </div>
            &nbsp;
            <h3>24&times;7 International IT Maintenance</h3>
            <div className="description">
              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                Our traditional break-fix maintenance service offers a cost
                effective, consistent and reliable solution. We understand that
                many IT departments face resource and budget constraints and
                managers don&rsquo;t always have the time to think about
                reactive, onsite maintenance.
              </p>
            </div>
            &nbsp;
            <h3>Retail Support</h3>
            <div className="description">
              <p style={{opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                Our technical team can minimize downtime, to keep you always
                operational. We support all kinds of installations from Footfall
                counters, EPOS, Desktop, Servers, Switches, UPS and more. When
                required, engineers on side are available on demand to ensure
                exceptional customer experience.&nbsp;
              </p>
            </div>
            <div className="gallery">
              <div className="gallery-item active">
                <img className="img-fluid" src="images/Security.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default DataCenter;
