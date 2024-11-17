import React from 'react';
import {Link} from "react-router-dom";
import CalltoActionSeven from "../../elements/calltoaction/CalltoActionSeven";
import footerOne from "../../data/footer/footerOne.json";
import ScrollTop from "./ScrollTop";
import NewsletterOne from "./NewsletterOne";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const footerIntem =  footerOne[0];
const footerIntemOne =  footerOne[1];
const footerIntemTwo =  footerOne[2];
const footerIntemThree =  footerOne[3];
// const footerIntemFour =  footerOne[4];
const footerIntemFive =  footerOne[5];

const indexOneLink = (footerIntemOne.quicklink);
const indexTwoLink = (footerIntemTwo.quicklink);
const indexThreeLink = (footerIntemThree.quicklink);

const FooterFour = () => {
    return (
        <>
            <footer className="rn-footer footer-style-default no-border">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* Start Single Widget  */}
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemOne.title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {indexOneLink.map((data, index) => (
                                                <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <div className="widget-menu-top">
                                        <h4 className="title">{footerIntemTwo.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexThreeLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemThree.title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {indexTwoLink.map((data, index) => (
                                                <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            {/* <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemFour.title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {indexTwoLink.map((data, index) => (
                                                <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div> */}

                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemFive.title}</h4>
                                    <div className="inner">
                                        <h6 className="subtitle">{footerIntemFive.subtitle}</h6>
                                        <ul className="social-icon social-default justify-content-start">
                                            <li><a href="https://www.facebook.com/whatsonuk" target="_blank"><FiFacebook /></a></li>
                                            <li><a href="https://twitter.com/WhatsOn_UK" target="_blank"><FiTwitter /></a></li>
                                            <li><a href="https://www.instagram.com/whatson_media/" target="_blank"><FiInstagram /></a></li>
                                            <li><a href="https://www.instagram.com/whatson_media/" target="_blank"><FiLinkedin /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}
                        </div>
                    </div>
                </div>
                <NewsletterOne newsletetrStyle="rn-newsletter-default" extraClass="border-top-bottom" />
                <div className="copyright-area copyright-style-one no-border">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="copyright-left">
                                    <ul className="ft-menu link-hover">
                                        <li><a href="https://whatson.agency/privacy-policy/" target="_blank">Privacy Policy</a></li>
                                        <li><a href="/terms-and-conditions" target="_blank">Terms And Condition</a></li>
                                        <li><a href="/ContactNew">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="copyright-right text-center text-md-end">
                                    <p className="copyright-text">Digital Agency by WhatsOn © All rights reserved {new Date().getFullYear()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollTop />
        </>
    )
}

export default FooterFour;
