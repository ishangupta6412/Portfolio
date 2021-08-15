import React from 'react';

function SocialLinks (props) {
    return (
      <div className="social">
        <a
          href="https://twitter.com/ishangupta641"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Twitter profile"
        >
          {' '}
          <i className="fab fa-twitter" />
        </a>
        <a
          id="profile-link"
          href="https://github.com/ishangupta6412"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's GitHub Profile"
        >
          {' '}
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100011038712583"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Codepen Profile"
        >
          {' '}
          <i className="fab fa-facebook" />
        </a>
        <a
          href="https://www.instagram.com/ishangupta641/z"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Codepen Profile"
        >
          {' '}
          <i className="fab fa-instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/ishan-gupta-0652611b8/"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Codepen Profile"
        >
          {' '}
          <i className="fab fa-linkedin" />
        </a>
      </div>
    );
  };
  
export default SocialLinks; 