import React from "react";

export default function Academic() {
  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-bold mb-2 text-grayscale-200">Academic Experience</h1>

      <hr className="mb-4"></hr>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold">Stanford University</h3>
          <p className="font-medium">Management Science & Engineering B.S. - Operations & Analytics Concentration</p>
          <p className="text-sm italic">2021 — 2025</p>
          <p className="mt-1"><strong>Minor: </strong> Data Science</p>
          <p className="mt-1"><strong>Relevant Coursework: </strong></p>
          <grid className="grid grid-cols-1 sm:grid-cols-3 gap-1 mb-4">
            <ul className="list-disc list-inside">
              <li>Linear Algebra</li>
              <li>Trust and Safety Engineering</li>
              <li>Economic Analysis</li>
              <li>Stochastic Modeling</li>
              <li>Statistical Learning</li>
              <li>Fundamentals of Data Science</li>
              <li>Game Theory</li>
              <li>Organization Management Theory</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>Programming Methodology</li>
              <li>Economic Principles</li>
              <li>Optimization</li>
              <li>Social Networks</li>
              <li>Applied Statistics</li>
              <li>Operations Management</li>
              <li>Managing Data Science Organizations</li>
              <li>Game Theory, Data Science, and AI</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>Solid Mechanics</li>
              <li>Matrix Methods</li>
              <li>Probability</li>
              <li>Programming in R</li>
              <li>Building AI Organizations</li>
              <li>Statistics for Health Sciences</li>
              <li>Accounting for Entrepreneurs</li>
              <li>Development in Early Childhood</li>
            </ul>
          </grid>
          <p className="mt-1"><strong>Activities: </strong></p>
          <grid className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            <ul className="list-disc list-inside">
              <li>Asian American Students' Association - AASA (2021-2025)</li>
              <li>Cambodian Students Association - CamSA (2021-2025)</li>
              <li>Undergraduate Chinese American Association (2021-2023)</li>
              <li>Stanford XTRM (2021-2023)</li>
              <li>UNS Dance (2023-2025)</li>
              <li>Stanford Data and Mapping Society - DAMS (2024-2025)</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>Legacy Dance (2022-2025)</li>
              <li>Stanford Mua Lac Hong - MLH (2021-2025)</li>
              <li>Stanford Vietnamese Students Association (2021-2025)</li>
              <li>Stanford Lao Laotian Student Union (2023-2025)</li>
              <li>Stanford Undergraduate Research Association (2021-2022)</li>
            </ul>
          </grid>
        </div>

        <hr></hr>

        <div>
          <h3 className="text-lg font-bold">Long Beach Polytechnic High School</h3>
          <p className="font-medium">High School Diploma</p>
          <p className="text-sm italic">2017 — 2021</p>
          <p className="mt-1"><strong>Pathway: </strong> Program of Additional Curricular Experience - PACE</p>
          <p className="mt-1"><strong>Activities: </strong></p>
          <grid className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            <ul className="list-disc list-inside">
              <li>Poly UNICEF (2017-2021)</li>
              <li>PACE Mentorship Program (2019-2021)</li>
              <li>Varsity Swim (2017-2019)</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>Poly Model United Nations (2018-2021)</li>
              <li>Poly Math Team (2018-2021)</li>
              <li>Speech and Debate (2017-2019)</li>
            </ul>
          </grid>
        </div>
      </div>
    </div>
  );
}
