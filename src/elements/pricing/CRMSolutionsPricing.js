import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import CRMSolutionsMain from "./CRMSolutionsMain";
import FooterTwo from '../../common/footer/FooterTwo';


const CRMSolutionsPricing = () => {
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
                                            subtitle = "Marketing Automation | CRM"
                                            title = "CRM Growth Partner for Customer Engagement"
                                            description = "CRM platfrom helsps you drive growth by streamlining your marketing processes allowing you to focus on more important tasks. With a centralized system to manage your customer information, you can improve lead management and target your marketing efforts for maximum conversions."
                                        />
                                </div>
                            </div>
                            <CRMSolutionsMain />
                        </div>
                    </div>
                    {/* End Elements Area  */}
                    <FooterTwo />
                </div>
            </Layout>
        </>
    )
}
export default CRMSolutionsPricing;