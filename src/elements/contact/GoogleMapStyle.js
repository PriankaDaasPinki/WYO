import React, { Component } from "react";

class GoogleMapStyle extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly

      <div className="google-map-style-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.04814577417554!2d90.39850225043772!3d23.8622878864546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5802277c2d1%3A0x83872b7e320b64fd!2sWhatsOn%20BD%20Office!5e0!3m2!1sen!2sbd!4v1732182102763!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ borderRadius: "10px", position: "relative", border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
}

export default GoogleMapStyle;
