import React from "react";
import SEO from "../common/SEO";
import HeaderTopNews from "../common/header/HeaderTopNews";
import HeaderOne from "../common/header/HeaderOne";
import FooterTwo from "../common/footer/FooterTwo";
// import BrandThree from "../elements/brand/BrandThree";
// import AboutFour from "../elements/about/AboutFour";
// import Service from "../elements/service/Service";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CircleProgress from "../elements/progressbar/CircleProgress";
// import TeamFour from "../elements/team/TeamFour";
// import TimelineTwo from "../elements/timeline/TimelineTwo";
import Separator from "../elements/separator/Separator";
import Copyright from "../common/footer/Copyright";

import UpcomimgCourse from "../assets/images/Projects/UpcomimgCourse.jpg";
import UpComingProject from "../elements/projects/UpComingProject";
import ProjectList from "../elements/projects/ProjectList";

import projects_bg from "../assets/images/prianka/projects_bg.webp";

const Projects = () => {
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
          style={{
            backgroundImage: `url(${projects_bg})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner pt--80 text-center">
                  <div>
                    <h3 className="rn-sub-badge">
                      <span className="theme-gradient">
                        Courses we completed
                      </span>
                    </h3>
                  </div>
                  <h1 className="title2 display-one">Popular Projects</h1>{" "}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        {/* UpcomimgCourse area  */}
        <UpComingProject image={UpcomimgCourse} />
        <Separator />

        {/* Start Project List Area  */}
        <div className="rn-service-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="What we did"
                  title="Successful Projects We've Completed"
                  description="Explore a collection of projects we've successfully completed, showcasing our expertise and the impactful solutions we've delivered to clients across various industries."
                />
              </div>
            </div>

            <ProjectList />
            {/* <Service
              serviceStyle="service__style--1 bg-color-blackest radius mt--25"
              textAlign="text-center"
            /> */}
          </div>
        </div>
        {/* End Service Area  */}

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
                  description="Our company specializes in delivering tailored solutions in web development, design, and digital strategy, helping businesses enhance their online presence and achieve long-term growth and success."
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

export default Projects;
