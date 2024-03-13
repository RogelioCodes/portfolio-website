import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import '../styles/intro.scss';

const IntroComponent: React.FC = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ['<i>programmer</i>.', 'rock climber.', 'surfer.', 'photographer'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="intro" id="home">
      <h1 className="h1">Hello, I'm a <span className="animate" ref={el}></span></h1>
      <p className="introSubtext">
        Software Engineer with a passion for web development, automating the boring stuff, and data visualization.
      </p>
    </div>
  );
};

export default IntroComponent;