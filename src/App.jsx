import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Dance from "./pages/Dance";
import NoPageFound from "./pages/NoPageFound";
import ProjectPage from "./pages/ProjectPage";
import TopOfPage from "./components/TopOfPage";

export default function App() {
  return (
    <Router>
      <TopOfPage>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
              <Route path="/dance" element={<Dance />} />
              <Route path="*" element={<NoPageFound />} />
            </Routes>
          </main>
          <footer className="text-center py-4 text-sm text-grayscale-100">
            &copy; {new Date().getFullYear()} Justin Lim
          </footer>
        </div>
      </TopOfPage>
    </Router>
  );
}
