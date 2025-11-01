// components/ResponsiveVideo.jsx
import React from "react";

export default function ResponsiveVideo({ url }) {
  return (
    <div className="video-container" style={{ paddingTop: "56.25%" }}>
      <iframe
        src={url}
        title="Project Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="video-container-video justify-center items-center"
      />
    </div>
  );
}
