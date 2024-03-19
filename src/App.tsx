
import NavbarComp from "./components/NavbarComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css'
import './styles/App.scss'
import IntroComponent from './components/IntroComponent.tsx'
import SocialsComponent from "./components/SocialsComponent.tsx";
import AboutComponent from "./components/AboutComponent.tsx";
import SkillsComponent from "./components/SkillsComponent.tsx";
import ProjectsComponent from "./components/ProjectsComponent.tsx"
import PhotographyComponent from "./components/PhotographyComponent.tsx";
function App() {
 

  return (
    <>
      <div className="App" >
        <NavbarComp />

       
        
          <IntroComponent />
          <SocialsComponent />
          <AboutComponent />
          <SkillsComponent />
          <ProjectsComponent />
          <PhotographyComponent />
          {/* <div className="about" style={{border: "1px solid blue",}}>
        hello
        hello
      </div> */}
       
      </div>
      
    </>
  );
}

export default App;
