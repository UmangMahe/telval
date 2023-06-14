/* eslint-disable react/prop-types */
import React from "react";
import OwlCarousel from "react-owl-carousel";
import { useDispatch } from "react-redux";
import ColorThief from "../../../../node_modules/colorthief/dist/color-thief.mjs";
import { rgbToHex } from "../../../utils";
import { changeAccentColor } from "../../../redux/actions/Theme";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// eslint-disable-next-line react/prop-types
function Carousel({
  sliderData = [],
  navAccentColor = true,
  titleClassName = "",
}) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { page, item } = e;

    if (item.count && item.index != null) {
      const { index } = page;

      let sI = -1;
      if (index == 0 || index == -1) {
        sI = sliderData.findIndex((obj) => obj.order === 1);
      } else {
        sI = sliderData.findIndex((obj) => obj.order === index + 1);
      }
      if (sI > -1) {
        const img = new Image(1, 1);
        img.src = sliderData[sI].image;
        img.onload = function () {
          const colorThief = new ColorThief();
          var color = colorThief.getColor(img);
          const accentColor = rgbToHex(color[0], color[1], color[2]);
          dispatch(changeAccentColor(accentColor));
        };
      }
    }
  };

  return (
    <OwlCarousel
      onChanged={navAccentColor ? (e) => handleChange(e) : null}
      className="carousel owl-loaded"
      lazyContent={true}
      items={1}
      loop
    >
      {sliderData
        .sort((a, b) => a.order - b.order)
        .map(({ id, title, description, image, other }) => (
          <div
            key={id}
            className="item"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="wave"></div>
            {typeof title === "string" ? (
              <h2 className={`item-title ${titleClassName}`}>{title}</h2>
            ) : (
              title
            )}

            <div>
              {description.length ? <p>{description}</p> : null}

              {other}
            </div>
            {/* <a href="#" className="link">Read More</a> */}
          </div>
        ))}
    </OwlCarousel>
  );
}

export default Carousel;
