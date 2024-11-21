import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li className="has-droupdown">
        <Link to="">Home</Link>
      </li>
      <li className="has-droupdown">
        <Link to="/projects">Projects</Link>
        <ul className="submenu">
          <li>
            <a
              href="https://whatson.academy/courses/wordpress-theme-development/"
              target="_blank"
            >
              WordPress Theme Development
            </a>
          </li>
          <li>
            <a
              href="https://whatson.academy/courses/social-media-marketing-a-z-become-a-digital-marketer/"
              target="_blank"
            >
              Social Media Marketing A-Z
            </a>
          </li>
          <li>
            <a
              href="https://whatson.academy/courses/wordpress-customization/"
              target="_blank"
            >
              WordPress Customization
            </a>
          </li>
          <li>
            <a
              href="https://whatson.academy/courses/frontend-development/"
              target="_blank"
            >
              Frontend Development
            </a>
          </li>
        </ul>
      </li>

      <li className="#">
        <Link to="/career-advice">Career Advice</Link>
      </li>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
      <li className="#">
        <Link to="/Contact">Contact Us</Link>
      </li>
      {/* <li><a href="https://whatson.agency/billing/index.php?rp=/login" target="_blank">Client Area</a></li> */}
    </ul>
  );
};
export default Nav;
