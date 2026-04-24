import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import About from './pages/About';
import D2CBrandOwners from './pages/D2CBrandOwners';
import RetailBusiness from './pages/RetailBusiness';
import Influencers from './pages/Influencers';
import BookADemo from './pages/BookADemo';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-a-demo" element={<BookADemo />} />
        <Route path="/for-d2c-brand-owners" element={<D2CBrandOwners />} />
        <Route path="/for-retail-business" element={<RetailBusiness />} />
        <Route path="/for-influencers" element={<Influencers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;