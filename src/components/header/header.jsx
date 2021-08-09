import React from 'react';
import './header.css'

function Header(props) {
    return (
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="container">
          <h1>
            {/* <span className="line">Hey! </span> */}
            {/* <span className="line">I am a Web Developer</span> */}
            <span className="line">
            <span className="line">Hey! </span>
            <span className="line">I am a Web Developer</span>
              <span className="color">&</span> a Graphic Designer.
            </span>
          </h1>
          <div className="buttons">
            <a href="#projects">my portfolio</a>
            <a href="#contact" className="cta">
              get in touch
            </a>
          </div>
        </div>
      </header>
    );
  };

  export default Header;