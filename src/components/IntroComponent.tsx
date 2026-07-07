import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import '../styles/intro.scss';

const IntroComponent: React.FC = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ['<i>surfer</i>.', 'rock climber.', 'photographer.', 'programmer.'],
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
        Software Engineer with a passion for data infrastructure, observability, and building tools that make complex systems easier to understand.
      </p>
    </div>
  );
};

export default IntroComponent;
