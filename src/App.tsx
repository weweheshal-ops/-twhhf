import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./Home";
import Donate from "./Donate";
import About from "./About";
import FounderChronicle from "./FounderChronicle";
import BoardOfDirectors from "./BoardOfDirectors";
import Organization from "./Organization";
import NewsPage from "./NewsPage";
import PrivacyPolicy from "./PrivacyPolicy";
import HonestBusinessPractices from "./HonestBusinessPractices";
import DonationCharter from "./DonationCharter";
import UserLogin from "./UserLogin";

const Services = () => {
  const { t } = useTranslation();
  return <div className="pt-24 min-h-screen flex items-center justify-center text-2xl font-bold">{t('nav.services')} (Coming Soon)</div>;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/event" element={<FounderChronicle />} />
        <Route path="/about/board" element={<BoardOfDirectors />} />
        <Route path="/about/structure" element={<Organization />} />
        <Route path="/about/donor-charter" element={<DonationCharter />} />
        <Route path="/donorcharter" element={<DonationCharter />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/honest-business" element={<HonestBusinessPractices />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}
