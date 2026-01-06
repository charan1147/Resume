import React from "react";

const Projects = () => (
  <section className="section projects-section">
    <h2 className="section-title">
      MERN Stack Developer (Project Work) | 2025
    </h2>

    {[
      {
        title: "Library Management System",
        desc: "Full-stack MERN application for managing book inventory and borrow/return tracking.",
        points: [
          "Implemented CRUD operations",
          "JWT authentication & role-based access",
          "REST APIs using Express & MongoDB",
          "Book availability and reservation handling",
        ],
      },
      {
        title: "Expense Tracker",
        desc: "Personal finance app to record and categorize expenses dynamically.",
        points: [
          "Add, view, filter, delete expenses",
          "JWT-based authentication",
          "Dynamic rendering using React",
          "REST API integration",
        ],
      },
      {
        title: "Online Quiz Application",
        desc: "Secure quiz platform with scoring and result summaries.",
        points: [
          "JWT authentication",
          "Quiz navigation and scoring logic",
          "Result summary generation",
          "State management using Context API",
        ],
      },
      {
        title: "Hotel Booking Website",
        desc: "Responsive booking platform with search and reservation features.",
        points: [
          "Search and filter hotels",
          "Room booking with date selection",
          "Context API for state management",
          "Responsive UI design",
        ],
      },
      {
        title: "Real-Time Chat Application",
        desc: "Real-time messaging app using WebSockets.",
        points: [
          "Socket.io integration",
          "JWT authentication",
          "Online/offline user status",
          "Scalable backend design",
        ],
      },
    ].map((project, index) => (
      <div key={index} className="project-card">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.desc}</p>

        <ul className="project-list">
          {project.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>

        <a href="#" className="project-link">
          View Code →
        </a>
      </div>
    ))}
  </section>
);

export default Projects;
