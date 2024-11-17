import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";

const CopyrightTwo = () => {
    return (
        <div className="copyright-area copyright-style-one variation-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="copyright-left">
                            <ul className="ft-menu link-hover">
                                <li><a href="https://whatson.agency/privacy-policy/">Privacy Policy</a></li>
                                <li><a href="/terms-and-conditions" target="_blank">Terms And Condition</a></li>
                                <li><a href="/ContactNew">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 mt_sm--20">
                        <div className="copyright-center text-center">
                            <ul className="social-icon social-default color-lessdark justify-content-center">
                                <li><a href="https://www.facebook.com/whatsonuk" target="_blank"><FiFacebook /></a></li>
                                <li><a href="https://twitter.com/WhatsOn_UK" target="_blank"><FiTwitter /></a></li>
                                <li><a href="https://www.instagram.com/whatson_media/" target="_blank"><FiInstagram /></a></li>
                                <li><a href="https://www.linkedin.com/in/whatson-uk-b1aa932b" target="_blank"><FiLinkedin /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--20 mt_sm--20">
                        <div className="copyright-right text-center text-lg-right">
                            <p className="copyright-text">
                                Digital Agency by WhatsOn © All rights reserved {new Date().getFullYear()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CopyrightTwo;