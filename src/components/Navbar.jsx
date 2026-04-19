// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = !mobileOpen ? 'hidden' : '';
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 32px;
      right: 32px;
      z-index: 9999;
      padding: 16px 28px;
      border-radius: 14px;
      font-size: 1rem;
      font-weight: 600;
      color: white;
      background: linear-gradient(135deg, #1AB087, #0EA882);
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.3s ease;
    `;
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img
              src="/images/truvish-icon.png"
              alt="TruVish icon"
              className="nav-logo-icon"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextSibling) {
                  e.target.nextSibling.style.display = 'flex';
                }
              }}
            />
            <div className="nav-logo-stack">
              <span className="nav-logo-name">TruVish</span>
              <img
                src="/images/truvish-wordmark.png"
                alt="A Partner in Reward Marketing"
                className="nav-logo-word-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const parent = e.target.parentElement;
                  if (parent) {
                    const fallback = parent.querySelector('.nav-logo-word');
                    if (fallback) fallback.style.display = 'block';
                  }
                }}
              />
              <span className="nav-logo-word" style={{ display: 'none' }}>A Partner in Reward Marketing</span>
            </div>
          </div>
          <div className="nav-right">
            <button className="btn btn-outline" onClick={() => showToast('🎁 Redeem feature coming soon!')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="20 12 20 22 4 22 4 12"/>
                <rect x="2" y="7" width="20" height="5"/>
                <line x1="12" y1="22" x2="12" y2="7"/>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
              </svg> Redeem
            </button>
            <button className="btn btn-outline" onClick={() => showToast('🔒 Client login coming soon!')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg> Client Login
            </button>
            <Link to="/how-it-works" className="btn btn-primary">How it Works</Link>
          </div>
          <button className={`nav-toggle ${mobileOpen ? 'open' : ''}`} onClick={toggleMobile}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={toggleMobile}>✕</button>
        <button onClick={() => { showToast('🎁 Redeem feature coming soon!'); toggleMobile(); }}>Redeem</button>
        <button onClick={() => { showToast('🔒 Client login coming soon!'); toggleMobile(); }}>Client Login</button>
        <Link to="/how-it-works" className="btn btn-primary" onClick={toggleMobile}>How it Works</Link>
      </div>
    </>
  );
};

export default Navbar;