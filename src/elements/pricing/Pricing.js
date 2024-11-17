import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import CustomPricing from "../pricing/CustomPricing";

const Pricing = () => {
  return (
    <>
      <SEO title="Pricing || Doob - React Business  Template" />
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
              <div className="row mb_sm--0">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Offer Price"
                    title="Our Offer For You"
                    description=""
                  />
                </div>
              </div>
              <CustomPricing />
            </div>
          </div>
          {/* End Elements Area  */}
        </div>
      </Layout>
    </>
  );
};
export default Pricing;
