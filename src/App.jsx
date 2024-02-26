import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom"; 

import { Analytics } from '@vercel/analytics/react';

import './assets/css/headerFooter/headerFooter.css'
import './assets/css/main.css'


import Gallery from './gallery/gallery'
import AboutPage from './about/aboutPage.jsx'
import UpEventPage from './upEvent/upEventPage'
import PastEventPage from './pastEvent/pastEventPage'
import HeroPage from './hero/heroPage'
import ContactPage from './contact/contactPage'
import SponsorsPage from "./sponsors/sponsorsPage.jsx"
import CareersPage from "./careers/careersPage.jsx"

import SharedLayout from './sharedLayout/sharedLayout'
import CommitteeArchive from './committeeArchive/CommitteeArchive'
import './assets/css/main.css'

import FirstYearGuidePage from "./firstYearGuide/firstYearGuidePage.jsx";
import NfcPage from "./nfc/nfcPage.jsx";

// import SpeechBubbleDemoPage from './firstYearGuide/components/speechBubbleDemoPage.jsx'
// import PopupDemoPage from './firstYearGuide/components/popupDemoPage.jsx'
// import Stars from './firstYearGuide/components/Stars.jsx'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HeroPage />}></Route>
            {/* <Route path="speech-bubble" element={<SpeechBubbleDemoPage />} />
            <Route path="popup" element={<PopupDemoPage />} />
            <Route path="stars-test" element={<Stars />} /> */}
            <Route path="about" element={<AboutPage />} />
            <Route path="committee-archive" element={<CommitteeArchive />} />
            <Route path="sponsors" element={<SponsorsPage />} />
            <Route path="careers" element={<CareersPage />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="upcoming-events" element={<UpEventPage />} />
            <Route path="past-events" element={<PastEventPage />} />
            <Route path="first-year-guide" element={<FirstYearGuidePage />} />
            <Route path="nfc" element={<NfcPage />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
    </div>
  )
}

export default App
