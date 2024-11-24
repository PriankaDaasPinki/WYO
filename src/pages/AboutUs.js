import React from "react";

import SEO from "../common/SEO";
import HeaderTopNews from "../common/header/HeaderTopNews";
import HeaderOne from "../common/header/HeaderOne";
import FooterTwo from "../common/footer/FooterTwo";
import Service from "../elements/service/Service";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Separator from "../elements/separator/Separator";
import Copyright from "../common/footer/Copyright";
import aboutUsMain from "../assets/images/prianka/aboutUs/aboutUsMain.jpg";
import first from "../assets/images/prianka/aboutUs/first.JPG";
import AboutPageImageSection from "../components/AboutPageImageSection";

const AboutUs = () => {
  return (
    <>
      <SEO title="About Us" />
      <main className="page-wrapper">
        <HeaderTopNews />
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-transparent"
        />

        {/* Start Slider Area  */}
        <div
          className="slider-area slider-style-1 height-850 bg_image"
          data-black-overlay="7"
          style={{ backgroundImage: `url(${aboutUsMain})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner pt--80 text-center">
                  <div>
                    <h3 className="rn-sub-badge">
                      <span className="theme-gradient">
                        Established in 2024
                      </span>
                    </h3>
                  </div>
                  <h1 className="title2 display-one">Discover our History </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        <div className="rn-service-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="About WYO"
                  title="Who We Are"
                  description="Whatson Youth Organization is dedicated to empowering the youth by fostering personal and professional development. Focused on building a brighter future, it engages in social work initiatives while equipping young individuals with valuable skills. The organization offers courses such as Web Development, WordPress Theme Customization, and Frontend Design to help youth thrive in the digital age."
                />
                <img className="rounded" src={first} alt="1st image" />
                <AboutPageImageSection />
              </div>
            </div>
          </div>
        </div>
        {/* <AboutFour image="./images/about/contact-image.jpg" /> */}
        <Separator />

        {/* Start Service Area  */}
        <div className="rn-service-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="What we can do for you"
                  title="Services provide for you."
                  description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                />
              </div>
            </div>
            <Service
              serviceStyle="service__style--1 bg-color-blackest radius mt--25"
              textAlign="text-center"
            />
          </div>
        </div>
        {/* End Service Area  */}

        <Separator />
        <div className="rwt-timeline-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Discover"
                  title="Working Process."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1 mt--50">
                <TimelineTwo classVar="" />
              </div>
            </div>
          </div>
        </div>
        <Separator />

        <FooterTwo />
        <Copyright />
      </main>
    </>
  );
};

export default AboutUs;
