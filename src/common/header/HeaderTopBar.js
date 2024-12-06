import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  // FiChevronRight,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
// import { Link } from "react-router-dom";

const HeaderTopBar = () => {
  return (
    <div className="header-top-bar">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="header-right justify-content-start">
              <div className="address-content">
                <p>
                  <FiMapPin />
                  <span>Local: H#09, R#02, Sector#03, Uttara</span>
                </p>
                <p>
                  <FiPhone />
                  <span>
                    <a href="tel:+88 016 0144 2163">+88 016 0144 2163</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-12">
            <div className="header-right">
              <div className="address-content">
                <p>
                  <FiMapPin />
                  <span>HQ: 13a Cannon St, Birmingham B2 5EN, UK</span>
                </p>
                <p>
                  <FiPhone />
                  <span>
                    <a href="tel:+44 121 65 51 122">+44 121 655 1122</a>
                  </span>
                </p>
              </div>
              <div className="social-icon-wrapper">
                <ul className="social-icon social-default icon-naked">
                  <li>
                    <a
                      href="https://www.facebook.com/whatsonuk"
                      target="_blank"
                    >
                      <FiFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/WhatsOn_UK" target="_blank">
                      <FiTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/whatson_media/"
                      target="_blank"
                    >
                      <FiInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/whatson-uk-b1aa932b"
                      target="_blank"
                    >
                      <FiLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
