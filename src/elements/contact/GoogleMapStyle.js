import React, { Component } from "react";

class GoogleMapStyle extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly

      <div className="google-map-style-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510.83457682014085!2d-1.8980836383279143!3d52.479996585239704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc8c71891c01%3A0x6cfd88e7f01217ac!2sWhatsOn!5e0!3m2!1sen!2sbd!4v1719321545817!5m2!1sen!2sbd"
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
