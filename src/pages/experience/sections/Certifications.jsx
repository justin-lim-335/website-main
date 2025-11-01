import React from "react";

export default function Certifications() {
  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-bold mb-2 text-grayscale-200">Awards</h1>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold">Award of Excellence (<i>2025</i> )</h3>
          <h2 className="text-lg font-bold italic">Issued by Stanford University</h2>
          <p className="mt-1">The Award of Excellence is presented to approximately 10% of graduating seniors. Acknowledges graduating seniors who have helped make the university better by going above and beyond their academic pursuits and truly putting their heart into our campus and diverse communities.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">President's Volunteer Service Award (<i>2021</i> )</h3>
          <h2 className="text-lg font-bold italic">Issued by The White House</h2>
          <p className="mt-1">Through my work and the hours I have dedicated as a National Council Member for the UNICEF Clubs Program, I have received the President's Volunteer Service Award. This is a demonstration of countless hours toward uplifting the right to education for every child and supporting children all around the world.</p>
        </div>
      </div>
      <hr className="mt-4 mb-4"></hr>
      <h1 className="text-3xl font-bold mb-2 text-grayscale-200">Certifications</h1>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold">Google Data Analytics Professional Certificate (<i>2025</i> )</h3>
          <h2 className="text-lg font-bold italic">Issued by Coursera x Google</h2>
          <p className="mt-1">This certification indicates completion of eight courses that were developed by Google to indicate an ability to handle introductory-level roles in Data Analytics. The certification covers the entire process from preparation to processing, then analysis, and finally communication. My abilities in Excel, SQL, Tableau, and R are affirmed through the following courses under the certification:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Foundations: Data, Data, Everywhere</li>
            <li>Ask Questions to Make Data-Driven Decisions</li>
            <li>Prepare Data for Exploration</li>
            <li>Process Data from Dirty to Clean</li>
            <li>Analyze Data to Answer Questions</li>
            <li>Share Data Through the Art of Visualization</li>
            <li>Data Analysis with R Programming</li>
            <li>Google Data Analytics Capstone: Complete a Case Study</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Google Project Management Professional Certificate (<i>2023</i> )</h3>
          <h2 className="text-lg font-bold italic">Issued by Coursera x Google</h2>
          <p className="mt-1">This certification indicates completion of six courses developed by Google that indicate the ability to succeed in entry-level project management roles. The courses cover all stages in the project management process from initiation to execution and debriefing. My abilities in different workplace tools and project management applications are guaranteed through the following courses under the certification:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Foundations of Project Management</li>
            <li>Project Initiation: Starting a Successful Project</li>
            <li>Project Planning: Putting It All Together</li>
            <li>Project Execution: Running the Project</li>
            <li>Agile Project Management</li>
            <li>Capstone: Applying Project Management in the Real World</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Human Rights Intensive Study (<i>2019</i> )</h3>
          <h2 className="text-lg font-bold italic">Issued by Stanford High School Summer Session</h2>
          <p className="mt-1">This certification was acquired as a result of my coursework during my time in Stanford's High School Summer Session program. This honor certifies that the student has taken two courses under the respective field and has attended a seminar about future advances in Human Rights</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Technology and Innovation Intensive Study (<i>2019</i> )</h3>
          <h2 className="text-lg font-bold italic">Issued by Stanford High School Summer Session</h2>
          <p className="mt-1">This certification was acquired as a result of my coursework during my time in Stanford's High School Summer Session program. This honor certifies that the student has taken two courses under the respective field and has attended a seminar about future advances in Technology and Innovation.</p>
        </div>
      </div>
    </div>
  );
}
