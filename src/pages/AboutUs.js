import React from "react";
import SEO from "../common/SEO";
import HeaderTopNews from "../common/header/HeaderTopNews";
import HeaderOne from "../common/header/HeaderOne";
import FooterTwo from "../common/footer/FooterTwo";
// import BrandThree from "../elements/brand/BrandThree";
import AboutFour from "../elements/about/AboutFour";
import Service from "../elements/service/Service";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CircleProgress from "../elements/progressbar/CircleProgress";
// import TeamFour from "../elements/team/TeamFour";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Separator from "../elements/separator/Separator";
import Copyright from "../common/footer/Copyright";
import aboutUsMain from "../assets/images/prianka/aboutUsMain.jpg";

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
                  <h1 className="title2 display-one">Discover our History </h1>{" "}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        {/* Start Service Area  */}
        {/* <div className="service-area rn-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="title">WhatsOn Digital agency is a world wide Progressive  Digital & IT company</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="mb--10">WhatsOn Digital agency is a world wide progressive Digital & IT company. We Provide the best service from 2012 to Present.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
        <AboutFour image="./images/about/contact-image.jpg" />
        {/* End Service Area  */}

        {/* Start Brand Area  */}
        {/* <div className="rwt-brand-area pb--60 pt--30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt--10">
                                <BrandThree brandStyle="brand-style-2" />
                            </div>
                        </div>
                    </div>
                </div> */}
        {/* End Brand Area  */}

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

        {/* Start Elements Area  */}
        <div className="rwt-progressbar-area rn-section-gap">
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
        </div>
        {/* End Elements Area  */}

        <Separator />

        {/* Start Elements Area  */}
        {/* <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Corporate Team."
                                    title = "Corporate Team Member."
                                    description = ""
                                />
                            </div>
                        </div>
                        <TeamFour column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-three" />
                    </div>
                </div> */}
        {/* End Elements Area  */}

        <FooterTwo />
        <Copyright />
      </main>
    </>
  );
};

export default AboutUs;
