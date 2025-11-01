import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../data/projects.json";
import "highlight.js/styles/github-dark.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.projects.find(
    (p) => p.id === parseInt(id, 10)
  );
  const imageSrc = new URL(`../assets/project${id}.jpg`, import.meta.url).href;

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto p-10 text-center">
        <h2 className="text-2xl mb-4">Project Not Found</h2>
        <Link to="/projects" className="underline text-blue-400">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail fade-in">
      {/* Title + Metadata */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">{project.title}</h1>
        <div className="flex flex-wrap gap-3 text-sm text-gray-400">
          <span className="px-3 py-1 border rounded-full text-white border-white">
            {project.category}
          </span>
        </div>
      </div>

      {/* Image */}
      <img
        src={imageSrc}
        alt={project.title}
        className="project-image"
      />

      {/* Content */}
      <p className="mb-6 text-lg text-grayscale-100">{project.content}</p> 

      {/* Skills */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Skills Used</h3>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 border rounded-full text-white border-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="project-links mb-8 flex flex-wrap gap-4">
        {Object.entries(project.links).map(([label, url]) => (
          <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="project-link-button">
            {label}
          </a>
        ))}
      </div>

      {/* Back Button */}
      <Link
        to="/projects"
        className="underline text-grayscale-400 hover:text-grayscale-200"
      >
        ← Back to Projects
      </Link>
    </div>
  );
}
