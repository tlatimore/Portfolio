import React from "react"
import project1 from "../assets/vehicle.png"
import project2 from "../assets/weather.jpg"
import project3 from "../assets/Kanban.png"
import project4 from "../assets/Candidate.jpg"

const Projects: React.FC = () => {
    
  const projects = [
    {
      title: "Vehicle Builder",
      description:
        "A typescript command line application that allows the user execute several actions with the vehicles provided.",
        link: "https://github.com/tlatimore/Vehicle-Builder",
      imageUrl: project1,
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application using React Native and a third-party API.",
        link: "https://github.com/tlatimore/Weather-Dashboard",
      imageUrl: project2,
    },
    {
      title: "Kanban Board",
      description:
        "A productivity app built to create and post ticket for collaboration assignments.",
        link:"https://github.com/tlatimore/Kanban-Board",
      imageUrl: project3,
    },
    {
      title: "Candidate search",
      description:
        "Search for Candidates.",
        link:"https://github.com/tlatimore/Candidate_Search",
      imageUrl: project4,
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => window.open(project.link, project.link ? "_blank" : "_self")}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
