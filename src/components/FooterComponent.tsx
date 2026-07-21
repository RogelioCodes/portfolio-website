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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToTop();
    const el = e.currentTarget as HTMLElement;
    // add a short-lived class so the link turns accent briefly
    el.classList.add('js-clicked');
    window.setTimeout(() => el.classList.remove('js-clicked'), 200);
    // blur immediately to avoid mobile keeping it focused
    el.blur();
  };

  return (
    <footer className={`site-footer ${isDarkPage ? 'site-footer-dark' : ''}`}>
      <div className="container site-footer-container">
        <div className="site-footer-nav">
          <Link to="/" className="site-footer-logo" aria-label="Home" onClick={scrollToTop}>
            <img src={me} alt="" aria-hidden="true" loading="lazy" />
          </Link>
          <nav aria-label="Footer">
            <Link to="/engineering" onClick={handleLinkClick}>Engineering</Link>
            <Link to="/photography" onClick={handleLinkClick}>Photography</Link>
            <Link to="/writing" onClick={handleLinkClick}>Writing</Link>
            <Link to="/about" onClick={handleLinkClick}>About</Link>
            <Link to="/work-with-me" onClick={handleLinkClick}>Inquire</Link>
            <Link to="/hello" onClick={handleLinkClick}>Hello</Link>
          </nav>
          <p className="site-footer-location">Based in Oakland, California</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
