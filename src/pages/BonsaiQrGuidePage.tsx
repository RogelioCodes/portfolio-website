import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BonsaiQrGuide.scss';

const BonsaiQrGuidePage: React.FC = () => {
  return (
    <main className="bonsai-case-study">
      <section className="bonsai-editorial-hero" aria-labelledby="bonsai-title">
        <div className="container bonsai-editorial-container">
          <div className="bonsai-editorial-copy">
            <span className="bonsai-status">In progress</span>
            <h1 id="bonsai-title">Oakland Bonsai Garden QR Tree Guide</h1>
            <p>
              A volunteer-built guide system for helping garden visitors learn the story,
              species, care notes, and context behind individual bonsai trees through simple QR
              codes and lightweight static pages.
            </p>
          </div>

          <figure className="bonsai-editorial-image">
            <img
              src="/photography/highlights/web/DSCF8161.jpg"
              alt="A bonsai tree displayed in the Oakland Bonsai Garden"
            />
            <figcaption>Oakland Bonsai Garden, early prototype reference</figcaption>
          </figure>
        </div>
      </section>

      <section className="bonsai-overview" aria-label="Project overview">
        <div className="container bonsai-overview-container">
          <div className="bonsai-overview-note">
            <span>Current state</span>
            <p>
              This project is still early. I am shaping the content model, static page structure,
              QR code workflow, and maintenance plan before attaching anything in the garden.
            </p>
          </div>

          <div className="bonsai-overview-copy">
            <h2>The idea</h2>
            <p>
              As a docent, I often talk with visitors who want to know more about the trees in
              front of them: where they came from, how they are styled, what species they are,
              and why their age or care history matters. The QR guide is meant to make that
              information available in the moment without requiring a heavy app or complicated
              infrastructure.
            </p>
            <p>
              Each code will point to a small static page for a specific tree. The pages can be
              fast, accessible, and easy to host, while still leaving room for photos, historical
              notes, and volunteer-maintained updates.
            </p>
          </div>
        </div>
      </section>

      <section className="bonsai-design-grid" aria-label="Project focus areas">
        <div className="container bonsai-design-grid-container">
          <article>
            <span>01</span>
            <h2>Visitor-first pages</h2>
            <p>
              Short, readable entries designed for people standing in the garden with a phone in
              one hand.
            </p>
          </article>
          <article>
            <span>02</span>
            <h2>Static publishing</h2>
            <p>
              A simple static site keeps hosting cheap, fast, and durable without a backend or
              database requirement.
            </p>
          </article>
          <article>
            <span>03</span>
            <h2>Docent-friendly upkeep</h2>
            <p>
              The long-term goal is a workflow that volunteers can maintain without needing to
              touch application code.
            </p>
          </article>
        </div>
      </section>

      <section className="bonsai-next" aria-labelledby="bonsai-next-title">
        <div className="container bonsai-next-container">
          <h2 id="bonsai-next-title">What I am working through next</h2>
          <ul>
            <li>Defining the tree page schema and required fields.</li>
            <li>Designing a page template that works well outdoors on mobile screens.</li>
            <li>Testing QR label placement and print durability.</li>
            <li>Planning a low-friction update workflow for garden volunteers.</li>
          </ul>
          <Link to="/engineering" className="bonsai-back-link">
            Back to engineering
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BonsaiQrGuidePage;
