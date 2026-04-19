// src/components/Footer.jsx
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CiInstagram } from "react-icons/ci";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check current route
  const isHomePage = location.pathname === '/';
  const isHowItWorksPage = location.pathname === '/how-it-works';
  const isAboutPage = location.pathname === '/about';

  // Home page footer content (from index.html)
  const homeFooterContent = {
    brandDescription: "A Partner in Reward Marketing. Turn gift vouchers into your most measurable growth channel.",
    productLinks: ["How it Works", "Solutions", "Pricing", "Redeem a Voucher"],
    companyLinks: ["About TruVish", "Blog", "Careers", "Contact"],
    legalLinks: ["Client Login", "Book a Demo", "Privacy Policy", "Terms of Service"],
    legalTitle: "Account"
  };

  // How It Works page footer content (from how-it-works.html)
  const howItWorksFooterContent = {
    brandDescription: "Performance-based rewards infrastructure. Turn incentives into your most powerful growth channel.",
    productLinks: ["How It Works", "Solutions", "Pricing"],
    companyLinks: ["About TruVish", "Careers", "Blog"],
    legalLinks: ["Privacy Policy", "Terms of Service"],
    legalTitle: "Legal"
  };

  // About page footer content (from about.html)
  const aboutFooterContent = {
    brandDescription: "Performance-based rewards infrastructure.",
    productLinks: ["How It Works", "Solutions", "Pricing"],
    companyLinks: ["About TruVish", "Careers", "Blog"],
    legalLinks: ["Privacy Policy", "Terms of Service"],
    legalTitle: "Legal"
  };

  // Select content based on route
  let footerContent;
  if (isHomePage) {
    footerContent = homeFooterContent;
  } else if (isHowItWorksPage) {
    footerContent = howItWorksFooterContent;
  } else if (isAboutPage) {
    footerContent = aboutFooterContent;
  } else {
    // Default fallback
    footerContent = howItWorksFooterContent;
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
              <img
                src="/images/TV-BG.png"
                alt="TruVish icon"
                className="footer-logo-icon"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div className="footer-logo-stack">
                <span className="footer-logo-name">TruVish</span>
                <span className="footer-logo-word">A Partner in Reward Marketing</span>
              </div>
            </div>
            <p>{footerContent.brandDescription}</p>
            <div className="footer-socials" style={{ marginTop: '20px' }}>
              <a href="https://twitter.com/truvish" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com/company/truvish" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com/truvish" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <CiInstagram />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Product</h5>
            <ul>
              {footerContent.productLinks.map((link, idx) => {
                let path = '';
                if (link === 'How it Works') path = '/how-it-works';
                else if (link === 'Solutions') path = '/solutions';
                else if (link === 'Pricing') path = '/pricing';
                else if (link === 'Redeem a Voucher') path = '#';
                else path = '#';

                return (
                  <li key={idx}>
                    <Link to={path}>{link}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              {footerContent.companyLinks.map((link, idx) => {
                let path = '';
                if (link === 'About TruVish') path = '/about';
                else if (link === 'Blog') path = '#';
                else if (link === 'Careers') path = '#';
                else if (link === 'Contact') path = '#';
                else path = '#';

                return (
                  <li key={idx}>
                    <Link to={path}>{link}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="footer-col">
            <h5>{footerContent.legalTitle}</h5>
            <ul>
              {footerContent.legalLinks.map((link, idx) => {
                let path = '';
                if (link === 'Client Login') path = '#';
                else if (link === 'Book a Demo') path = '#';
                else if (link === 'Privacy Policy') path = '#';
                else if (link === 'Terms of Service') path = '#';
                else path = '#';

                return (
                  <li key={idx}>
                    <Link to={path}>{link}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="divider divider-dark"></div>

        <div className="footer-bottom">
          <p>© 2025 TruVish. All rights reserved.</p>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>You pay for outcomes — not promises.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;