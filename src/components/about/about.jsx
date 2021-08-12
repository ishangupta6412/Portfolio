import React from 'react';
import './about.css'

function About (props) {
    return (
      <section id="about">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>Who's this guy?</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <h4 className="subtitle">My name is Ishan.</h4>
              <p>
                I am a web developer and graphic designer based in the beautiful City of Kashi (Varanasi),
                India.
              </p>
              <p>
                I really enjoy solving problems as well as making things pretty and easy to use. I
                can't stop learning new things; the more, the better. I also love playing flute and trying
                to be spiritual.
              </p>
            </div>
            <div className="title">
              <h3>What does he do?</h3>
              <p className="separator" />
            </div>
            <div className="desc">
              <h4 className="subtitle">I'm a programmer.</h4>
              <p>
                For the front-end I usually work with HTML and Javascript, either standalone or including
                popular frameworks like ReactJS. I also make the web pretty by using Sass,
                CSS and, whenever needed, any of their friends: Bootstrap, Tailwind, etc.
              </p>
              <p>
                For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). 
              </p>
            </div>
            <div className="desc">
              <h4 className="subtitle">Also a designer.</h4>
              <p>
                I feel comfortable working with many Adobe products like Photoshop and Illustrator. I'm
                not limited to them, though: Canva, Gimp, Inkscape or Figma are also very valid applications
                that I've been working with.
              </p>
              <p>
                User interfaces, brochures, books, branding... You name it! As I mentioned, creating
                pretty things is particularly important for me.
              </p>
            </div>
          </article>
        </div>
      </section>
    );
  };

export default About;