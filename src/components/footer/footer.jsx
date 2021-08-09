import React from 'react';
import './footer.css';

import SocialLinks from './social-links/social-links.jsx'

function Footer (props) {
    return (
      <footer>
        <div className="wrapper">
          <h3>THANKS FOR VISITING</h3>
          <p>© {new Date().getFullYear()} Ishan Gupta.</p>
          <SocialLinks />
        </div>
      </footer>
    );
  };

export default Footer;