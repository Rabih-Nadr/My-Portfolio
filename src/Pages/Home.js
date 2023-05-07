// Home.js

import React from "react";
import "../styleSheet/Home.css";

function Home() {
  return (
    <div className="homepage-container">
      <div className="content">
        <div className="profile-photo"></div>
        <div className="bio">
        <p>Summary of my skills and achievements.</p>
        <h2>Web Developer</h2>
        <h1>Rabih Nader</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;

