import React, { useEffect, useState } from 'react';
import '../styles/Hello.scss';
import { Lightbulb } from 'lucide-react';

const HelloComponent: React.FC = () => {
  const [lightMode, setLightMode] = useState(true);

  useEffect(() => {
    document.body.classList.add('hello-route');
    return () => document.body.classList.remove('hello-route');
  }, []);

  useEffect(() => {
    document.body.classList.toggle('hello-route-light', lightMode);
    return () => document.body.classList.remove('hello-route-light');
  }, [lightMode]);

  return (
    <main className={`hello-page ${lightMode ? 'hello-page-light' : ''}`}>
      <section className="hello-section" aria-labelledby="hello-title">
        <div className="container hello-container">
          <div className="hello-copy">
            <h1 id="hello-title">Well hello there friend!</h1>
            <p>
              You never really know where a conversation leads. 
              Some of my best friendships, opportunities, and ideas started 
              with someone just saying hello — so I figure the least I can do is make it easy.
            </p>
            
            <p>
              Feel free to{' '}
              <a href="mailto:rogelio.bolo.cordova@gmail.com">email me</a>, or
              find me around the internet.
            </p>

            <div className="hello-lights-row">
              <p>Oh, and please turn the lights off on your way out!</p>
              <button
                className="hello-light-toggle"
                type="button"
                aria-label={lightMode ? 'Turn the lights off' : 'Turn the lights on'}
                aria-pressed={!lightMode}
                onClick={() => setLightMode((current) => !current)}
              >
                <Lightbulb size={24} aria-hidden="true" />
              </button>
            </div>
          </div>

          <nav className="hello-links" aria-label="Contact links">
            <a href="mailto:rogelio.bolo.cordova@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/rogelio-cordova-codes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/RogelioCodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/rogeliobolo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </nav>
        </div>
      </section>
    </main>
  );
};

export default HelloComponent;
