// src/pages/About.jsx
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import '../styles/Pages.css';

const About = () => {
  useReveal();

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

  // Counter animation
  useEffect(() => {
    const counters = document.querySelectorAll('[data-count]');

    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute('data-count'));
      const suffix = counter.getAttribute('data-suffix') || '';
      let current = 0;
      const increment = target / 50;
      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.floor(current) + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + suffix;
        }
      };
      updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          animateCounter(counter);
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1AB087" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="#1AB087"/></svg>,
      title: "Outcomes Over Outputs",
      desc: "We build for results, not features. Every product decision maps back to customer growth."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1AB087" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3" fill="#A9D6E2" stroke="#1AB087"/></svg>,
      title: "Radical Transparency",
      desc: "Clear pricing, clear attribution, clear ROI. No hidden fees, no black-box metrics."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#1AB087" stroke="#1AB087" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
      title: "Speed as a Feature",
      desc: "5 minutes to launch. Not 5 weeks. Speed is respect for our customers' time and opportunity."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1AB087" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1.5 1.5"/><path d="M13 7a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1.5-1.5"/></svg>,
      title: "Aligned Incentives",
      desc: "We only win when our customers win. Our pricing reflects this — performance-based, always."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1AB087" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" fill="#A9D6E2" stroke="#1AB087"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg>,
      title: "Infrastructure Thinking",
      desc: "We're not building a campaign tool. We're building the reward infrastructure layer for the internet."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#A9D6E2" stroke="#1AB087" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
      title: "Customer Obsession",
      desc: "Every feature exists because a customer needed it. We listen before we build."
    }
  ];

  const team = [
    { initial: "A", name: "Aryan Kapoor", role: "Co-founder & CEO", bio: "10 years in growth marketing. Former Head of Growth at a Series B D2C brand. Obsessed with CAC efficiency.", bg: "var(--gradient-dark)" },
    { initial: "S", name: "Sneha Rathod", role: "Co-founder & CTO", bio: "Ex-fintech engineer with experience building reward infrastructure at scale. Shipped products used by 5M+ users.", bg: "var(--gradient-teal)" },
    { initial: "R", name: "Rohan Mehta", role: "Head of Product", bio: "Product leader who believes speed is a feature. Designed TruVish's zero-friction campaign builder from the ground up.", bg: "linear-gradient(135deg,#0E4A63,#1AB087)" }
  ];

  return (
    <>
      <div className="cursor-glow"></div>

      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="mesh-bg"></div>
        <div className="container">
          <div className="reveal">
            <div className="section-tag section-tag-white" style={{ display: 'inline-flex', marginBottom: '20px' }}>
              Our Story
            </div>
            <h1>
              We're Building The<br />
              <em className="gradient-text" style={{ fontStyle: 'normal' }}>Reward Infrastructure Layer.</em>
            </h1>
            <p>TruVish was created to solve a simple problem — rewards work, but the economics don't. So we rebuilt the model from scratch.</p>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="about" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="about-story" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>
            <div className="about-story-text reveal">
              <div className="section-tag section-tag-teal" style={{ display: 'inline-flex', marginBottom: '20px' }}>
                The Origin
              </div>
              <h2>Built From a Real Frustration.</h2>
              <p>We spent years watching brands burn through ad budgets, watching CAC climb every quarter, and watching loyalty programs fail to move the needle — because they were built on the wrong economics.</p>
              <p>Brands would spend upfront on rewards, with no guarantee of outcomes. The ROI was murky. The infrastructure was complex. And the flexibility was near zero.</p>
              <p>So we asked: what if rewards only cost you when they worked? What if you could launch a campaign in minutes, not months? What if incentives could be as measurable as paid ads?</p>
              <p>TruVish is that answer.</p>
              <Link to="/how-it-works" className="btn btn-primary" style={{ marginTop: '8px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                See How It Works
              </Link>
            </div>

            <div className="about-visual reveal reveal-delay-2">
              <div style={{ color: 'rgba(169,214,226,0.6)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '24px' }}>
                TruVish Journey
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {/* Timeline Item 1 */}
                <div style={{ display: 'flex', gap: '16px', paddingBottom: '28px', position: 'relative' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--teal)', marginTop: '4px', flexShrink: 0 }}></div>
                    <div style={{ width: '2px', flex: 1, background: 'rgba(26,176,135,0.25)', marginTop: '6px' }}></div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--teal)', fontSize: '0.78rem', fontWeight: '700', marginBottom: '4px' }}>2022 — The Idea</div>
                    <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.6' }}>Identified the broken economics of incentive marketing after working with 40+ brands.</div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div style={{ display: 'flex', gap: '16px', paddingBottom: '28px', position: 'relative' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--teal)', marginTop: '4px', flexShrink: 0 }}></div>
                    <div style={{ width: '2px', flex: 1, background: 'rgba(26,176,135,0.25)', marginTop: '6px' }}></div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--teal)', fontSize: '0.78rem', fontWeight: '700', marginBottom: '4px' }}>2023 — Building</div>
                    <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.6' }}>Built the performance-based reward infrastructure model and launched with 10 beta brands.</div>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div style={{ display: 'flex', gap: '16px', paddingBottom: '28px', position: 'relative' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--teal)', marginTop: '4px', flexShrink: 0 }}></div>
                    <div style={{ width: '2px', flex: 1, background: 'rgba(26,176,135,0.25)', marginTop: '6px' }}></div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--teal)', fontSize: '0.78rem', fontWeight: '700', marginBottom: '4px' }}>2024 — Growth</div>
                    <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.6' }}>Scaled to 200+ brands across D2C, retail, and apps. $2M+ in reward-attributed revenue.</div>
                  </div>
                </div>

                {/* Timeline Item 4 */}
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--teal)', marginTop: '4px', flexShrink: 0, boxShadow: '0 0 0 4px rgba(26,176,135,0.2)' }}></div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--teal)', fontSize: '0.78rem', fontWeight: '700', marginBottom: '4px' }}>2025 — Now</div>
                    <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.6' }}>500+ brands. The reward infrastructure layer for the next era of growth marketing.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="about-mission reveal" style={{ padding: '80px 0', background: 'var(--gradient-dark)', textAlign: 'center' }}>
        <div className="container">
          <blockquote style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--white)', lineHeight: '1.3', maxWidth: '800px', margin: '0 auto' }}>
            "Make incentives the most powerful growth channel<br />for <span style={{ color: 'var(--teal)' }}>every business</span> — regardless of size."
          </blockquote>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="about-values" style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag section-tag-teal">Our Values</div>
            <h2>How We Think About<br />Building TruVish.</h2>
          </div>
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginTop: '48px' }}>
            {values.map((value, idx) => (
              <div key={idx} className={`card reveal reveal-delay-${(idx % 3) + 1}`} style={{ padding: '32px', background: 'var(--bg-light)', borderRadius: 'var(--radius-lg)', transition: 'var(--transition)', textAlign: 'center' }}>
                <div className="card-icon card-icon-teal" style={{ marginBottom: '20px' }}>{value.icon}</div>
                <h4 style={{ color: 'var(--dark)', marginBottom: '12px', fontSize: '1.2rem' }}>{value.title}</h4>
                <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS SECTION */}
      <section style={{ padding: '80px 0', background: 'var(--gradient-dark)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center' }} className="reveal">
            <div>
              <div style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--white)', letterSpacing: '-0.03em' }}>
                <span data-count="500" data-suffix="+">0+</span>
              </div>
              <div style={{ color: 'rgba(169,214,226,0.7)', fontSize: '0.9rem', marginTop: '8px' }}>Brands powered</div>
            </div>
            <div>
              <div style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--white)', letterSpacing: '-0.03em' }}>
                $<span data-count="12" data-suffix="M+">0M+</span>
              </div>
              <div style={{ color: 'rgba(169,214,226,0.7)', fontSize: '0.9rem', marginTop: '8px' }}>In reward-attributed revenue</div>
            </div>
            <div>
              <div style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--white)', letterSpacing: '-0.03em' }}>
                <span data-count="3.8" data-suffix="x">0x</span>
              </div>
              <div style={{ color: 'rgba(169,214,226,0.7)', fontSize: '0.9rem', marginTop: '8px' }}>Avg. ROAS improvement</div>
            </div>
            <div>
              <div style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--teal)', letterSpacing: '-0.03em' }}>
                <span data-count="5" data-suffix=" min">0 min</span>
              </div>
              <div style={{ color: 'rgba(169,214,226,0.7)', fontSize: '0.9rem', marginTop: '8px' }}>Avg. time to first campaign</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section" style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag section-tag-teal">The Team</div>
            <h2>Built by People Who've<br />Lived the Problem.</h2>
            <p style={{ color: 'var(--gray-600)', maxWidth: '600px', margin: '16px auto 0' }}>Our team comes from growth marketing, fintech, and product — so we know what it takes to make rewards actually work.</p>
          </div>
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginTop: '48px' }}>
            {team.map((member, idx) => (
              <div key={idx} className={`team-card reveal reveal-delay-${idx + 1}`} style={{ textAlign: 'center', padding: '40px 28px', background: 'var(--bg-light)', borderRadius: 'var(--radius-lg)', transition: 'var(--transition)' }}>
                <div className="team-avatar" style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '800', color: 'var(--white)', background: member.bg }}>{member.initial}</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--dark)', marginBottom: '4px' }}>{member.name}</h4>
                <div className="team-role" style={{ fontSize: '0.85rem', color: 'var(--teal)', fontWeight: '600', marginBottom: '12px' }}>{member.role}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray-600)', lineHeight: '1.5' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section style={{ padding: '80px 0', background: 'var(--gradient-hero)', position: 'relative', textAlign: 'center', overflow: 'hidden' }}>
        <div className="mesh-bg"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal">
            <div className="section-tag section-tag-white" style={{ display: 'inline-flex', marginBottom: '20px' }}>Join Us</div>
            <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Why Isn't Every Brand<br />Using This Yet?</h2>
            <p style={{ color: 'rgba(169,214,226,0.8)', maxWidth: '500px', margin: '0 auto 40px', fontSize: '1.05rem' }}>That question is why we built TruVish. Let's answer it together.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg btn-glow" onClick={() => showToast('🚀 Getting started! We\'ll contact you shortly.')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                </svg>
                Start Using TruVish
              </button>
              <button className="btn btn-outline btn-lg" onClick={() => showToast('📞 Talk to team request received! We\'ll reach out within 24 hours.')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Talk to the Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;