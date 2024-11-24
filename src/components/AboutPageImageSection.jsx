import React from "react";

import three from "../assets/images/prianka/aboutUs/three.jpg";
import one from "../assets/images/prianka/aboutUs/one.JPEG";
// import two from "../assets/images/prianka/aboutUs/two.JPEG";
import four from "../assets/images/prianka/aboutUs/four.JPG";
import five from "../assets/images/prianka/aboutUs/five.JPG";
import six from "../assets/images/prianka/aboutUs/six.JPG";
import seven from "../assets/images/prianka/aboutUs/seven.JPG";

const AboutPageImageSection = () => {
  return (
    <>
      <div className="d-flex mt-5 pt-5">
        <div className="Card col-sm-6 col-md-4 pb-5 pe-5">
          <div>
            <a href="#" target="_blank">
              <img
                className="img-fluid rounded"
                src={one}
                alt="cartImageOfProduct"
                style={{ height: "25rem", width: "100%", content: "cover" }}
              />
            </a>
          </div>
          {/* <h4
        style={{ height: "8rem" }}
        className="text-white fs-1 pt-5 text-center"
      >
        {title}
      </h4> */}
        </div>
        <div className="Card col-sm-6 col-md-4 pb-5 pe-2 ps-3">
          <div>
            <a href="#" target="_blank">
              <img
                className="img-fluid rounded"
                src={four}
                alt="cartImageOfProduct"
                style={{ height: "25rem", width: "100%" }}
              />
            </a>
          </div>
        </div>
        <div className="Card col-sm-6 col-md-4 pb-5 ps-5">
          <div>
            <a href="#" target="_blank">
              <img
                className="img-fluid rounded"
                src={three}
                alt="cartImageOfProduct"
                style={{ height: "25rem", width: "100%" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex mt-5">
        <div className="Card col-sm-6 col-md-4 pb-5 pe-5">
          <div>
            <a href="#" target="_blank">
              <img
                className="img-fluid rounded"
                src={five}
                alt="cartImageOfProduct"
                style={{ height: "25rem", width: "100%", content: "cover" }}
              />
            </a>
          </div>
        </div>
        <div className="Card col-sm-6 col-md-4 pb-5 pe-2 ps-3">
          <div>
            <a href="#" target="_blank">
              <img
                className="img-fluid rounded"
                src={seven}
                alt="cartImageOfProduct"
                style={{ height: "25rem", width: "100%" }}
              />
            </a>
          </div>
        </div>
        <div className="Card col-sm-6 col-md-4 pb-5 ps-5">
          <div>
            <a href="#" target="_blank">
              <img
                className="img-fluid rounded"
                src={six}
                alt="cartImageOfProduct"
                style={{ height: "25rem", width: "100%" }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPageImageSection;
