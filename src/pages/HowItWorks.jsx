// src/pages/HowItWorks.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import '../styles/Pages.css';

const HowItWorks = () => {
  useReveal();
  const navigate = useNavigate();

  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed; bottom: 32px; right: 32px; z-index: 9999;
      padding: 16px 28px; border-radius: 14px; font-size: 1rem;
      font-weight: 600; color: white; background: linear-gradient(135deg, #1AB087, #0EA882);
      box-shadow: 0 8px 32px rgba(0,0,0,0.2); transform: translateY(20px);
      opacity: 0; transition: all 0.3s ease; z-index: 10000;
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

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="cursor-glow"></div>

      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="mesh-bg"></div>
        <div className="container">
          <div className="reveal">
            <div className="section-tag section-tag-white" style={{ display: 'inline-flex', marginBottom: '20px' }}>
              How It Works
            </div>
            <h1>
              Growth Campaigns —<br />
              <em className="gradient-text" style={{ fontStyle: 'normal' }}>Operational in Minutes.</em>
            </h1>
            <p>Four simple steps from zero to a live, performance-tracked reward campaign that actually moves the needle.</p>
          </div>
        </div>
      </section>

      {/* STEPS TIMELINE */}
      <section className="hiw">
        <div className="container">
          <div className="hiw-timeline">
            {/* Step 1 */}
            <div className="hiw-step reveal">
              <div className="hiw-num">1</div>
              <div className="hiw-step-content">
                <span className="step-tag">Define</span>
                <h3>Create Your Campaign</h3>
                <p>Set up your reward campaign in minutes — define the action you want customers to take (purchase, sign-up, referral), choose your reward type, set budget caps, and configure expiry rules. No code. No meetings.</p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                  <span className="badge badge-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg> Choose trigger action
                  </span>
                  <span className="badge badge-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg> Set reward value
                  </span>
                  <span className="badge badge-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg> Define budget limits
                  </span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="hiw-step reveal">
              <div className="hiw-num">2</div>
              <div className="hiw-step-content">
                <span className="step-tag">Generate</span>
                <h3>Instant Code Generation</h3>
                <p>TruVish generates unique, secure reward codes in bulk — instantly. Single-use or multi-use, with custom validation rules. 10 codes or 10,000 — same speed, zero infrastructure required on your end.</p>
                <div className="code-preview">
                  <div className="code-preview-title">GENERATED CODES PREVIEW</div>
                  TRV-8X2K-9QLP · TRV-4MNB-7ZRC · TRV-6WPD-2TVY<br />
                  TRV-3FQA-8JHU · TRV-5KRX-1EGB · TRV-9LST-4NMC
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="hiw-step reveal">
              <div className="hiw-num">3</div>
              <div className="hiw-step-content">
                <span className="step-tag">Distribute</span>
                <h3>Share Via Any Channel</h3>
                <p>Distribute reward codes via direct link, QR code, email, SMS, WhatsApp, or embed them in your existing flows. No technical integration required. Works everywhere your customers are.</p>
                <div className="distribution-grid">
                  <div className="distribution-item">
                    <div className="distribution-icon">🔗</div>
                    Direct Link
                  </div>
                  <div className="distribution-item">
                    <div className="distribution-icon">📱</div>
                    QR Code
                  </div>
                  <div className="distribution-item">
                    <div className="distribution-icon">✉️</div>
                    Email / SMS
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="hiw-step reveal">
              <div className="hiw-num">4</div>
              <div className="hiw-step-content">
                <span className="step-tag">Track</span>
                <h3>Monitor Redemption + ROI</h3>
                <p>Real-time analytics show you exactly which codes were redeemed, when, and the revenue they generated. Full attribution — so you always know what's working and can double down confidently.</p>
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-value">94%</div>
                    <div className="stat-label">Attribution Rate</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">Live</div>
                    <div className="stat-label">Real-time Data</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">4.2x</div>
                    <div className="stat-label">Avg. ROAS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End line */}
          <div className="hiw-end reveal">
            <p>Growth campaigns — operational in minutes. Results tracked in real-time.</p>
            <button className="btn btn-primary btn-lg btn-glow" onClick={() => showToast('🚀 Campaign creation coming soon!')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              </svg>
              Start Your First Campaign
            </button>
          </div>
        </div>
      </section>

      {/* WHY IT'S DIFFERENT SECTION */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag section-tag-teal">Why TruVish</div>
            <h2>Traditional Rewards vs.<br />TruVish Performance Model</h2>
          </div>
          <div className="comparison-grid reveal">
            {/* Traditional */}
            <div className="comparison-card traditional">
              <div className="comparison-title traditional">Traditional Approach</div>
              <ul className="comparison-list">
                <li className="comparison-item traditional">
                  <span className="comparison-icon cross">✗</span> Pay upfront regardless of results
                </li>
                <li className="comparison-item traditional">
                  <span className="comparison-icon cross">✗</span> Weeks to implement and integrate
                </li>
                <li className="comparison-item traditional">
                  <span className="comparison-icon cross">✗</span> ROI is unclear and hard to attribute
                </li>
                <li className="comparison-item traditional">
                  <span className="comparison-icon cross">✗</span> Limited flexibility, rigid reward types
                </li>
                <li className="comparison-item traditional">
                  <span className="comparison-icon cross">✗</span> Manual redemption tracking
                </li>
              </ul>
            </div>
            {/* TruVish */}
            <div className="comparison-card truvish">
              <div className="comparison-title truvish">TruVish Model</div>
              <ul className="comparison-list">
                <li className="comparison-item truvish">
                  <span className="comparison-icon check">✓</span> Pay only when outcomes happen
                </li>
                <li className="comparison-item truvish">
                  <span className="comparison-icon check">✓</span> Live in under 5 minutes, zero dev
                </li>
                <li className="comparison-item truvish">
                  <span className="comparison-icon check">✓</span> Full attribution and real-time ROI
                </li>
                <li className="comparison-item truvish">
                  <span className="comparison-icon check">✓</span> Flexible rewards across any use case
                </li>
                <li className="comparison-item truvish">
                  <span className="comparison-icon check">✓</span> Automated code-level tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MINI CTA SECTION */}
      <section className="mini-cta">
        <div className="container">
          <div className="reveal">
            <h2>Ready to See It in Action?</h2>
            <p>Book a 20-minute demo and we'll walk you through launching your first live campaign.</p>
            <button className="btn btn-primary btn-lg btn-glow" onClick={() => showToast('📅 Demo booking coming soon!')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <polyline points="9 16 11 18 15 14" />
              </svg>
              Book a Free Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;