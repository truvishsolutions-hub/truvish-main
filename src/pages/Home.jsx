// src/pages/Home.jsx
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
      const sections = ['hero', 'problem', 'insight', 'product'];
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
        {['hero', 'problem', 'insight', 'product'].map((id, i) => (
          <div key={id} className={`scroll-dot ${i === 0 ? 'active' : ''}`} onClick={() => scrollToSection(id)}></div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-left reveal">
              <div className="hero-launch-badge">
                <span className="badge-icon">🎁</span>
                <span>Launch Offer&nbsp;—&nbsp;</span>
                <strong>₹1,000 Free Credit</strong>
              </div>
              <h1>Rewards That<br /><span className="teal">Convert.</span><br />Not Just Delight.</h1>
              <p className="hero-sub">TruVish is India's performance reward platform. Issue gift vouchers as marketing fuel — and only pay when customers act.</p>
              <div className="hero-ctas">
                <button className="btn btn-primary btn-lg btn-glow" onClick={() => showToast('🎉 Free credit claimed! We\'ll contact you shortly.')}>
                  🚀 Start Free — ₹1,000 Credit
                </button>
                <button className="btn btn-outline btn-lg" onClick={() => showToast('📅 Demo request received! We\'ll reach out within 24h.')}>
                  Book a Demo
                </button>
              </div>
              <div className="hero-credit-note">
                <span className="credit-icon">🎟️</span>
                <p><strong>No upfront cost.</strong> Launch your first gift voucher campaign with ₹1,000 in free credit — no card required.</p>
              </div>
            </div>
            <div className="hero-right reveal reveal-delay-2">
              <div className="voucher-stack">
                <div className="voucher-card-bg2"></div>
                <div className="voucher-card-bg"></div>
                <div className="vstat vstat-tl float-anim-fast">
                  <span className="vstat-icon">✅</span>
                  <div><div className="vstat-label">Redeemed Today</div><div className="vstat-val">1,240 vouchers</div></div>
                </div>
                <div className="vstat vstat-br float-anim-slow">
                  <span className="vstat-icon">📈</span>
                  <div><div className="vstat-label">Avg. ROAS</div><div className="vstat-val" style={{ color: 'var(--teal)' }}>4.2×</div></div>
                </div>
                <div className="voucher-card-main float-anim">
                  <div className="voucher-top">
                    <div className="voucher-brand"><div className="voucher-brand-logo">🛍️</div><span className="voucher-brand-name">TruVish Rewards</span></div>
                    <span className="voucher-tag">Gift Voucher</span>
                  </div>
                  <div className="voucher-amount">
                    <span className="currency">₹</span><span className="value">1,000</span>
                    <span className="label">LAUNCH CREDIT — VALID ON FIRST CAMPAIGN</span>
                  </div>
                  <div className="voucher-divider"></div>
                  <div className="voucher-code-row">
                    <span className="voucher-code">TRV-LAUNCH-1K</span>
                    <div className="voucher-expiry">Valid till<br /><span>31 Dec 2025</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="scroll-section sc-problem" id="problem">
        <span className="sc-num">01</span>
        <div className="container">
          <div className="problem-split">
            <div className="problem-text reveal">
              <p className="scroll-label">The Problem</p>
              <h2>Growth Channels<br />Are Breaking Down.</h2>
              <p>Ad costs keep rising. Discount-led promotions erode margins. And customers tune out brands that only speak in offers. There's a better lever — incentives — but most brands still don't know how to use it with financial discipline.</p>
              <Link to="/how-it-works" className="btn btn-dark">See How We Solve It →</Link>
            </div>
            <div className="problem-stats reveal reveal-delay-2">
              <div className="pstat"><div className="pstat-icon">📉</div><div className="pstat-val red">↑ 3×</div><div className="pstat-label">Rise in digital CAC over 3 years</div></div>
              <div className="pstat"><div className="pstat-icon">💸</div><div className="pstat-val red">40%</div><div className="pstat-label">Revenue lost to blanket discount programs</div></div>
              <div className="pstat"><div className="pstat-icon">😴</div><div className="pstat-val red">68%</div><div className="pstat-label">Customers ignore generic promotional emails</div></div>
              <div className="pstat"><div className="pstat-icon">🎯</div><div className="pstat-val teal">9×</div><div className="pstat-label">Better conversion with personalised vouchers</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Insight Section */}
      <section className="scroll-section sc-insight" id="insight">
        <span className="sc-num">02</span>
        <div className="container">
          <div className="insight-inner">
            <div className="section-tag section-tag-white">The Insight</div>
            <h2 className="reveal">Gift Vouchers Are the<br />Most Underused Growth Tool in Marketing.</h2>
            <p className="reveal reveal-delay-1">Vouchers drive action. Not just awareness. Every brand already knows this — but no one has built the infrastructure to deploy them at scale, with measurable ROI.</p>
            <div className="insight-cards">
              <div className="icard reveal reveal-delay-1"><div className="icard-icon">👤</div><h4>Vouchers Acquire</h4><p>Reward first-time actions — signups, purchases, referrals. A ₹200 voucher converts better than a ₹2,000 ad.</p></div>
              <div className="icard reveal reveal-delay-2"><div className="icard-icon">❤️</div><h4>Vouchers Retain</h4><p>Milestone rewards and loyalty vouchers keep customers coming back without training them to wait for sales.</p></div>
              <div className="icard reveal reveal-delay-3"><div className="icard-icon">📊</div><h4>Vouchers Measure</h4><p>Every code is tracked. Every redemption attributed. Finally — incentive spend you can actually justify.</p></div>
            </div>
            <div className="insight-callout reveal"><strong>"Reward the action, not the browsing."</strong> TruVish makes every voucher a conversion event — not a marketing cost.</div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="scroll-section sc-product" id="product">
        <span className="sc-num">03</span>
        <div className="container">
          <div className="product-split-new">
            <div className="product-left reveal">
              <div className="section-tag section-tag-white">The Product</div>
              <h2>Everything You Need.<br />Nothing You Don't.</h2>
              <p>A lean, fast, zero-bloat reward platform built for brands that want results — not complexity.</p>
              <div className="product-features-new">
                <div className="pf-item"><div className="pf-icon">⚡</div><span className="pf-text">Launch a voucher campaign in under 5 minutes</span></div>
                <div className="pf-item"><div className="pf-icon">🔌</div><span className="pf-text">Zero technical integration — works out of the box</span></div>
                <div className="pf-item"><div className="pf-icon">📱</div><span className="pf-text">QR code, link, email & WhatsApp distribution</span></div>
                <div className="pf-item"><div className="pf-icon">📈</div><span className="pf-text">Real-time analytics & full revenue attribution</span></div>
                <div className="pf-item"><div className="pf-icon">💰</div><span className="pf-text">Pay only when vouchers are redeemed</span></div>
              </div>
              <Link to="/pricing" className="btn btn-primary btn-lg btn-glow">View Pricing →</Link>
            </div>
            <div className="product-usecases reveal reveal-delay-2">
              <div className="uc-card"><span className="uc-icon">🛍️</span><div className="uc-title">D2C Brands</div><div className="uc-desc">Slash CAC with targeted voucher drops instead of broad ad spend.</div></div>
              <div className="uc-card"><span className="uc-icon">🏪</span><div className="uc-title">Retail Stores</div><div className="uc-desc">Drive footfall and repeat visits with QR-based voucher redemptions.</div></div>
              <div className="uc-card"><span className="uc-icon">📱</span><div className="uc-title">Apps & SaaS</div><div className="uc-desc">Reduce churn and boost activation with milestone reward vouchers.</div></div>
              <div className="uc-card"><span className="uc-icon">🤝</span><div className="uc-title">Agencies</div><div className="uc-desc">Add performance voucher programs to every client campaign you run.</div></div>
              <div className="uc-card"><span className="uc-icon">🔗</span><div className="uc-title">Referral Programs</div><div className="uc-desc">Reward both sides automatically — no manual code management.</div></div>
              <div className="uc-card"><span className="uc-icon">🏆</span><div className="uc-title">Loyalty & Milestones</div><div className="uc-desc">Celebrate spend tiers and anniversaries with perfectly timed gifts.</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner reveal">
            <h2>Start With ₹1,000.<br />Scale From There.</h2>
            <p>Your first gift voucher campaign is on us. No contracts, no setup fees — just results.</p>
            <div className="cta-credit-pill">🎁 <strong>₹1,000 launch credit</strong>&nbsp;— automatically applied at signup</div>
            <div className="cta-actions">
              <button className="btn btn-primary btn-lg btn-glow" onClick={() => showToast('🎉 Free credit claimed! We\'ll contact you shortly.')}>🎁 Claim Free Credit & Launch</button>
              <button className="btn btn-outline btn-lg" onClick={() => showToast('📅 Demo request received! We\'ll reach out within 24h.')}>📅 Book a Demo First</button>
            </div>
            <p className="cta-fine">No credit card required &nbsp;·&nbsp; Live in 5 minutes &nbsp;·&nbsp; Cancel anytime</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;