import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flawour" />
      <h1 className="app__header-h1">Luxury Homes for Sale</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
      </p>
      <button className="custom__button">Explore</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="header img"/>
    </div>
  </div>
);

export default Header;
