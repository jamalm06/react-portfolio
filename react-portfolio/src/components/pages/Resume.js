import React from "react";

function Resume() {
  return (
    <div className="resume">
      <h2 className="resume-header">My Resume</h2>
      <a href="./files/" className="resume-download" download="Muhammad Jamal Resume"> 
      <h4>Download My Resume from Here</h4>
      </a>
      

      <h3 className="resume-items">Front-end Proficiencies:</h3>

      <ul className="resume-items">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h3 className="resume-items">Back-end Proficiencies</h3>
      <ul className="resume-items">
        <li>Node</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
}

export default Resume;