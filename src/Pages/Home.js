import React from "react";
import "../styleSheet/Home.css";

function Home() {
  return (
    <div className="homepage-container">
      <div className="content">
        <div className="profile-photo"></div>
        <div className="bio">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae magna et eros aliquet vulputate ut at velit. Sed tempor ut lorem nec facilisis. Nullam eget scelerisque ante, eget congue massa. Etiam non purus ac tortor faucibus consequat. Aenean a velit nisi. Cras a dui ligula. Sed lobortis nunc vel libero blandit lobortis. Ut lobortis elementum sem et semper.
          </p>
          <h2>Web Developer</h2>
          <h1>Rabih Nader</h1>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
