import React from "react";
import { Link } from "react-router-dom";
import profilepic from "../assets/profilepic.jpg";
import recentProjects from "../data/projects.json";
import FlipCard from "../components/FlipCard.jsx";

export default function Home() {
  const projects = [...recentProjects.projects]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto p-6 sm:p-10 flex flex-col gap-10 fade-in">
      {/* TOP SECTION */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-10">
        {/* LEFT SECTION */}
        <div className="flex-1">
          <h1 className="text-4xl mb-3">Hi, I’m Justin</h1>
          <p className="mb-4 leading-relaxed">
            I’m a data analyst passionate about intersecting analytical rigor and
            technical expertise with social causes I care about. In my free time,
            I enjoy dancing, learning new languages, playing games (video, board, and trading card), and
            solving NYT word puzzles.
          </p>
          <p className="mb-6 font-bold">
            For more information about my academic, professional, leadership, and volunteering
            experience,{" "}
            <Link to="/experience" className="underline hover:opacity-80">
              click here
            </Link>
            .
          </p>
          <p className="mb-6 font-bold">
            Feel free to also look over my{" "}
            <Link to="/projects" className="underline hover:opacity-80">
              projects
            </Link> and my{" "}
            <Link to="/dance" className="underline hover:opacity-80">
              dance portfolio
            </Link>
            .
          </p>

          <fieldset className="rounded-box-with-title">
            <legend className="box-title">Currently...</legend>
            <div className="grid-container">
              <div className="grid-item font-bold">Reading:</div>
              <div className="grid-item">The Butcher's Masquerade, Mockingjay</div>
              <div className="grid-item font-bold">Listening:</div>
              <div className="grid-item">Baekhyun, Malcolm Todd, The Marias</div>
              <div className="grid-item font-bold">Watching:</div>
              <div className="grid-item">Attack on Titan, The Middle</div>
              <div className="grid-item font-bold">Playing:</div>
              <div className="grid-item">Hollow Knight, One Piece TCG</div>
              <div className="grid-item font-bold">Learning:</div>
              <div className="grid-item">Mandarin, Calligraphy, AWS</div>
            </div>
          </fieldset>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1 flex flex-col items-center text-center space-y-3">
          <img
            src={profilepic}
            alt="Profile"
            className="w-60 h-60 sm:w-72 sm:h-72 rounded-full object-cover border border-grayscale-200"
          />
          <p className="text-lg font-bold text-grayscale-200">Justin Lim</p>
          <p>
            <strong>Stanford University</strong>, Management Science & Engineering B.S.
          </p>
          <p>
            <strong>Previous Role:</strong> External Manager, Stanford Student Enterprises
          </p>
          <fieldset className="rounded-box-with-title w-full sm:w-auto text-left sm:text-center">
            <p className="font-bold">
              Email:{" "}
              <a href="mailto:justinlim0223@gmail.com" className="underline hover:opacity-80">
                justinlim0223@gmail.com
              </a>
            </p>
            <p className="font-bold">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/justin-lim-9b7245124/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                linkedin.com/in/justin-lim-9b7245124
              </a>
            </p>
            <p className="font-bold">
              GitHub:{" "}
              <a
                href="https://www.github.com/justin-lim-335"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                github.com/justin-lim-335
              </a>
            </p>
          </fieldset>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div className="mt-10">
        <h2 className="text-2xl mb-6">Recent Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <FlipCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
