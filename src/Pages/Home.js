import React from "react";
import "../styleSheet/Home.css";
import profilePhoto from "../assets/profile-photo.png";

function Home() {
  return (
    <div className="homepage-container">
      <img className="homepage-photo" src={profilePhoto} alt="Profile" />
      <h1 className="homepage-name">Rabih Nader</h1>
      <h2 className="homepage-headline">Web Developer</h2>
      <div className="homepage-section">
        <h3 className="homepage-section-title">Skills</h3>
        <p className="homepage-section-content">React, Node.js, CSS, HTML, etc.</p>
      </div>
      <div className="homepage-section">
        <h3 className="homepage-section-title">Achievements</h3>
        <p className="homepage-section-content">Built a successful e-commerce website for a local business.</p>
      </div>
      <button className="homepage-button">Contact Me</button>
    </div>
  );
}

export default Home;
