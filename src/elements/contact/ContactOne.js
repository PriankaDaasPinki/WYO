import React from 'react';
import ContactForm from "./ContactForm";
import GoogleMapStyle from "./GoogleMapStyle";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";

const ContactOne = () => {
    return (
        <>
            <div className="row row--15">
                <div className="col-lg-12">
                    <div className="rn-contact-address mt_dec--30">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Call us today</h4>
                                        <p><a href="tel:+44 121 655 1122">+44 121 655 1122</a></p>
                                        <p><a href="tel:+88 016 014 42163">+88 016 014 42163</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Send an Email</h4>
                                        <p><a href="mailto:admin@whatsonyouth.org">admin@whatsonyouth.org</a></p>
                                        <p><a href="mailto:contact@whatsonyouth.org">contact@whatsonyouth.org</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Visit Our Local Office</h4>
                                        {/* <p>HQ: 13a Cannon St, Birmingham B2 5EN, UK</p> */}
                                        <p>BD Office: 1st floor H#09, R#02, Sec#03, Uttara, Dhaka-1230</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt--40 row--15">
                <div className="col-lg-7">
                    <ContactForm formStyle="contact-form-1" />
                </div>
                <div className="col-lg-5 mt_md--30 mt_sm--30">
                    <GoogleMapStyle />
                </div>
            </div>
        </>
    )
}
export default ContactOne;