import { useLocation, useNavigate } from 'react-router-dom';
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

  const handleDisabledClick = (e) => {
    e.preventDefault();
  };

  const isHomePage = location.pathname === '/';
  const isHowItWorksPage = location.pathname === '/how-it-works';
  const isAboutPage = location.pathname === '/about';

  const homeFooterContent = {
    brandDescription:
      "A Partner in Reward Marketing. Turn gift vouchers into your most measurable growth channel.",
    companyLinks: [
      "About Truvish",
      "Privacy",
      "Terms & Condition",
      "Contact"
    ],
    accountLinks: [
      "Client Login",
      "Redeem Code",
      "How it Works"
    ]
  };

  const howItWorksFooterContent = {
    brandDescription:
      "Performance-based rewards infrastructure. Turn incentives into your most powerful growth channel.",
    companyLinks: [
      "About Truvish",
      "Privacy",
      "Terms & Condition",
      "Contact"
    ],
    accountLinks: [
      "Client Login",
      "Redeem Code",
      "How it Works"
    ]
  };

  const aboutFooterContent = {
    brandDescription: "Performance-based rewards infrastructure.",
    companyLinks: [
      "About Truvish",
      "Privacy",
      "Terms & Condition",
      "Contact"
    ],
    accountLinks: [
      "Client Login",
      "Redeem Code",
      "How it Works"
    ]
  };

  let footerContent;
  if (isHomePage) {
    footerContent = homeFooterContent;
  } else if (isHowItWorksPage) {
    footerContent = howItWorksFooterContent;
  } else if (isAboutPage) {
    footerContent = aboutFooterContent;
  } else {
    footerContent = howItWorksFooterContent;
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div
              className="footer-logo"
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            >
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
                <span className="footer-logo-word">Performance Reward Simplified</span>
              </div>
            </div>

            <p>{footerContent.brandDescription}</p>

            <div className="footer-socials" style={{ marginTop: '20px' }}>
              <a href="/" onClick={handleDisabledClick} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="/" onClick={handleDisabledClick} aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="/" onClick={handleDisabledClick} aria-label="Instagram">
                <CiInstagram />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              {footerContent.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="/" onClick={handleDisabledClick}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Account</h5>
            <ul>
              {footerContent.accountLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="/" onClick={handleDisabledClick}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider divider-dark"></div>

        <div className="footer-bottom">
          <p>© 2025 TruVish. All rights reserved.</p>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
            You pay for outcomes — not promises.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;