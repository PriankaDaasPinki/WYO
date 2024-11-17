import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import BlogPropTwo from './itemProp/BlogPropTwo';
import FooterTwo from '../../common/footer/FooterTwo';
import Copyright from '../../common/footer/Copyright';

const Blogs = () => {
    return (
        <>
            <SEO title="Blog List View || Doob - React Business Template" />
            <Layout>
                <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Blog List View"
                />

                <div className="main-content">
                    {/* Start Blog Area */}
                    <div className="rn-blog-area rn-section-gap">
                        <div className="container">
                            <h2 className="subtitle" style={{ textAlign: 'center' }}>
                                <span className="theme-gradient">See the latest news & blog</span>
                            </h2>
                            <div className="row mt_dec--30">
                                <BlogPropTwo column="col-lg-6 mt--30" StyleVarProp="box-card-style-default card-list-view" />
                            </div>
                        </div>
                    </div>
                    {/* End Blog Area */}
                </div>
            </Layout>
            <FooterTwo />
            <Copyright />
        </>
    )
}

export default Blogs;
