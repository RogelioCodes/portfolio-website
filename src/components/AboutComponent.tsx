import React from 'react';
import '../styles/About.scss';
import me from '../assets/images/Untitled-2.svg';
import capabilitiesPhoto from '../assets/images/selfie.jpg';
import joshuaTreeViews from '../assets/images/joshua_tree_views.jpg';
import contactPhoto from '../assets/images/mail.jpg'

const AboutComponent: React.FC = () => {
  return (
    <>
      <section id="about-section">
        <div className="container about-container">
          <div className="about-me-container" id="about-me-container">
            <h2>
              About Me
            </h2>
            <div className="about-text">
              <p>Hey there, it's great to see you today.</p>
              <p>I'm Rogelio - a software engineer interested in building reliable systems, thoughtful tools, and data infrastructure that helps people make better decisions.</p>
              <p>Recently, I worked on firmware observability and telemetry systems at Lytx, helping teams understand device behavior across hundreds of thousands of connected devices. Before that, I built infrastructure automation and internal platforms at Viasat, making complex storage and cloud workflows faster and easier to use.</p>
              <p>Outside of work, I'm into photography, surfing, climbing, and exploring creative ways to move data across the digital world.</p>
            </div>
          </div>
          <div className="personal-img">
            <img
              src={me}
              height="560px"
              width="630px"
              alt="guy with laptop on a desk"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="capabilities-section" aria-labelledby="capabilities-title">
        <div className="container capabilities-container">
          <div className="capabilities-copy">
            <h2 id="capabilities-title">My capabilities</h2>
            <ul>
              <li>Software engineering</li>
              <li>Data infrastructure</li>
              <li>Observability systems</li>
              <li>Internal tools</li>
              <li>Cloud automation</li>
              <li>Photography</li>
            </ul>
          </div>

          <figure className="capabilities-visual">
            <img
              src={capabilitiesPhoto}
              alt="Rogelio at an amusement park swing ride"
              loading="lazy"
            />
            <figcaption>How I spend my time</figcaption>
          </figure>
        </div>
      </section>

      <section className="hometown-section">
        <div className="container hometown-container">
          <figure className="hometown-visual">
            <img
              src={joshuaTreeViews}
              alt="Joshua Tree desert landscape"
              loading="lazy"
            />
            <figcaption>Where I grew up</figcaption>
          </figure>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="contact-title">
        <div className="container contact-container">
          <div className="contact-copy">
            <h2 id="contact-title">Don't be a stranger</h2>
            <ul>
              <li>
                <a href="mailto:rogelio.bolo.cordova@gmail.com">Email</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rogelio-cordova-codes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/RogelioCodes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rogeliobolo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <figure className="contact-visual">
            <img
              src={contactPhoto}
              alt="A trail in a forest with the sun shining through the trees"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="about-note-section" aria-label="About this website">
        <div className="container about-note-container">
          <p>
            This website was developed by hand and computer by Rogelio Cordova.
            Thanks for visiting.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
