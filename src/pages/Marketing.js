import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";


import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import HeaderTopBar from "../common/header/HeaderTopBar";
import Copyright from "../common/footer/Copyright";
import FooterTwo from "../common/footer/FooterTwo";
import Service from "../elements/service/Service";
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ProjectList from "../elements/projects/ProjectList";

const Marketing = () => {
  return (
    <>
      <SEO title="Marketing" />
      <main className="page-wrapper">
        <HeaderTopBar />
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-not-transparent"
        />

        {/* Start Slider Area  */}
        <div className="slider-area slider-style-1 bg-transparent variation-2 height-750">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 order-2 order-lg-1 mt_md--40 mt_sm--40">
                <div className="inner text-start">
                  <h1 className="title theme-gradient display-two">
                    {" "}
                    <Typed
                      strings={[
                        "Empowering Tomorrow's Innovators: Master Digital Skills Today!",
                        "Unlock Your Potential: Learn, Create, Thrive!",
                        "From Camps to Careers: Shape Your Digital Future!",
                        "Build, Design, Succeed: Your Journey Begins Here!",
                        "Craft Your Digital Destiny: Skills for the Next Generation!",
                      ]}
                      typeSpeed={100}
                      backSpeed={100}
                      backDelay={2000}
                      startDelay={0}
                      loop
                      showCursor={true}
                    />
                  </h1>
                  <p className="description">
                    Join us to master digital marketing, WordPress theme
                    customization, and front-end design—all in one
                    transformative camp experience!
                  </p>
                  <div className="button-group">
                    <Link
                      className="btn-default btn-medium btn-border round btn-icon"
                      to="/ContactNew"
                    >
                      Contact Us{" "}
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-1 order-lg-2">
                <div className="thumbnail">
                  <img src="./images/bg/youthImageR.png" alt="Banner Images" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        <Separator />
        {/* Project List  */}
        <div className="rn-service-area rn-section-gap">
          <div className="container">
            <ProjectList />
          </div>
        </div>

        {/* <AboutFour /> */}
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
                  title="Large Variety of Services"
                  description="We are WhatsOn Youth Organization. You will find from here our <br />Variety of Services. Have a Look !"
                />
              </div>
            </div>
            <Service
              serviceStyle="service__style--1 icon-circle-style with-working-process"
              textAlign="text-center"
            />
          </div>
        </div>
        
        <FooterTwo />
        {/* Start Copyrith Area  */}
        <Copyright />
      </main>
    </>
  );
};

export default Marketing;
