// src/components/FlipCard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FlipCard({ project }) {
  const [flipped, setFlipped] = useState(false);
  const imageSrc = new URL(`../assets/project${project.id}.jpg`, import.meta.url).href;

  const visibleSkills = project.skills.slice(0, 3);
  const remainingCount = project.skills.length - visibleSkills.length;

  return (
    <button
      onClick={() => setFlipped((s) => !s)}
      className="flip-card w-full h-64 perspective outline-none"
      type="button"
    >
      <div
        className={`flip-card-inner relative w-full h-full transition-transform duration-500 ${
          flipped ? "is-flipped" : ""
        }`}
      >
        {/* Front */}
        <div className="flip-card-face flip-card-front absolute inset-0 border border-grayscale-200 rounded-md overflow-hidden">
          <img
            src={imageSrc}
            alt={project.title}
            className="object-cover w-full h-full opacity-90"
          />
          <div className="absolute bottom-0 w-full text-left p-3 bg-black/60">
            <h3 className="text-lg text-white">{project.title}</h3>
            <p className="text-sm text-gray-200">{project.short}</p>
            <td className="py-2">
              <span className="px-3 py-1 border rounded-full text-white border-white">{project.category}</span>
            </td>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-face flip-card-back absolute inset-0 border border-grayscale-200 p-6 rotate-y-180 flex flex-col justify-between rounded-md">
          <p className="mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3 justify-center">
            {visibleSkills.map(skill => (
              <span
                key={skill}
                className="px-3 py-1 border rounded-full text-white border-white/50 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          {remainingCount > 0 && (
            <p className="text-xs text-gray-400">
              +{remainingCount} more skill{remainingCount > 1 ? "s" : ""}
            </p>
          )}
          <Link to={`/projects/${project.id}`} className="underline self-star justify-center">
            View project →
          </Link>
        </div>
      </div>
    </button>
  );
}