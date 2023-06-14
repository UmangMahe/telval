import React from "react";
import Content from "../../components/shared-components/Content";
import Carousel from "../../components/shared-components/OwlCarousel";

function Reseller(props) {
  const sliderData = [
    {
      id: 1,
      title: "Authorized Reseller",
      description:
        "We are authorized reseller of Fortinet, Mikrotik, Cisco and Juniper Networks. We are unapologetically ambitious and that&rsquo;s what drives us do better in every aspect we serve our clients. There must be a reason why we are consistently chosen as a top service provider.",
      image: "images/auth-resellers.jpg",
      other: (
        <div className="row gx-4">
          <div className="col-md-2 col-4 mb-4">
            <img
              className="myimage img-fluid"
              src="images/juniper-networks-logo.jpg"
            />
          </div>

          <div className="col-md-2 col-4 mb-4">
            <img className="myimage img-fluid" src="images/Fortinet-logo.jpg" />
          </div>

          <div className="col-md-2 col-4 mb-4">
            <img className="myimage img-fluid" src="images/cisco-logo.jpg" />
          </div>

          <div className="col-md-2 col-4 mb-4">
            <img className="myimage img-fluid" src="images/mikrotik-logo.jpg" />
          </div>

          <div className="col-md-2 col-4 mb-4">
            <img className="myimage img-fluid" src="images/motorola.jpg" />
          </div>
        </div>
      ),
      order: 1,
    },
    {
      id: 2,
      title: "Juniper Network",
      description:
        "Juniper Networks, Inc. is an American multinational corporation headquartered in Sunnyvale, California that develops and markets networking products. Its products include routers, switches, network management software, network security products and software-defined networking technology. We're authorized reseller of Juniper Networks, Inc.",
      image: "images/network-jupitor.jpg",
      other: (
        <div className="row">
          <div className="col-md-2 col-4 mb-4">
            <img
              className="myimage img-fluid"
              src="images/juniper-networks-logo.jpg"
            />
          </div>
        </div>
      ),
      order: 2,
    },
    {
      id: 3,
      title: "Offered Solutions",
      description: "",
      image: "images/bg3.jpg",
      other: (
        <div className="row">
          <div className="col-4 col-md-3 mt-4">
            <div className="reseller card">
              <div className="card-block">
                <h5 className="text-center">Switching</h5>
              </div>
            </div>
          </div>

          <div className="col-4 col-md-3 mt-4">
            <div className="reseller card">
              <div className="card-block">
                <h5 className="text-bold text-center">Routing</h5>
              </div>
            </div>
          </div>

          <div className="col-4 col-md-3 mt-4">
            <div className="reseller card">
              <div className="card-block">
                <h5 className="text-bold text-center">Security</h5>
              </div>
            </div>
          </div>

          <div className="col-4 col-md-3 mt-4">
            <div className="reseller card">
              <div className="card-block">
                <h5 className="text-bold text-center">Packet Optical</h5>
              </div>
            </div>
          </div>

          <div className="col-4 col-md-3 mt-4">
            <div className="reseller card">
              <div className="card-block">
                <h5 className="text-bold text-center">Network Management</h5>
              </div>
            </div>
          </div>

          <div className="col-4 col-md-3 mt-4">
            <div className="reseller card">
              <div className="card-block">
                <h5 className="text-bold text-center">Network Edge Services</h5>
              </div>
            </div>
          </div>

          <div className="col-4 col-md-3 mt-4">
            <div className="reseller card">
              <div className="card-block">
                <h5 className="text-bold text-center">
                  Software Defined Network
                </h5>
              </div>
            </div>
          </div>

          <div className="col-4 col-md-3 mt-4">
            <div className="reseller card">
              <div className="card-block">
                <h5 className="text-bold text-center">
                  Network Operating System
                </h5>
              </div>
            </div>
          </div>

          <div className="col-4 col-md-3 mt-4">
            <div className="reseller card">
              <div className="card-block">
                <h5 className="text-bold text-center">
                  Identity and Policy Control
                </h5>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 mt-4">
            <div className="reseller card">
              <div className="card-block">
                <h5 className="text-bold text-center">
                  Application Management &amp; Orchestration
                </h5>
              </div>
            </div>
          </div>
        </div>
      ),
      order: 3,
    },
    {
      id: 4,
      title: "Fortinet",
      description:
        "We provide top-rated network and content security, as well as secure access products that share intelligence and work together to form a cooperative fabric. We're authorized reseller of Fortinet Products & Services.",
      image: "images/bg4.jpg",
      other: "",
      order: 4,
    },
    {
      id: 5,
      title: <h2 className="item-title">TELVAL</h2>,
      description:
        "Telval Service Ltd has a strong belief that a consultant is capable of enriching the daily work-experience of her client, which is exactly what we are delivering to our customers since its inception.",
      image: "images/bg5.jpg",
      other: (
        <p>
          Telval Service Ltd has a strong belief that a consultant is capable of
          enriching the daily work-experience of her client, which is exactly
          what we are delivering to our customers since its inception.
        </p>
      ),
      order: 5,
    },
  ];

  return (
    <Content>
      <div className="home">
        <Carousel sliderData={sliderData} titleClassName="telvalh2" />

        <div className="controls"></div>
      </div>
    </Content>
  );
}

export default Reseller;
