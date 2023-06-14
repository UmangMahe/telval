import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/layout-components/Header";
import PageLayout from "./components/layout-components";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Reseller from "./views/Reseller";
import DataCenter from "./views/DataCenter";
import Solutions from "./views/Solutions";
import { Route, Routes, useLocation } from "react-router-dom";
import Candidates from "./views/Candidates";
import Contact from "./views/Contact";
import $ from "jquery";
import ColorThief from "../node_modules/colorthief/dist/color-thief.mjs";
import { rgbToHex } from "./utils";
import { changeAccentColor } from "./redux/actions/Theme";
import { useDispatch } from "react-redux";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    var url = $(".background").css("background-image");
    if (url) {
      const img = new Image(1, 1);
      img.src = url.substring(5, url.length - 2);
      img.onload = function () {
        const colorThief = new ColorThief();
        var color = colorThief.getColor(img);
        const accentColor = rgbToHex(color[0], color[1], color[2]);
        dispatch(changeAccentColor(accentColor));
      };
    }
  }, [dispatch, location]);

  return (
    <PageLayout className="page" id="container">
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reseller" element={<Reseller />} />
        <Route path="/datacenter" element={<DataCenter />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/candidate" element={<Candidates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
