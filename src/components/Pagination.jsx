// src/components/Pagination.jsx
import React from "react";

export default function Pagination({ current, total, onChange }) {
  const pages = [];
  for (let i = 1; i <= total; i++) pages.push(i);

  return (
    <div className="flex gap-2 items-center">
      <button onClick={() => onChange(Math.max(1, current - 1))} className="px-2 py-1 rounded border">Prev</button>
      {pages.map((p) => (
        <button key={p} onClick={() => onChange(p)} className={`px-3 py-1 rounded border ${p === current ? "font-semibold" : ""}`}>{p}</button>
      ))}
      <button onClick={() => onChange(Math.min(total, current + 1))} className="px-2 py-1 rounded border">Next</button>
    </div>
  );
}
