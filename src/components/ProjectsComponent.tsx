import React from 'react';
import '../styles/Projects.scss';
const SkillsComponent: React.FC = () => {
 
      function revealProjects() {
        const reveal = document.querySelector<HTMLDivElement>(".reveal");
      
        if (reveal) {
          const windowHeight = window.innerHeight;
          const revealTop = reveal.getBoundingClientRect().top;
          const revealPoint = 150;
      
          if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add("active");
          }
        }
      }
      window.addEventListener("scroll", revealProjects);
    return (
        <section id="projects">
        <div className="header" id="header">
          <h2>My <span>Projects</span></h2>
        </div>

        <div className="container reveal lazy-background">
          <div className="card lazy-background" id="card">
            <div className="card-img card1"></div>
            <div className="card-text">
              <h2>Tic Tac Toe</h2>
              <p>Taught me how to use factory functions and object models to control the display and the logic of the game</p>
              <br></br>
              <p className="made-with">
                <span
                  className="iconify"
                  data-icon="logos:javascript"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:html-5"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:css-3"
                  data-inline="false"
                ></span>
              </p>
              <br />
              
            </div>
            <div className="card-buttons">
              <a
                href="https://rogeliocodes.github.io/tic-tac-toe/"
                target="_blank"
                className="demo"
                ><i className="far fa-eye"></i> Demo</a>
              <a
                href="https://github.com/RogelioCodes/tic-tac-toe"
                target="_blank"
                className="code"
                ><i className="fas fa-code"></i> Code</a>
            </div>
          </div>

          <div className="card lazy-background" id="card">
            <div className="card-img card2"></div>
            <div className="card-text">
              <h2>Etch A Sketch</h2>
              <p>Made this to practice more DOM manipulation in conjunction with styling.</p>
              <br />
              <p className="made-with">
              <span
                  className="iconify"
                  data-icon="logos:javascript"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:html-5"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:css-3"
                  data-inline="false"
                ></span>
              </p>
              <br />
              
            </div>
            <div className="card-buttons">
              <a
                href="https://rogeliocodes.github.io/etch-a-sketch/"
                target="_blank"
                className="demo"
                ><i className="far fa-eye"></i> Demo</a>
              <a
                href="https://github.com/RogelioCodes/etch-a-sketch"
                target="_blank"
                className="code"
                ><i className="fas fa-code"></i> Code</a>
            </div>
          </div>

          <div className="card lazy-background" id="card">
            <div className="card-img card3"></div>
            <div className="card-text">
              <h2>JS Calculator</h2>
              <p>A classic project. I put this together to familiarize myself with Javascript Syntax.</p>
              <br />
              <p className="made-with">
                
              <span
                  className="iconify"
                  data-icon="logos:javascript"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:html-5"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:css-3"
                  data-inline="false"
                ></span>
              </p>
              <br />
              
            </div>
            <div className="card-buttons">
              <a
                href="https://rogeliocodes.github.io/JS-Calculator/"
                target="_blank"
                className="demo"
                ><i className="far fa-eye"></i> Demo</a>
              <a
                href="https://github.com/RogelioCodes/JS-Calculator"
                target="_blank"
                className="code"
                ><i className="fas fa-code"></i> Code</a>
            </div>
          </div>

          <div className="card lazy-background" id="card">
            <div className="card-img card4"></div>
            <div className="card-text">
              <h2>Soundboard</h2>
              <p>An interact soundboard that taught me how to implement key presses and audio files.</p>
              <br />
              <p className="made-with">
                
              <span
                  className="iconify"
                  data-icon="logos:javascript"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:html-5"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:css-3"
                  data-inline="false"
                ></span>
              </p>
              <br />
             
            </div>
            <div className="card-buttons">
              <a
                href="https://rogeliocodes.github.io/soundboard/"
                target="_blank"
                className="demo"
                ><i className="far fa-eye"></i> Demo</a>
              <a
                href="https://github.com/RogelioCodes/soundboard"
                target="_blank"
                className="code"
                ><i className="fas fa-code"></i> Code</a>
            </div>
          </div>

          <div className="card lazy-background" id="card">
            <div className="card-img card5"></div>
            <div className="card-text">
              <h2>Library</h2>
              <p>Taught me how to use js objects and object constructors.</p>
              <br />
              <p className="made-with">
                
              <span
                  className="iconify"
                  data-icon="logos:javascript"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:html-5"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:css-3"
                  data-inline="false"
                ></span>
              </p>
              <br />
              
            </div>
            <div className="card-buttons">
              <a
                href="https://rogeliocodes.github.io/Library/"
                target="_blank"
                className="demo"
                ><i className="far fa-eye"></i> Demo</a>
              <a
                href="https://github.com/RogelioCodes/Library"
                target="_blank"
                className="code"
                ><i className="fas fa-code"></i> Code</a>
            </div>
          </div>

          <div className="card lazy-background" id="card">
            <div className="card-img card6"></div>
            <div className="card-text">
              <h2>Virtual Birthday Card</h2>
              <p>A virtual birthday card I put together for one of my dearest friends.</p>
              <br />
              <p className="made-with">
                
              <span
                  className="iconify"
                  data-icon="logos:html-5"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:css-3"
                  data-inline="false"
                ></span>
              </p>
              <br />
              
            </div>
            <div className="card-buttons">
              <a
                href="https://rogeliocodes.github.io/happy-birthday-card/"
                target="_blank"
                className="demo"
                ><i className="far fa-eye"></i> Demo</a>
              <a
                href="https://github.com/RogelioCodes/happy-birthday-card"
                target="_blank"
                className="code"
                ><i className="fas fa-code"></i> Code</a>
            </div>
          </div>

          
 {/*
          <div className="card lazy-background" id="card">
            <div className="card-img card5"></div>
            <div className="card-text">
              <h2>Portfolio V. 1</h2>
              <p>First attempt at making a web development portfolio.</p>
              <br />
              <p className="made-with">
                
                <span
                  className="iconify"
                  data-icon="logos:html-5"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:sass"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:javascript"
                  data-inline="false"
                ></span>
              </p>
              <br />
              <p>November 2020</p>
            </div>
            <div className="card-buttons">
              <a
                href="https://sultanbadri.github.io/"
                target="_blank"
                className="demo"
                ><i className="far fa-eye"></i> Demo</a
              >
              <a
                href="https://github.com/SultanBadri/sultanbadri.github.io"
                target="_blank"
                className="code"
                ><i className="fas fa-code"></i> Code</a
              >
            </div>
          </div>

          <div className="card lazy-background" id="card">
            <div className="card-img card6"></div>
            <div className="card-text">
              <h2>Todo List</h2>
              <p>A todo list using using vanilla JavaScript.</p>
              <br />
              <p className="made-with">
                
                <span
                  className="iconify"
                  data-icon="logos:html-5"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:css-3"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:javascript"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:webpack"
                  data-inline="false"
                ></span>
              </p>
              <br />
              <p>November 2020</p>
            </div>
            <div className="card-buttons">
              <a
                href="https://sultanbadri.github.io/todo-list/"
                target="_blank"
                className="demo"
                ><i className="far fa-eye"></i> Demo</a
              >
              <a
                href="https://github.com/SultanBadri/todo-list"
                target="_blank"
                className="code"
                ><i className="fas fa-code"></i> Code</a
              >
            </div>
          </div>

          <div className="card lazy-background" id="card">
            <div className="card-img card7"></div>
            <div className="card-text">
              <h2>Tic Tac Toe</h2>
              <p>Tic Tac Toe with single player and two player modes.</p>
              <br />
              <p className="made-with">
                
                <span
                  className="iconify"
                  data-icon="logos:html-5"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:css-3"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:javascript"
                  data-inline="false"
                ></span>
              </p>
              <br />
              <p>October 2020</p>
            </div>
            <div className="card-buttons">
              <a
                href="https://sultanbadri.github.io/tic-tac-toe/"
                target="_blank"
                className="demo"
                ><i className="far fa-eye"></i> Demo</a
              >
              <a
                href="https://github.com/SultanBadri/tic-tac-toe"
                target="_blank"
                className="code"
                ><i className="fas fa-code"></i> Code</a
              >
            </div>
          </div>

          <div className="card lazy-background" id="card">
            <div className="card-img card8"></div>
            <div className="card-text">
              <h2>Restaurant Page</h2>
              <p>Dynamically rendered restaurant page with JS.</p>
              <br />
              <p className="made-with">
                
                <span
                  className="iconify"
                  data-icon="logos:html-5"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:css-3"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:javascript"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:webpack"
                  data-inline="false"
                ></span>
              </p>
              <br />
              <p>October 2020</p>
            </div>
            <div className="card-buttons">
              <a
                href="https://sultanbadri.github.io/restaurant-page/"
                target="_blank"
                className="demo"
                ><i className="far fa-eye"></i> Demo</a
              >
              <a
                href="https://github.com/SultanBadri/restaurant-page"
                target="_blank"
                className="code"
                ><i className="fas fa-code"></i> Code</a
              >
            </div>
          </div>

          <div className="card lazy-background" id="card">
            <div className="card-img card9"></div>
            <div className="card-text">
              <h2>Virtual Library</h2>
              <p>Library to store books on the browser with localStorage.</p>
              <br />
              <p className="made-with">
                
                <span
                  className="iconify"
                  data-icon="logos:html-5"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:css-3"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:javascript"
                  data-inline="false"
                ></span>
              </p>
              <br />
              <p>October 2020</p>
            </div>
            <div className="card-buttons">
              <a
                href="https://sultanbadri.github.io/virtual-library/"
                target="_blank"
                className="demo"
                ><i className="far fa-eye"></i> Demo</a
              >
              <a
                href="https://github.com/SultanBadri/virtual-library"
                target="_blank"
                className="code"
                ><i className="fas fa-code"></i> Code</a
              >
            </div>  
          </div>*/}
        </div>
      </section>
    );
}

export default SkillsComponent;