import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
// import PortfolioOne from "./PortfolioOne";
import PortfolioThreeColumn from "./PortfolioThreeColumn";
import FooterTwo from "../../common/footer/FooterTwo";
import Copyright from "../../common/footer/Copyright";

const Portfolio = () => {
  return (
    <>
      <SEO title="Portfolio || Doob - React Business  Template" />
      <PortfolioThreeColumn />
      <FooterTwo />
      <Copyright />
    </>
  );
};
export default Portfolio;
