import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GDPRConsent from "./components/GDPRButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./page/Home";
import Footer from "./components/FooterSection";
import Mot from "./page/Services/Mot";
import Brake from "./page/Services/Brake";
import TimeBelts from "./page/Services/TimeBelts";
import Batteries from "./page/Services/Batteries";
import Suspension from "./page/Services/Suspension";
import ReviewPage from "./page/ReviewPage";

import Derby from "./page/Location/Derby";
import Leicester from "./page/Location/Leicester";
import Nottingham from "./page/Location/Nottingham";
import Mansfield from "./page/Location/Mansfield";
import Grantham from "./page/Location/Grantham";
import Loughborough from "./page/Location/Loughborough";



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<ReviewPage />} />

        {/* Service Routes */}
        <Route path="/services/ceramic-coating" element={<Mot />} />
        <Route path="/services/valeting" element={<Brake />} />
        <Route path="/services/paint-correction" element={<TimeBelts />} />
        <Route path="/services/deep-restoration" element={<Batteries />} />
        <Route path="services/maintenance-plan" element={<Suspension />} />

        {/* Location Routes */}
        <Route path="/locations/leicester" element={<Leicester />} />
        <Route path="/locations/nottingham" element={<Nottingham />} />
        <Route path="/locations/derby" element={<Derby />} />
        <Route path="/locations/mansfield" element={<Mansfield />} />
        <Route path="/locations/grantham" element={<Grantham />} />
        <Route path="/locations/loughborough" element={<Loughborough />} />

        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
