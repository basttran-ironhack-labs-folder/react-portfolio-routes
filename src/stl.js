import React, { Component } from “react”;
import { Link } from “react-router-dom”;
import “./ProjectList.css”;
import allProjects from “../project-list.json”;
function projectAdress(project) {
 return `project/${project._id}`;
}

class ProjectList extends Component {
 constructor(props) {
   super(props);    this.state = {
     projectArray: allProjects
   };
 }  
 render() {
   const { projectArray } = this.state;    
   return (
     <section className=“ProjectList”>
       <h2>Project List</h2>        
       <p>This is some cool projects I have worked on.</p>        
       <ul>
         {projectArray.map(oneProject => {
           return (
             <li key={oneProject._id}>
               <h3>
                 <Link to={projectAdress(oneProject)}>{oneProject.name}</Link>
               </h3>
               <p>Technologies: {oneProject.technologies}</p>
             </li>
           );
         })}
       </ul>
     </section>
   );
 }
}
export default ProjectList;


import React, { Component } from “react”;import “./ProjectDetails.css”;
import allProjects from “../project-list.json”;

class ProjectDetails extends Component {
 render() {
   // this.props.match contains informations about the ROUTE
   // (including path parameters like path=“/project/:projectId”)
   console.log(this.props.match);    // match is a prop sent AUTOMATICALLY by the React router
   const { params } = this.props.match;    // search for the project in the array
   const projectItem = allProjects.find(oneProject => {
     return oneProject._id === params.projectId;
   });    return (
     <section className=“ProjectDetails”>
       {projectItem ? (
         // if we found a project display it
         <div>
           <h2>Project Details</h2>
           <h3>
             {projectItem.name} ({projectItem.year})
           </h3>
           <p>{projectItem.description}</p>
         </div>
       ) : (
         <h2>Project Not Found</h2>
       )}        {/* the name “projectId” comes from the Route in App.js
        *   <Route path=“/project/:projectId” ... */}
       <p>ID: {params.projectId}</p>
     </section>
   );
 }
}export default ProjectDetails;
