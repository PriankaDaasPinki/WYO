import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
// import HeaderOne from "../../common/header/HeaderOne";
// import FooterOne from "../../common/footer/FooterOne";
// import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
// import SectionTitle from "../sectionTitle/SectionTitle";
// import ServiceOne from "./ServiceOne";
// import ServiceTwo from "./ServiceTwo";
// import ServiceThree from "./ServiceThree";
// import ServiceFour from "./ServiceFour";
// import ServiceFive from "./ServiceFive";
// import Separator from "../separator/Separator";
import CustomServices from "./CustomServices";

const Service = () => {
    return (
        <>

            <SEO title="Service || Doob - React Business  Template" />
            <Layout>
                {/* <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Service"
                /> */}
                <div className="main-content">

                    {/* Start Service Area  */}
                    <div className="rn-service-area">
                        <div className="container">
                            {/* <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "What we can do for you"
                                        title = "Services provide for you."
                                        description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                     />
                                </div>
                            </div> */}
                            <CustomServices 
                                serviceStyle = "service__style--1 bg-color-blackest radius mt--25"
                                textAlign = "text-center"
                            />
                           
    
                        </div>
                    </div>

                   

                    

                    
                </div>

            </Layout>
            
        </>
    )
}

export default Service;
