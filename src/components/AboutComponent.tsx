import '../styles/About.scss';
import me from '../assets/images/Untitled-2.svg';
import React from 'react';

const AboutComponent: React.FC = () => {
  return (
    <section id="about-section">
      <div className="about-container">
        <div className="about-me-container" id="about-me-container">
          <h2>
            <span>About</span> Me
          </h2>
          <p>
            I'm a software engineer who graduated from Cal State San Marcos and I am currently looking for work. 
            Throughout these past few years, I've been diving deeper into web development and data visualization. 
            I'm a creative person at heart, so these things naturally caught my interest.  
            When I'm not immersed in code, you'll often find me catching waves as I am an avid surfer. 
            Beyond the digital realm, my passion for outdoor adventures extends to things like rock climbing and gardening.
            Last but not least, I love capturing the beauty of seemingly insignificant moments through the art of photography.
          </p>
        </div>
        <div className="personal-img">
          <img
            src={me}
            height="250px"
            width="350px"
            alt="guy with laptop on a desk"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;