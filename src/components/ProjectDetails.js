import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ProjectDetails.css";
import allProjects from "../project-list.json";

class ProjectDetails extends Component {
  render() {
    // this.props.match contains information about the ROUTE
    // (including path parameters)
    console.log(this.props.match);
    const { params } = this.props.match;

    // search for the project in the array
    const projectItem = allProjects.find(oneProject => {
      return oneProject._id === params.projectId;
    });
    return (
      <section className="ProjectDetails">
        {projectItem ? (
          <div>
            <h2>Project Details</h2>
            <h3>
              {projectItem.name} ({projectItem.name})
            </h3>
            <p>{projectItem.description}</p>
            <h3>Technologies</h3>
            <p>{projectItem.technologies}</p>
          </div>
        ) : (
          <h2>Project Not Found</h2>
        )}

        {/* 
        the name "projectId" comes from the Route in App.js
        <Toute path="/project/:projectId" ...>
        */}

        <p>ID: {params.projectId}</p>
        <Link to="/project-list">Back to All Projects</Link>
      </section>
    );
  }
}

export default ProjectDetails;
