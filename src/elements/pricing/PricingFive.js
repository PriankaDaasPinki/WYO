import React from 'react';
import { FiCheck } from "react-icons/fi";


const PricingFive = () => {
    return (
        <div className="row row--15">

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing style-5">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Web Design</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">29</span>
                                </div>
                                <span className="subtitle">USD Per Month</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> 5 PPC Campaigns</li>
                                <li><FiCheck /> Digital Marketing</li>
                                <li><FiCheck /> Marketing Agency</li>
                                <li><FiCheck /> Seo Friendly</li>
                                <li><FiCheck /> UI/UX designs</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default btn-border" href="#pricing">Purchase Now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing style-5 active">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Digital Marketing</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">50</span>
                                </div>
                                <span className="subtitle">USD Per Month</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> 5 PPC Campaigns</li>
                                <li><FiCheck /> Keep 100% Royalties</li>
                                <li><FiCheck /> App Development</li>
                                <li><FiCheck /> Seo Friendly</li>
                                <li><FiCheck /> UI/UX designs</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default" href="#https://whatson.agency/">Purchase Now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing style-5">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">SEO</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">500</span>
                                </div>
                                <span className="subtitle">USD Per Month</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> 50 PPC Campaigns</li>
                                <li><FiCheck /> SEO Marketing</li>
                                <li><FiCheck /> Marketing Agency</li>
                                <li><FiCheck /> Seo Friendly</li>
                                <li><FiCheck /> Application Manage</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a className="btn-default btn-border" href="#pricing">Purchase Now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

        </div>
    )
}
export default PricingFive;
