import React from "react";
import VideoTwo from "../video/VideoTwo";
import { FiCheck } from "react-icons/fi";

const PopupData = [
  {
    id: "01",
    image: "./images/about/new-contact-image.jpg",
    popupLink: ["https://youtu.be/shxtVqDfzAE"],
  },
];

const AboutFour = ({ image }) => {
  return (
    <div className="about-area about-style-4 rn-section-gap">
      <div className="container">
        <div className="row row--40 align-items-center">
          <div className="col-lg-6">
            {PopupData.map((item) => (
              <div className="video-btn" key={item.id}>
                <VideoTwo imagename={`${image}`} galleryItem={item} />
              </div>
            ))}
          </div>
          <div className="col-lg-6 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="inner">
                <h3 className="title">
                  WhatsOn Youth Organization specializes in to
                  <br />{" "}
                  <strong>360 degree IT Solution & Digital Marketing.</strong>
                </h3>
                <ul className="feature-list">
                  <li>
                    <div className="icon">
                      <FiCheck />
                    </div>
                    <div className="title-wrapper">
                      <h4 className="title">
                        Unlocking Digital Excellence Worldwide
                      </h4>
                      <p className="text">
                        WhatsOn Youth Organization is a 360 degree Digital Marketing & IT
                        Solution provider. We have experience across many
                        different industries and have served over 700+ clients
                        in our short existence since 2019.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <FiCheck />
                    </div>
                    <div className="title-wrapper">
                      <h4 className="title">
                        Customer Experience & Quality Work
                      </h4>
                      <p className="text">
                        In whatsonyouth.org we value our customers deeply.We don’t
                        just finish a project and pack up.We take and treat
                        every project close to our heart because we are
                        passionate about what we do.
                      </p>
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

export default AboutFour;
