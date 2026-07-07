
import NavbarComp from "./components/NavbarComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.scss'
import IntroComponent from './components/IntroComponent.tsx'
import SocialsComponent from "./components/SocialsComponent.tsx";
import AboutPage from './pages/AboutPage';
import FooterComponent from './components/FooterComponent';
import EngineeringPage from './pages/EngineeringPage';
import FirmwareTelemetryPage from './pages/FirmwareTelemetryPage';
import StorageWorkflowsPage from './pages/StorageWorkflowsPage';
import HelloPage from './pages/HelloPage';
import PhotographyPage from './pages/PhotographyPage';
import BonsaiQrGuidePage from './pages/BonsaiQrGuidePage';
import WritingPage from './pages/WritingPage';
import FriendsNoMatterWhenPage from './pages/FriendsNoMatterWhenPage';
import PhotosMissedPage from './pages/PhotosMissedPage';
import SlideIntoDmsPage from './pages/SlideIntoDmsPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const routerBasename = window.location.pathname.startsWith('/portfolio-website')
  ? '/portfolio-website'
  : import.meta.env.BASE_URL || '/';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    html.style.scrollBehavior = previousScrollBehavior;
  }, [pathname, search]);

  return null;
};

function App() {
  return (
    <Router basename={routerBasename}>
      <div className="App" >
        <ScrollToTop />
        <NavbarComp />

        <Routes>
          <Route path="/" element={
            <>
              <IntroComponent />
              <SocialsComponent />
            </>
          } />
          <Route path="/engineering" element={<EngineeringPage />} />
          <Route path="/engineering/firmware-telemetry" element={<FirmwareTelemetryPage />} />
          <Route path="/engineering/storage-workflows" element={<StorageWorkflowsPage />} />
          <Route path="/engineering/bonsai-qr-guide" element={<BonsaiQrGuidePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/writing/we-wouldve-been-friends" element={<FriendsNoMatterWhenPage />} />
          <Route path="/writing/the-photos-i-would-have-missed" element={<PhotosMissedPage />} />
          <Route path="/writing/slide-into-the-dms" element={<SlideIntoDmsPage />} />
          <Route path="/hello" element={<HelloPage />} />
        </Routes>

        <FooterComponent />

      </div>
    </Router>
  );
}

export default App;
