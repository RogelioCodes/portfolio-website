import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.scss';
import capabilitiesPhoto from '../assets/images/selfie.jpg';
import joshuaTreeViews from '../assets/images/joshua_tree_views.jpg';
import contactPhoto from '../assets/images/mail.jpg'

const aboutPortrait = '/photography/highlights/web/selfie.png';

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
              <p>Hey there, it&rsquo;s great to see you today.</p>
              <p>
                I&rsquo;m Rogelio—a software engineer, photographer, and freelance web developer
                based in Oakland, California. My work moves between systems, images, and websites,
                driven by the same impulse: to pay close attention, make complicated things easier
                to understand, and create something useful that lasts.
              </p>
              <p>
                As an engineer, I&rsquo;ve built firmware observability and telemetry systems at Lytx,
                helping teams understand hundreds of thousands of connected devices. Before that,
                I developed infrastructure automation and internal platforms at Viasat, simplifying
                complex storage and cloud workflows.
              </p>
              <p>
                Photography gives me another way to practice that attention. I&rsquo;m drawn to the
                people, places, and small moments that are easy to overlook and impossible to
                recreate. I photograph events, portraits, and local businesses with the goal of
                making honest images people will want to return to.
              </p>
              <p>
                My freelance work brings those worlds together. I help people and local businesses
                document what they do and build thoughtful websites that give that work a home—
                sometimes through photography, sometimes through development, and sometimes through
                both.
              </p>
              <p>
                Outside of work, I&rsquo;m usually surfing, climbing, or carrying a camera.
              </p>
            </div>
          </div>
          <div className="personal-img">
            <img
              src={aboutPortrait}
              alt="Rogelio pictured on the screen of a compact camera"
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
              <li>Web design &amp; development</li>
              <li>Event &amp; business photography</li>
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
              <li>
                <Link to="/work-with-me">Project inquiry</Link>
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
