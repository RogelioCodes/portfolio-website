import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Engineering.scss';

const EngineeringComponent: React.FC = () => {
  return (
    <main className="engineering-page">
      <section className="engineering-hero" aria-labelledby="engineering-title">
        <div className="container engineering-hero-container">
          <div className="engineering-intro">
            <h2>What do I do?</h2>
            <p>
              I build backend systems, data infrastructure, and internal tools
              that help teams understand, automate, and improve complex
              workflows.
            </p>
            <p>
              Recently, I worked on firmware observability and telemetry systems
              at Lytx. Before that, I built infrastructure automation and
              storage tooling at Viasat.
            </p>
          </div>
        </div>
      </section>

      <section className="engineering-work" aria-labelledby="featured-work-title">
        <div className="container engineering-work-container">
          <div className="featured-work">
            <h2 id="featured-work-title">Featured work</h2>
            <Link
              to="/engineering/bonsai-qr-guide"
              className="featured-signature-work"
              aria-labelledby="signature-work-title"
            >
              <figure className="featured-signature-image">
                <img
                  src="/photography/highlights/web/DSCF8161.jpg"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              </figure>

              <div className="featured-signature-copy">
                <span className="work-label">In progress</span>
                <h3 id="signature-work-title">Oakland Bonsai Garden QR Tree Guide</h3>
                <p>
                  A volunteer-built guide system for helping garden visitors learn the story,
                  species, care notes, and context behind individual bonsai trees through simple
                  QR codes and lightweight static pages.
                </p>
                <div className="featured-signature-meta" aria-label="Project focus areas">
                  <span>Static web</span>
                  <span>QR codes</span>
                  <span>Visitor education</span>
                  <span>Volunteer project</span>
                </div>
              </div>
            </Link>

            <div className="featured-work-grid">
              <Link to="/engineering/firmware-telemetry" className="featured-work-card">
                <span className="work-label">Observability systems</span>
                <h3>Firmware telemetry at scale</h3>
                <p>
                  Built observability systems for 300K+ IoT devices, turning high-volume telemetry into faster diagnostics, alerting, and fleet-wide visibility.
                </p>
              </Link>

              <Link to="/engineering/storage-workflows" className="featured-work-card">
                <span className="work-label">Infrastructure automation</span>
                <h3>A Control Plane for Enterprise Storage</h3>
                <p>
                  Turning VPN hops, vendor commands, and tribal knowledge into a self-service provisioning platform.

                  
                </p>
              </Link>
            </div>
          </div>

          {/* <div className="recent-work" aria-labelledby="recent-work-title">
            <h2 id="recent-work-title">Recent work</h2>
            <ul>
              <li>
                <a href="https://www.lytx.com/" target="_blank" rel="noopener noreferrer">
                  Firmware observability
                </a>
              </li>
              <li>
                <Link to="/engineering/storage-workflows">
                  Infrastructure automation
                </Link>
              </li>
              <li>
                <Link to="/about">Internal developer tools</Link>
              </li>
              <li>
                <Link to="/engineering/storage-workflows">Storage workflow automation</Link>
              </li>
              <li>
                <Link to="/about">Data tooling and telemetry</Link>
              </li>
            </ul>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default EngineeringComponent;
