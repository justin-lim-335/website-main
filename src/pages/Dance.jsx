import React, { useState, useEffect } from "react";
import Legacy from "./dance/Legacy";
import MLH from "./dance/MLH";
import UNS from "./dance/UNS";
import XTRM from "./dance/XTRM";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Dance() {
  const [activeTab, setActiveTab] = useState("Legacy");
  const [fadeKey, setFadeKey] = useState(0); 

  const renderTab = () => {
    switch (activeTab) {
      case "Legacy":
        return <Legacy />;
      case "MLH":
        return <MLH />;
      case "UNS":
        return <UNS />;
      case "XTRM":
        return <XTRM />;
      default:
        return null;
    }
  };

  // every time activeTab changes, increment fadeKey
  useEffect(() => {
    setFadeKey((prev) => prev + 1);
  }, [activeTab]);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 fade-in">
      <h1 className="text-3xl font-bold text-grayscale-200 mb-4">Dance Projects</h1>
      <p className="text-grayscale-50 mb-6">
        This page contains a comprehensive breakdown of all of the projects I have been involved with as a dancer, cover leader, or choreographer.
        Click the tabs below to explore videos and highlights from each group. For a CV file of the information below, please{" "}
        <a href="../public/dance_cv.pdf" className="underline hover:opacity-80" target="_blank" rel="noopener noreferrer">
          click here
        </a>
        .
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 sm:gap-6 border-b border-gray-600 mb-6 justify-center sm:justify-start">
        {["Legacy", "MLH", "UNS", "XTRM"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-lg font-semibold transition-colors ${
              activeTab === tab
                ? "text-grayscale-200 border-b-2 border-white"
                : "text-grayscale-400 hover:text-grayscale-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content area with fade animation */}
      <div
        key={fadeKey} // ensures re-render to trigger fade
        className="fade-in"
      >
        {renderTab()}
      </div>
      <ScrollToTopButton />
    </section>
  );
}
