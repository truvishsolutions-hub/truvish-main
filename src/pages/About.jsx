// src/pages/About.jsx
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { useCounters } from '../hooks/useCounters';
import '../styles/Pages.css';

const About = () => {
  useReveal();
  useCounters();

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

      <section className="page-hero">
        <div className="mesh-bg"></div>
        <div className="container">
          <div className="reveal">
            <div className="section-tag section-tag-white">Our Story</div>
            <h1>We're Building The<br /><em className="gradient-text">Reward Infrastructure Layer.</em></h1>
            <p>TruVish was created to solve a simple problem — rewards work, but the economics don't.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="about-story" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72 }}>
            <div className="reveal">
              <div className="section-tag section-tag-teal">The Origin</div>
              <h2>Built From a Real Frustration.</h2>
              <p>We spent years watching brands burn through ad budgets, watching CAC climb every quarter, and watching loyalty programs fail to move the needle.</p>
              <p>So we asked: what if rewards only cost you when they worked? TruVish is that answer.</p>
              <Link to="/how-it-works" className="btn btn-primary">See How It Works →</Link>
            </div>
            <div className="about-visual reveal" style={{ background: 'var(--gradient-dark)', borderRadius: 'var(--radius-xl)', padding: 48 }}>
              <div style={{ color: 'var(--teal)', fontSize: '0.78rem' }}>TruVish Journey</div>
              <div style={{ marginTop: 24 }}>2022 — The Idea: Identified broken economics of incentive marketing</div>
              <div style={{ marginTop: 16 }}>2023 — Building: Built performance-based reward infrastructure</div>
              <div style={{ marginTop: 16 }}>2024 — Growth: Scaled to 200+ brands, $2M+ attributed revenue</div>
              <div style={{ marginTop: 16 }}>2025 — Now: 500+ brands. The reward infrastructure layer</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: 'var(--gradient-dark)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            <div><div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'white' }}><span data-count="500" data-suffix="+">0+</span></div><div style={{ color: 'rgba(169,214,226,0.7)' }}>Brands powered</div></div>
            <div><div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'white' }}>$<span data-count="12" data-suffix="M+">0M+</span></div><div style={{ color: 'rgba(169,214,226,0.7)' }}>Attributed revenue</div></div>
            <div><div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'white' }}><span data-count="3.8" data-suffix="x">0x</span></div><div style={{ color: 'rgba(169,214,226,0.7)' }}>Avg. ROAS improvement</div></div>
            <div><div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--teal)' }}><span data-count="5" data-suffix=" min">0 min</span></div><div style={{ color: 'rgba(169,214,226,0.7)' }}>Time to first campaign</div></div>
          </div>
        </div>
      </section>

      <section className="team-section" style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag section-tag-teal">The Team</div>
            <h2>Built by People Who've<br />Lived the Problem.</h2>
          </div>
          <div className="team-grid">
            <div className="team-card reveal"><div className="team-avatar">A</div><h4>Aryan Kapoor</h4><div className="team-role">Co-founder & CEO</div><p>10 years in growth marketing. Former Head of Growth at a Series B D2C brand.</p></div>
            <div className="team-card reveal"><div className="team-avatar" style={{ background: 'var(--gradient-teal)' }}>S</div><h4>Sneha Rathod</h4><div className="team-role">Co-founder & CTO</div><p>Ex-fintech engineer with experience building reward infrastructure at scale.</p></div>
            <div className="team-card reveal"><div className="team-avatar" style={{ background: 'linear-gradient(135deg,#0E4A63,#1AB087)' }}>R</div><h4>Rohan Mehta</h4><div className="team-role">Head of Product</div><p>Product leader who believes speed is a feature.</p></div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--gradient-hero)', position: 'relative', textAlign: 'center' }}>
        <div className="mesh-bg"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal">
            <div className="section-tag section-tag-white">Join Us</div>
            <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Why Isn't Every Brand<br />Using This Yet?</h2>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: 40 }}>
              <button className="btn btn-primary btn-lg btn-glow" onClick={() => showToast('🚀 Getting started! We\'ll contact you shortly.')}>🚀 Start Using TruVish</button>
              <button className="btn btn-outline btn-lg" onClick={() => showToast('📞 Talk to team request received!')}>💬 Talk to the Team</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;