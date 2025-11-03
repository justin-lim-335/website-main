// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/dance", label: "Dance" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // close on outside click or Escape key
  useEffect(() => {
    function onDoc(e) {
      if (e.key === "Escape") setOpen(false);
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target) && !e.target.closest("#nav-hamburger")) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("touchstart", onDoc);
    document.addEventListener("keydown", onDoc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("touchstart", onDoc);
      document.removeEventListener("keydown", onDoc);
    };
  }, []);

  return (
    <nav className="bg-grayscale-500 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* name (always visible, links to home) */}
        <Link to="/" className="text-lg font-semibold text-grayscale-50">
          Justin Lim
        </Link>

        {/* desktop links */}
        <ul className="hidden md:flex space-x-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-grayscale-50 font-bold border-b-2 border-grayscale-50 pb-1"
                    : "text-grayscale-100 hover:text-grayscale-200"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            id="nav-hamburger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded border border-white/10 text-grayscale-50"
          >
            {/* simple animated hamburger */}
            <span className="sr-only">Menu</span>
            <div className="w-6 h-5 relative">
              <span
                className={`block absolute left-0 right-0 h-[2px] bg-current transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : "translate-y-0"}`}
              />
              <span
                className={`block absolute left-0 right-0 h-[2px] bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
                style={{ top: "50%", transform: "translateY(-50%)" }}
              />
              <span
                className={`block absolute left-0 right-0 h-[2px] bg-current transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : "translate-y-0"}`}
                style={{ bottom: 0 }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* mobile dropdown (animated via simple CSS transitions) */}
      <div
        ref={menuRef}
        className={`md:hidden bg-grayscale-700 border-t border-white/5 transition-maxh overflow-hidden ${open ? "max-h-96" : "max-h-0"}`}
        style={{ transition: "max-height 300ms ease" }}
      >
        <ul className="flex flex-col px-4 py-3 space-y-2">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block w-full px-3 py-2 rounded ${isActive ? "bg-white/5 font-semibold" : "hover:bg-white/3"}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
