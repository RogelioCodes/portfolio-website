import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Footer.scss';
import me from '../assets/images/Untitled-2.svg';

const FooterComponent: React.FC = () => {
  const location = useLocation();
  const isDarkPage = location.pathname.startsWith('/writing/');
  const scrollToTop = () => {
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    html.style.scrollBehavior = previousScrollBehavior;
  };

  return (
    <footer className={`site-footer ${isDarkPage ? 'site-footer-dark' : ''}`}>
      <div className="container site-footer-container">
        <div className="site-footer-nav">
          <Link to="/" className="site-footer-logo" aria-label="Home" onClick={scrollToTop}>
            <img src={me} alt="" aria-hidden="true" loading="lazy" />
          </Link>
          <nav aria-label="Footer">
            <Link to="/" onClick={scrollToTop}>Home</Link>
            <Link to="/engineering" onClick={scrollToTop}>Engineering</Link>
            <Link to="/photography" onClick={scrollToTop}>Photography</Link>
            <Link to="/writing" onClick={scrollToTop}>Writing</Link>
            <Link to="/about" onClick={scrollToTop}>About</Link>
            <Link to="/hello" onClick={scrollToTop}>Hello</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
