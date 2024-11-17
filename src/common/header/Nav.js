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
            <a href="https://whatson.academy/courses/wordpress-theme-development/">
              WordPress Theme Development
            </a>
          </li>
          <li>
            <a href="https://whatson.academy/courses/social-media-marketing-a-z-become-a-digital-marketer/">
              Social Media Marketing A-Z
            </a>
          </li>
          <li>
            <a href="https://whatson.academy/courses/wordpress-customization/">
              WordPress Customization
            </a>
          </li>
          <li>
            <a href="https://whatson.academy/courses/frontend-development/">
              Frontend Development
            </a>
          </li>
          {/* <li><Link to="/crm-solutions">CRM Solutions</Link></li>
                    <li><Link to="/email-marketing">Email Marketing</Link></li>
                    <li><Link to="/video-editing">Video Editing</Link></li>
                    <li><a href="https://whatson.agency/billing/cart.php?a=add&domain=register" target="_blank">Domain Register</a></li>
                    <li><Link to="/hosting">Web Hosting</Link></li>
                    <li><Link to="/seo">SEO</Link></li>
                    <li><Link to="/facebook-promotion-and-boosting">Facebook Boosting</Link></li>
                    <li><Link to="/youtube-advertisement">YouTube Advertisement</Link></li>
                    <li><Link to="/google-advertisement">Google Advertisement</Link></li> */}
        </ul>
      </li>

      {/* <li className=""><Link to="/blogs">Blog</Link>
            </li> */}

      <li className="#">
        <Link to="/portfolio">Career Advice</Link>
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
