import React from 'react';
import '../styles/Socials.scss';
const SocialsComponent: React.FC = () => {
    return (
        <div className="socials" id="socials">
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/rogelio-cordova-codes/"
                        target="_blank"
                        className="linkedin"
                        aria-label="LinkedIn"
                        rel="noopener noreferrer"
                    >
                        LinkedIn<i className="fi-snsuxl-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/RogelioCodes"
                        target="_blank"
                        className="github"
                        aria-label="GitHub"
                        rel="noopener noreferrer"
                    >
                        GitHub<i className="fi-snsuxl-github-alt"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:rogelio.bolo.cordova@gmail.com"
                        target="_blank"
                        className="email"
                        aria-label="Email"
                        rel="noopener noreferrer"
                    >
                        Email<i className="fi-xwsuxl-envelope-solid"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SocialsComponent;