import React from "react";

const Copyright = () => {
  return (
    <div className="copyright-area copyright-style-one">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="copyright-right text-center">
            <p className="copyright-text">
              WhatsOn Youth Organization <sup>©</sup> All rights reserved{" "}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
