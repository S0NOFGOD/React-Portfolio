import React from "react";

function Projects() {
  const projects = [
    { name: "Portfolio Website", link: "#" },
    { name: "To-Do App", link: "#" },
    { name: "Movie App", link: "#" },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <a href={project.link}>View</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;