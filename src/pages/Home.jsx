import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <img
              src="https://louie888a.github.io/picreactpofo/Louie-S-L.jpg"
              alt="mypicture"
              className="image img-fluid"
            />
          </div>
          <div className="col col-lg-6 col-md-12">
            <div className="text-white h-100 d-flex flex-column justify-content-center">
              <h1 className=" display-5 fw-bold">Welcome to my portfolio</h1>
              <p className="text-white mb-5 lead">
                I am a Front-End Developer, based in Birmingham.
              </p>
              <Link to="/Projectsgallery" className="btn btn-warning">
                Browse Project Gallery
              </Link>
              <Link to="/Contact" className="btn btn-warning">
                Contact Me ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
