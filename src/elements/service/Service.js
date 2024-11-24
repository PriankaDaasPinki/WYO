import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import CustomServices from "./CustomServices";

const Service = () => {
  return (
    <>
      <SEO title="Service || Doob - React Business  Template" />
      <Layout>
        <div className="main-content">
          {/* Start Service Area  */}
          <div className="rn-service-area">
            <div className="container">
              <CustomServices
                serviceStyle="service__style--1 bg-color-blackest radius mt--25"
                textAlign="text-center"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Service;
