import React from "react";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import HeaderTopBar from "../common/header/HeaderTopBar";
import Copyright from "../common/footer/Copyright";

import FooterTwo from "../common/footer/FooterTwo";
// import AboutFour from "../elements/about/AboutFour";
// import PortfolioThreeColumn from "../elements/portfolio/PortfolioThreeColumn";
// import CircleProgress from "../elements/progressbar/CircleProgress";
// import DigitalAgency from './DigitalAgency';

// import TimelineTwo from "../elements/timeline/TimelineTwo";
// import BlogListView from "../components/blog/BlogListView";
// import ContactNew from "../elements/contact/ContactNew";

import Typed from "react-typed";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Service from "../elements/service/Service";
// import AdvanceTabOne from "../elements/advancetab/AdvanceTabOne";
// import AdvancePricingOne from "../elements/advancePricing/AdvancePricingOne";
// import BrandTwo from "../elements/brand/BrandTwo";

import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Pricing from "../elements/pricing/Pricing";
import ProjectList from "../elements/projects/ProjectList";

// import PortfolioOne from "../elements/portfolio/PortfolioOne";

// import React from 'react';

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
        {/* End Service Area  */}

        {/* <Separator /> */}

        {/* pricing area start here */}

        {/* <Pricing /> */}

        <Separator />
        {/* <div className="rwt-progressbar-area rn-section-gap">
          <div className="container">
            <div className="row mb--25">
              <div className="col-lg-10 offset-lg-1">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Our Expertise."
                  title="Compnanies Expertise."
                  description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                />
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <CircleProgress />
            </div>
          </div>
        </div> */}

        {/* timeline section start */}
        {/* <Separator />
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
        </div> */}

        {/* timeline section end */}

        {/* Start Blog Area  */}
        {/* <BlogListView /> */}

        {/* Start Contact Area  */}
        {/* <ContactNew /> */}

        {/* company choose use section end here */}

        <Separator />

        {/* Start FooterTwo Area  */}
        <FooterTwo />

        {/* Start Copyrith Area  */}
        <Copyright />
      </main>
    </>
  );
};

export default Marketing;
