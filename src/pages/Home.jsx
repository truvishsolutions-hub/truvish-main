import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { useCounters } from '../hooks/useCounters';
import { useCursorGlow } from '../hooks/useCursorGlow';
import '../styles/Home.css';

const Home = () => {
  useReveal();
  useCounters();
  useCursorGlow();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'problem'];
      const dots = document.querySelectorAll('.scroll-dot');
      const mid = window.scrollY + window.innerHeight * 0.45;
      let activeIdx = 0;

      sections.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) activeIdx = i;
      });

      dots.forEach((dot, i) => {
        if (i === activeIdx) dot.classList.add('active');
        else dot.classList.remove('active');
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed; bottom: 32px; right: 32px; z-index: 9999;
      padding: 16px 24px; border-radius: 12px; font-size: 0.9rem;
      font-weight: 600; color: white; background: linear-gradient(135deg, #1AB087, #0EA882);
      box-shadow: 0 8px 32px rgba(0,0,0,0.2); transform: translateY(20px);
      opacity: 0; transition: all 0.3s ease;
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
      <div className="cursor-glow"></div>

      <div className="scroll-progress">
        {['hero', 'problem'].map((id, i) => (
          <div
            key={id}
            className={`scroll-dot ${i === 0 ? 'active' : ''}`}
            onClick={() => scrollToSection(id)}
          ></div>
        ))}
      </div>

      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-left reveal">
              <div className="hero-launch-badge">
                <span className="badge-icon">🎁</span>
                <span>Launch Offer&nbsp;—&nbsp;</span>
                <strong>₹1,000 Free Credit</strong>
              </div>

              <h1>
                Rewards That
                <br />
                <span className="teal">Convert.</span>
                <br />
                Not Just Delight.
              </h1>

              <p className="hero-sub">
                Smarter rewards for growing brands. Issue gift vouchers as
                marketing fuel — and only pay when customers act.
              </p>

              <div className="hero-ctas">
                <button
                  className="btn btn-primary btn-lg btn-glow"
                  onClick={() =>
                    showToast("🎉 Free credit claimed! We'll contact you shortly.")
                  }
                >
                  🚀 Start Free — ₹1,000 Credit
                </button>

                <Link to="/book-a-demo" className="btn btn-outline btn-lg demo-rect-btn">
                  Book a Demo
                </Link>
              </div>

              <div className="hero-credit-note">
                <span className="credit-icon">🎟️</span>
                <p>
                  <strong>No upfront cost.</strong> Launch your first gift voucher
                  campaign with ₹1,000 in free credit — no card required.
                </p>
              </div>
            </div>

            <div className="hero-right reveal reveal-delay-2">
              <div className="voucher-stack">
                <div className="voucher-card-bg2"></div>
                <div className="voucher-card-bg"></div>

                <div className="vstat vstat-tl float-anim-fast">
                  <span className="vstat-icon">✅</span>
                  <div>
                    <div className="vstat-label">Redeemed Today</div>
                    <div className="vstat-val">1,240 vouchers</div>
                  </div>
                </div>

                <div className="vstat vstat-br float-anim-slow">
                  <span className="vstat-icon">📈</span>
                  <div>
                    <div className="vstat-label">Avg. ROAS</div>
                    <div className="vstat-val" style={{ color: 'var(--teal)' }}>
                      4.2×
                    </div>
                  </div>
                </div>

                <div className="voucher-card-main float-anim">
                  <div className="voucher-top">
                    <div className="voucher-brand">
                      <div className="voucher-brand-logo">🛍️</div>
                      <span className="voucher-brand-name">TruVish Rewards</span>
                    </div>
                    <span className="voucher-tag">Gift Voucher</span>
                  </div>

                  <div className="voucher-amount">
                    <span className="currency">₹</span>
                    <span className="value">1,000</span>
                    <span className="label">
                      LAUNCH CREDIT — VALID ON FIRST CAMPAIGN
                    </span>
                  </div>

                  <div className="voucher-divider"></div>

                  <div className="voucher-code-row">
                    <span className="voucher-code">TRV-LAUNCH-1K</span>
                    <div className="voucher-expiry">
                      Valid till
                      <br />
                      <span>31 Dec 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-section sc-get-started" id="problem">
        <span className="sc-num">01</span>
        <div className="container">
          <div className="get-started-inner">
            <div className="get-started-head reveal">
              <div className="section-tag section-tag-white">Get Started</div>
              <h2>
                How do you want to
                <br />
                use TruVish?
              </h2>
              <p>Pick your use case. We'll show you exactly how it works.</p>
            </div>

            <div className="get-started-grid">
              <div className="usecase-card reveal reveal-delay-1">
                <div className="usecase-icon">🛍️</div>
                <h4>Reward Online Customers</h4>
                <p>Build retention loops for your brand.</p>
                <Link to="/for-d2c-brand-owners" className="usecase-link">
                  <span className="link-text">For D2C Brand Owners</span>
                  <span className="link-arrow">→</span>
                </Link>
              </div>

              <div className="usecase-card reveal reveal-delay-2">
                <div className="usecase-icon">🏬</div>
                <h4>Reward Walk-ins</h4>
                <p>Offline customers, digital loyalty.</p>
                <Link to="/for-retail-business" className="usecase-link">
                  <span className="link-text">For Retail Business</span>
                  <span className="link-arrow">→</span>
                </Link>
              </div>

              <div className="usecase-card reveal reveal-delay-3">
                <div className="usecase-icon">📣</div>
                <h4>Reward Followers</h4>
                <p>Turn passive audience into a thriving community.</p>
                <Link to="/for-influencers" className="usecase-link">
                  <span className="link-text">For Influencers</span>
                  <span className="link-arrow">→</span>
                </Link>
              </div>
            </div>

            <div className="get-started-quote reveal">
              <strong>"Reward the action, not the browsing."</strong> TruVish makes
              every voucher a conversion event — not a marketing cost.
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner reveal">
            <h2>
              Start With ₹1,000.
              <br />
              Scale From There.
            </h2>
            <p>
              Your first gift voucher campaign is on us. No contracts, no setup fees —
              just results.
            </p>

            <div className="cta-credit-pill">
              🎁 <strong>₹1,000 launch credit</strong>&nbsp;— automatically applied at
              signup
            </div>

            <div className="cta-actions">
              <button
                className="btn btn-primary btn-lg btn-glow"
                onClick={() =>
                  showToast("🎉 Free credit claimed! We'll contact you shortly.")
                }
              >
                🎁 Claim Free Credit & Launch
              </button>

              <Link to="/book-a-demo" className="btn btn-outline btn-lg demo-rect-btn">
                📅 Book a Demo First
              </Link>
            </div>

            <p className="cta-fine">
              No credit card required &nbsp;·&nbsp; Live in 5 minutes &nbsp;·&nbsp;
              Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
