// src/pages/Projects.jsx
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../data/projects.json";
import FlipCard from "../components/FlipCard.jsx";
import { FaListUl, FaThLarge } from "react-icons/fa";

export default function Projects() {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("newest");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [skillFilter, setSkillFilter] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 9;
  const [openDropdown, setOpenDropdown] = useState(null);

  const allCategories = [...new Set(projectsData.projects.map(p => p.category))].sort();
  const allSkills = [...new Set(projectsData.projects.flatMap(p => p.skills))].sort();

  const sortedFilteredProjects = useMemo(() => {
    let filtered = [...projectsData.projects];
    if (categoryFilter.length)
      filtered = filtered.filter(p => categoryFilter.includes(p.category));
    if (skillFilter.length)
      filtered = filtered.filter(p => p.skills.some(s => skillFilter.includes(s)));
    switch (sort) {
      case "a-z":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "oldest":
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      default:
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    return filtered;
  }, [sort, categoryFilter, skillFilter]);

  const paginatedProjects = useMemo(() => {
    const start = (page - 1) * perPage;
    return sortedFilteredProjects.slice(start, start + perPage);
  }, [sortedFilteredProjects, page]);

  const totalPages = Math.ceil(sortedFilteredProjects.length / perPage);

  const toggleFilter = (type, value) => {
    const stateSetter = type === "category" ? setCategoryFilter : setSkillFilter;
    const current = type === "category" ? categoryFilter : skillFilter;
    stateSetter(
      current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value]
    );
  };

  useEffect(() => {
    const closeDropdowns = e => {
      if (!e.target.closest(".dropdown")) setOpenDropdown(null);
    };
    window.addEventListener("click", closeDropdowns);
    return () => window.removeEventListener("click", closeDropdowns);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 text-white fade-in">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Projects</h1>
      </div>

      {/* DESCRIPTION */}
      <p className="mb-6 text-gray-300 max-w-2xl">
        Browse through my collection of projects. Use the filters and view options to explore by category, skills, or layout preference.
      </p>

      {/* VIEW TOGGLE SWITCH */}
      <div className="flex flex-wrap items-center border border-white/30 rounded-full overflow-hidden w-max mb-6">
        <button
          onClick={() => setView("grid")}
          className={`relative px-4 py-2 flex items-center gap-2 ${
            view === "grid" ? "text-black" : "text-white"
          }`}
        >
          {view === "grid" && (
            <motion.div
              layoutId="highlight"
              className="absolute inset-0 bg-white rounded-full z-0"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <FaThLarge className="z-10" />
          <span className="z-10">Grid</span>
        </button>
        <button
          onClick={() => setView("list")}
          className={`relative px-4 py-2 flex items-center gap-2 ${
            view === "list" ? "text-black" : "text-white"
          }`}
        >
          {view === "list" && (
            <motion.div
              layoutId="highlight"
              className="absolute inset-0 bg-white rounded-full z-0"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <FaListUl className="z-10" />
          <span className="z-10">List</span>
        </button>
      </div>

      {/* SORT + FILTERS */}
      <div className="flex flex-wrap gap-4 mb-8 items-center">

        {/* Sort */}
        <div className="relative dropdown">
          <button
            onClick={e => {
              e.stopPropagation();
              setOpenDropdown(openDropdown === "sort" ? null : "sort");
            }}
            className="border border-white/40 px-4 py-2 rounded flex items-center justify-between gap-2 w-50"
          >
            {/* Display current sort option instead of static text */}
            <span>
              {sort === "newest"
                ? "Newest → Oldest"
                : sort === "oldest"
                ? "Oldest → Newest"
                : sort === "a-z"
                ? "A → Z"
                : "Z → A"}
            </span>
            <span>{openDropdown === "sort" ? "▲" : "▼"}</span>
          </button>

          <AnimatePresence>
            {openDropdown === "sort" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute mt-2 w-48 text-white rounded-lg shadow-lg z-50"
              >
                <div className="absolute top-full left-0 mt-2 bg-gray-700 border border-white/30 rounded w-44 z-10">
                  {["newest", "oldest", "a-z", "z-a"].map(opt => (
                    <button
                      key={opt}
                      onClick={() => {
                        setSort(opt);
                        setOpenDropdown(null);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-900 ${
                        sort === opt ? "bg-gray-800" : ""
                      }`}
                    >
                      {opt === "newest"
                        ? "Newest → Oldest"
                        : opt === "oldest"
                        ? "Oldest → Newest"
                        : opt === "a-z"
                        ? "A → Z"
                        : "Z → A"}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Category Filter */}
        {["category", "skill"].map(type => (
          <div key={type} className="relative dropdown">
            <button
              onClick={e => {
                e.stopPropagation();
                setOpenDropdown(openDropdown === type ? null : type);
              }}
              className="border border-white/40 px-4 py-2 rounded flex items-center justify-between gap-2 w-52"
            >
              {type === "category" ? "Category" : "Skills"}
              <span>{openDropdown === type ? "▲" : "▼"}</span>
            </button>

            <AnimatePresence>
              {openDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute mt-2 w-48 text-white rounded-lg shadow-lg z-50"
                >
                  {openDropdown === type && (
                    <div className="absolute top-full left-0 mt-2 bg-gray-700 border border-white/30 rounded w-64 z-20 p-4">
                      <div className="max-h-48 overflow-y-auto pr-2 space-y-1">
                        {(type === "category" ? allCategories : allSkills).map(item => (
                          <label key={item} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={
                                type === "category"
                                  ? categoryFilter.includes(item)
                                  : skillFilter.includes(item)
                              }
                              onChange={() => toggleFilter(type, item)}
                            />
                            {item}
                          </label>
                        ))}
                      </div>

                      <div className="flex justify-between mt-4">
                        <button
                          onClick={() =>
                            type === "category"
                              ? setCategoryFilter([])
                              : setSkillFilter([])
                          }
                          className="px-3 py-1 border rounded"
                        >
                          Clear
                        </button>
                        <button
                          onClick={() => setOpenDropdown(null)}
                          className="px-3 py-1 bg-white text-black rounded"
                        >
                          Show Results
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <AnimatePresence mode="wait">
        {view === "grid" ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {paginatedProjects.map(p => (
              <FlipCard key={p.id} project={p} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="overflow-x-auto">
                <table className="w-full border-collapse mt-4">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="p-3 text-left">Title</th>
                      <th className="p-3 text-left">Description</th>
                      <th className="p-3 text-left">Category</th>
                      <th className="p-3 text-left">Skills</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedProjects.map(p => (
                      <tr
                        key={p.id}
                        className="border-b border-white/10 hover:bg-white/10 cursor-pointer"
                        onClick={() => (window.location.href = `/projects/${p.id}`)}
                      >
                        <td className="p-3">{p.title}</td>
                        <td className="p-3">{p.short}</td>
                        <td className="p-3">{p.category}</td>
                        <td className="p-3 flex flex-wrap gap-2">
                          {p.skills.map(skill => (
                            <span
                              key={skill}
                              className="px-3 py-1 border rounded-full text-white border-white/50 text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
