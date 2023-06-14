import React from "react";
import Content from "../../components/shared-components/Content";
import Carousel from "../../components/shared-components/OwlCarousel";

function Home(props) {
  const sliderData = [
    {
      id: 1,
      title: "TELVAL",
      description:
        "TELVAL believes that a consultant is capable of enriching the daily work experience of its clients, and we have been delivering this commitment to our customers right from the beginning - day over day.",
      image: "images/bg1.jpg",
      other: '',
      order: 1,
    },
    {
      id: 2,
      title: "TELVAL",
      description:
        "TELVAL's professional ethos is based on robust foundation of customer oriantation, and an unrelenting focus on top quality .",
      image: "images/bg2.jpg",
      other: '',
      order: 2,
    },
    {
      id: 3,
      title: "TELVAL",
      description:
        "We rely only on one thing after customer- satisafaction- do right, do well..",
      image: "images/bg3.jpg",
      other: '',
      order: 3,
    },
    {
      id: 4,
      title: "TELVAL",
      description:
        "TELVAL positions itself as front-enabler of IT and Telecommunications in its key markets",
      image: "images/bg4.jpg",
      other: '',
      order: 4,
    },
    {
      id: 5,
      title: "TELVAL",
      description: "Enablers to Connecting World",
      image: "images/bg5.jpg",
      other: '',
      order: 5,
    },
  ];

  return (
    <Content>
      <div className="home">
        <Carousel sliderData={sliderData} />
        <div className="controls"></div>
      </div>
    </Content>
  );
}

export default Home;
