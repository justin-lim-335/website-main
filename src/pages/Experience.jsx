// src/pages/Experience.jsx
import React, { useState, useEffect, Suspense, lazy } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

/* Lazy-loaded section components (JSX files in src/pages/experience/sections/) */
const Academic = lazy(() => import("./experience/sections/Academic"));
const Professional = lazy(() => import("./experience/sections/Professional"));
const Leadership = lazy(() => import("./experience/sections/Leadership"));
const Volunteering = lazy(() => import("./experience/sections/Volunteering"));
const Certifications = lazy(() => import("./experience/sections/Certifications"));

export default function Experience() {
  const [activeTab, setActiveTab] = useState("academic");
  const [fadeKey, setFadeKey] = useState(0);

  // re-trigger fade animation when tab changes
  useEffect(() => {
    setFadeKey((prev) => prev + 1);
  }, [activeTab]);

  // function to render active tab
  const renderTab = () => {
    switch (activeTab) {
      case "academic":
        return <Academic />;
      case "professional":
        return <Professional />;
      case "leadership":
        return <Leadership />;
      case "volunteering":
        return <Volunteering />;
      case "certifications":
        return <Certifications />;
      default:
        return null;
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2 text-grayscale-200">Experience</h1>
        <p className="text-grayscale-50 mb-4">
          Below is a structured breakdown of my academic, professional, leadership, volunteering
          and award/certification history. For a downloadable and concise version of my most recent resume, please{" "}
          <a href="../assets/resume.pdf" className="underline hover:opacity-80">
            click here
          </a>
          .
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 sm:gap-6 border-b border-gray-600 mb-6 justify-center sm:justify-start">
        {[
          { key: "academic", label: "Academic" },
          { key: "professional", label: "Professional" },
          { key: "leadership", label: "Leadership" },
          { key: "volunteering", label: "Volunteering" },
          { key: "certifications", label: "Awards/Certifications" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-2 text-lg font-semibold transition-colors ${
              activeTab === tab.key
                ? "text-grayscale-200 border-b-2 border-white"
                : "text-grayscale-400 hover:text-grayscale-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content area with fade-in animation */}
      <Suspense fallback={<div>Loading section…</div>}>
        <div key={fadeKey} className="fade-in">
          {renderTab()}
        </div>
      </Suspense>
      <ScrollToTopButton />
    </section>
  );
}
