import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FriendsNoMatterWhen.scss';

const FriendsNoMatterWhenPage: React.FC = () => {
  return (
    <main className="friends-post">
      <section className="friends-post-hero" aria-labelledby="friends-post-title">
        <div className="container friends-post-hero-container">
          <h1 id="friends-post-title">we would've been friends no matter when we met</h1>

          <figure className="friends-post-image">
            <img
              src="/photography/highlights/web/20241017_222914.jpg"
              alt="Friends walking together at night"
            />
          </figure>
        </div>
      </section>

      <section className="friends-post-body" aria-label="Essay">
        <div className="container friends-post-body-container">
          <p>
            Some of my favorite nights don't have a plan. Just a walk, no destination, talking
            about nothing and everything until you look up and realize you've circled the block
            three times.
          </p>

          <p>This photo came from one of those nights.</p>

          <p>
            We were walking past this old strip mall, the kind with a vacuum repair shop still
            lit up at night for no reason, and I remember thinking about how random it was that
            we even knew each other. Different schools, different circles, different everything
            that usually decides who ends up in your life. If the timing had been even slightly
            off, we probably never cross paths.
          </p>

          <p>
            But some friendships don't feel like a coincidence. They feel inevitable, like the
            two of you were always headed toward the same spot on the map no matter which road
            you took to get there.
          </p>

          <p>
            That's what I wanted this photo to hold. Two shapes, no faces, walking past a sign
            that's been glowing over that sidewalk longer than either of us has known the other.
            Because for some friends, it really doesn't matter what stage of life we met at.
            Middle school, college, some random Tuesday in our thirties, it wouldn't have
            mattered.
          </p>

          <p>I think we would've been friends no matter when we met.</p>

          <Link to="/writing" className="friends-post-back-link">
            Back to writing
          </Link>
        </div>
      </section>
    </main>
  );
};

export default FriendsNoMatterWhenPage;
