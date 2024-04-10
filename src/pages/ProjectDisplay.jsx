import React from "react";
import { Link, useParams } from "react-router-dom";
import projectlist from "./projectlist.json";
import "../styles/projectdisplay.css";

const ProjectDisplay = () => {
  const { projectId } = useParams();
  const project = projectlist.find(
    (project) => project.id === Number(projectId)
  );
  if (!project) {
    return <div>Project not found</div>;
  }
  const { title, deployedurl, Githuburl, image } = project;
  return (
    <section className="section project container">
      <h1 className="project-header text-center" style={{ color: "#dcf5a3" }}>
        Project Details
      </h1>
      <h4 className="project-title">Project Title: {title}</h4>
      <img className="project-image img-fluid" src={image} alt={title} />
      <div className="project-details">
        <p className="project-deployed">
          Deployed URL: <a href={deployedurl}>{deployedurl}</a>
        </p>
        <p className="project-github">
          Github URL: <a href={Githuburl}>{Githuburl}</a>
        </p>
      </div>

      <Link
        className="btn btn-warning mt-3 mb-3"
        style={{ width: "30%", padding: "10px" }}
        to="/Projectsgallery"
      >
        Back to Project Gallery
      </Link>
    </section>
  );
};
export default ProjectDisplay;
