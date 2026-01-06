import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>Charan Chandu</h1>
      <h3>MERN Stack Developer</h3>

      <div className="header-info">
        <span>📧 charanchandu@gmail.com</span>
        <span>📞 +91 7679363088</span>
        <span>📍 Chengalpattu, TN</span>
      </div>

      <div className="header-links">
        <a href="https://github.com/charan1147">GitHub</a>
        <a href="#">Portfolio</a>
      </div>
    </header>
  );
};

export default Header;
