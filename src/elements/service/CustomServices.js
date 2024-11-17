import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";

import { clipText } from "../../components/project/Card";

const Services = ({ textAlign, serviceStyle }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Fetch all services at once by setting a higher per_page value
        const response = await axios.get(
          "https://new.whatson.agency/wp-json/wp/v2/services?_fields=acf,title&acf_format=standard&per_page=100"
        );

        setServices(response.data); // Set the fetched services
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchServices(); // Fetch all services when the component loads
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="row row--15 service-wrapper">
      {services.map((service) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={service.id}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="icon">
                {service.acf?.service_image && (
                  <img
                    src={service.acf.service_image}
                    alt={service.title?.rendered || "Service Image"}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                )}
              </div>
              <div className="content d-flex justify-content-between flex-column">
                {/* Correcting the title rendering */}
                <h4 style={{ height: "4rem" }} className="title w-600">
                  {service.title?.rendered || "No Title"}
                </h4>
                <p
                  style={{ textAlign: "justify", height: "17rem" }}
                  className="description b1 color-gray mb--0"
                  dangerouslySetInnerHTML={{
                    __html:
                      clipText(service.acf?.service_summary, 150) ||
                      "No summary available",
                  }}
                ></p>
                {service.acf?.button_url && (
                  <a
                    className="btn-default btn-small mt--15 align-self-center"
                    href={service.acf.button_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See More
                  </a>
                )}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};

export default Services;
