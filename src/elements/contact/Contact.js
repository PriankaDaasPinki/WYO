import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactOne from "./ContactOne";
import FooterTwo from '../../common/footer/FooterTwo';
import Copyright from '../../common/footer/Copyright';

const Contact = ({ showFooter }) => {
    return (
        <>
            <SEO title="Contact || WhatsOn Agency " />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Contact US."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Contact"
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
                                        subtitle="Contact Info"
                                        title="Our Contact Address"
                                        description=""
                                    />
                                </div>
                            </div>
                            <ContactOne />
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

export default Contact;
