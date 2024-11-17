import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import GoogleMain from "./GoogleMain";
import FooterTwo from '../../common/footer/FooterTwo';


const GoogleAdvertisement = () => {
    return (
        <>
            <SEO title="Pricing || WhatsOn Agency Services" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Pricing"
                />

                <div className="main-content">

                    {/* Start Elements Area  */}
                    <div className="rwt-pricing-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40 mb_sm--0">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Offer Price"
                                            title = "Our Offer For You"
                                            description = ""
                                        />
                                </div>
                            </div>
                            <GoogleMain />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <FooterTwo />
                </div>
            </Layout>
        </>
    )
}
export default GoogleAdvertisement;