// src/pages/NoPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NoPageFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-2 bg-grayscale-900 text-grayscale-200 fade-in">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-2">404 — Page not found</h1>
        <p className="mb-6 text-grayscale-400">
          The page you're looking for doesn't exist or the link is broken.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/" className="px-4 py-2 border rounded hover:opacity-90">
            Return home
          </Link>
          <Link to="/projects" className="px-4 py-2 border rounded hover:opacity-90">
            Browse projects
          </Link>
        </div>
      </div>
    </div>
  );
}
