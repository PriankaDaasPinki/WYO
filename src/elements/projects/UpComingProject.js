import React from "react";
import { FiCheck } from "react-icons/fi";

const UpComingProject = ({ image }) => {
  return (
    <div className="about-area about-style-4 rn-section-gap">
      <div className="container">
        <div className="row row--40 align-items-center">
          <div className="col-lg-6">
            <div className="mt-0">
              <img className="rounded" src={image} alt="Upcoming Course" />
            </div>
          </div>
          <div className="col-lg-6 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="inner">
                <h3 className="title">
                  WhatsOn Youth Organization is going to start
                  {/* <br /> */}
                  <strong className="ms-3">WordPress Theme Development</strong>
                </h3>
                <ul className="feature-list">
                  <li>
                    <div className="title-wrapper d-flex align-items-center">
                      <div className="icon me-4">
                        <FiCheck />
                      </div>
                      <h4 className="title">
                        Comprehensive WordPress Theme Development Skills
                      </h4>
                      {/* <p className="text">
                        Learn essential theme development techniques, from theme
                        structure and PHP to creating custom post types and
                        integrating WooCommerce.
                      </p> */}
                    </div>
                  </li>
                  <li>
                    <div className="title-wrapper d-flex align-items-center">
                      <div className="icon me-4">
                        <FiCheck />
                      </div>
                      <h4 className="title d-flex align-center">
                        Practical, Real-World Application
                      </h4>
                      {/* <p className="text">
                        Gain hands-on experience with SEO, accessibility,
                        performance optimization, and tips for submitting themes
                        to WordPress and starting freelance work.
                      </p> */}
                    </div>
                  </li>
                </ul>
                <div className="about-btn mt--30">
                  {/* <a className="btn-default" href="/about-us">About WhatsOn Agency</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingProject;
