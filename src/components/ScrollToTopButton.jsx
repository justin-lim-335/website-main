import React, { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smoothly to top when clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Hide button when not visible
  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 px-3 py-2 
        rounded-full border border-grayscale-400 
        text-grayscale-200 bg-grayscale-900/60 
        backdrop-blur hover:bg-grayscale-800 transition-all 
        shadow-lg hover:shadow-xl ${isVisible ? "show" : ""}`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
