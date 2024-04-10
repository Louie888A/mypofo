import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <div className="footer_menu">
              <ul>
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <Link to="/Projectsgallery">Project Gallery</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer_copyright">
              <p>© 2024 LOUIE SL All Rights Reserved.</p>
            </div>
            <div className="footer_profile">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Louie888A">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
              ;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
