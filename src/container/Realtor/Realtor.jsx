import React from "react";
import { images } from "../../constants";
import "./Realtor.css";

const Realtor = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.gallery01} alt="realtor_image" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__realtor-content">
        <div className="app__realtor-content_quote">
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.{" "}
        </p>
      </div>

      <div className="app__realtor-sign">
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Realtor;
