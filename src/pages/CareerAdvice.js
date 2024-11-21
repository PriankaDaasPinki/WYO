import React from 'react';

import SEO from "../common/SEO";
// import Layout from "../../common/Layout";
import Layout from "../common/Layout";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import Career from '../elements/careerAdvice/Career';

const CareerAdvice = ({ showFooter }) => {
    return (
        <>
            <SEO title="CareerAdvice || WYO " />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Build Career <br /> Career Advice."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="career-advice"
                />
                <div className="main-content">
                    {/* Start Contact Area */}
                    <div className="rwt-contact-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Career with WhatsOn"
                                        title="Work for Everyone"
                                        description="Find your next job at WhatsOn..."
                                    />
                                </div>
                            </div>
                            <Career />
                        </div>
                    </div>
                    {/* End Contact Area */}
                    <FooterTwo />
                   <Copyright />
           
               
                </div>
            </Layout>
        </>
    );
}

export default CareerAdvice;
