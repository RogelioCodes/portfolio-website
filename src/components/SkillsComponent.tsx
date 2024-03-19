import React from 'react';
import '../styles/Skills.scss';
const SkillsComponent: React.FC = () => {
    return (

        <section id="skills">
            <div className="header" id="header">
                <h2>My <span>Skills</span></h2>
            </div>

            <div className="container lazy-background" id="container">
                <div className="languages">
                    <p><i className="fas fa-code"></i></p>
                    <h3>Languages</h3>
                    <span
                    >Javascript / TypeScript <span
                            className="iconify"
                            data-icon="logos:javascript"
                            data-inline="false"
                        ></span>
                        <span
                            className="iconify"
                            data-icon="logos-typescript-icon"
                            data-inline="false"
                        ></span></span>
                    <br />
                    <span>Python <span
                            className="iconify"
                            data-icon="logos:python"
                            data-inline="false"
                        ></span></span>
                    <br />
                    <span>Java <span className="iconify" data-icon="logos:java"></span></span>
                    <br />
                    <span
                    >C++ <span className="iconify" data-icon="devicon:cplusplus"></span></span>
                    <br />
                    <span
                    >SQL <span
                            className="iconify"
                            data-icon="vscode-icons:file-type-sql"
                        ></span></span>
                    <br />
                    <span
                    >HTML <span
                            className="iconify"
                            data-icon="logos:html-5"
                            data-inline="false"></span></span>
                    <br />
                    <span
                    >CSS/SASS <span
                            className="iconify"
                            data-icon="logos:css-3"
                            data-inline="false"
                        ></span> <span
                            className="iconify"
                            data-icon="logos:sass"
                            data-inline="false"></span></span>
                </div>

                <div className="frameworks">
                    <p><i className="fas fa-book-reader"></i></p>
                    <h3>Frameworks/Libraries/Databases</h3>
                    <span
                    >React.js <span
                            className="iconify"
                            data-icon="logos:react"
                            data-inline="false"></span></span>
                    <br />
                    <span>
                        Node.js/Express.js <span
                            className="iconify"
                            data-icon="logos:nodejs-icon"
                            data-inline="false"
                        ></span>  
                        <span
                            className="iconify"
                            data-icon="simple-icons:express"
                            data-inline="false">
                        </span>  </span>
                    <br />
                    <span
                    >MongoDB
                        <span
                            className="iconify"
                            data-icon="vscode-icons:file-type-mongo"
                        ></span></span>
                    <br />
                    <span
                    >Apache Tomcat  
                        <span
                            className="iconify"
                            data-icon="logos:tomcat"
                        ></span></span>
                    <br />
                    <span
                    >MySQL <span
                            className="iconify"
                            data-icon="logos:mysql"
                            data-inline="false"></span></span>
                    <br />
                    <span
                    >jQuery <span
                            className="iconify"
                            data-icon="bx:bxl-jquery"
                            data-inline="false"
                        ></span>
                    </span>
                    <br />
                    
                  
                    <span
                    >Groovy <span
                            className="iconify"
                            data-icon="file-icons:groovy"
                        ></span> 
                    </span>
                </div>

                <div className="technologies">
                    <p><i className="fas fa-tools"></i></p>
                    <h3>Technologies</h3>
                    <span
                    >Git <span
                            className="iconify"
                            data-icon="logos:git-icon"
                            data-inline="false"></span></span>
                    <br />
                    <span>
                        Webpack <span
                            className="iconify"
                            data-icon="logos:webpack"
                            data-inline="false"></span></span>
                    <br />
                    <span>Ansible <span className="iconify" data-icon="file-icons:ansible"></span></span>
                    <br />
                   
                    <span
                    >Terraform <span
                            className="iconify"
                            data-icon="devicon:terraform"
                            ></span></span>
                     <br />
                    <span
                    >Azure <span
                            className="iconify"
                            data-icon="vscode-icons:file-type-azure"
                            style={{ color: "#34cceb" }}></span></span>
                    
                   
                           
                </div>
            </div>
        </section>

    );
}

export default SkillsComponent;