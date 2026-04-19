// src/pages/Solutions.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import '../styles/Pages.css';

const Solutions = () => {
  useReveal();
  const [activeTab, setActiveTab] = useState('d2c');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
          // Update URL hash without scrolling
          history.replaceState(null, '', `#${entry.target.id}`);
        }
      });
    }, { threshold: 0.4 });

    const sections = ['d2c', 'retail', 'apps', 'agencies'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Check initial hash
    const hash = window.location.hash.slice(1);
    if (hash && sections.includes(hash)) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    return () => observer.disconnect();
  }, []);

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  const solutions = [
    {
      id: 'd2c',
      title: 'D2C Brands',
      heading: 'Acquire More.<br />Retain Longer. Spend Less.',
      description: 'D2C brands face the brutal reality of rising CAC and shrinking margins. TruVish lets you reward actions — not eyeballs — so every dollar spent drives a measurable outcome.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
      outcomes: [
        'Reward first purchases without flat discounts that kill margin',
        'Launch referral programs in minutes — no dev required',
        'Reduce repeat-purchase gaps with milestone rewards',
        'Full attribution on every campaign — know exactly what worked',
        'Scale rewards during peak seasons without infrastructure stress'
      ],
      metrics: [
        { label: 'Customer Acquisition Cost', value: '$12.40', badge: '↓ 34% vs before' },
        { label: 'Repeat Purchase Rate', value: '68%', badge: '↑ 22 pts' },
        { label: 'Referral Revenue Share', value: '28%', badge: '↑ 3.2x' },
        { label: 'Campaign ROAS', value: '4.8x', badge: '↑ Industry avg: 2.1x' }
      ]
    },
    {
      id: 'retail',
      title: 'Retail Stores',
      heading: 'Turn Foot Traffic into<br />Loyal Customers.',
      description: 'Retail is fighting digital on one side and margin pressure on the other. TruVish gives stores a modern reward system that drives repeat visits and grows basket size — without the IT overhead.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}><path d="M3 9l1-6h16l1 6"/><path d="M3 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0"/><path d="M5 9v12h14V9"/><rect x="9" y="14" width="6" height="7"/></svg>,
      outcomes: [
        'QR-code based reward delivery — no app install needed',
        'Reward repeat visits with progressive loyalty tiers',
        'Drive upsells with spend-milestone rewards',
        'Multi-location support with unified reporting',
        'Seasonal campaign activation in under 10 minutes'
      ],
      metrics: [
        { label: 'Visit Frequency (monthly)', value: '3.4×', badge: '↑ 1.8x baseline' },
        { label: 'Avg. Basket Size', value: '$84', badge: '↑ $21 lift' },
        { label: 'QR Redemption Rate', value: '73%', badge: 'Industry avg: 31%' },
        { label: 'Customer Retention (90d)', value: '61%', badge: '↑ 19 pts' }
      ]
    },
    {
      id: 'apps',
      title: 'Apps & SaaS',
      heading: 'Reduce Churn.<br />Drive Activation. Grow DAU.',
      description: 'App growth teams fight churn, low activation, and poor retention metrics every sprint. TruVish connects reward triggers to in-app actions — so users are incentivized to stay and do more.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
      outcomes: [
        'Reward onboarding completions to boost activation rates',
        'Reduce day-7 churn with targeted reward sequences',
        'Drive feature adoption through milestone challenges',
        'Gamify subscription upgrades with exclusive rewards',
        'API-ready for teams that want deeper integration'
      ],
      metrics: [
        { label: 'Day-7 Retention', value: '52%', badge: '↑ from 28%' },
        { label: 'Activation Rate (D1)', value: '79%', badge: '↑ 31 pts' },
        { label: 'Free → Paid Conversion', value: '18%', badge: '↑ 2.4x' },
        { label: 'Monthly Churn Rate', value: '2.1%', badge: '↓ from 6.8%' }
      ]
    },
    {
      id: 'agencies',
      title: 'Agencies',
      heading: 'Add Performance Rewards<br />to Every Client\'s Stack.',
      description: 'Agencies can now offer performance-based reward infrastructure as a managed service — with white-label options, multi-client dashboards, and results that justify retainers effortlessly.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
      outcomes: [
        'White-label TruVish under your brand',
        'Manage multiple client campaigns from one dashboard',
        'Demonstrate clear ROI with exportable performance reports',
        'Differentiate your service offering in a crowded market',
        'Agency-specific pricing with volume discounts'
      ],
      metrics: [
        { label: 'Active Client Campaigns', value: '47', badge: 'Across 12 clients' },
        { label: 'Total Rewards Issued', value: '124K', badge: 'This month' },
        { label: 'Avg. Client ROAS', value: '4.1x', badge: 'vs 2.2x before' },
        { label: 'Retainer Renewal Rate', value: '96%', badge: '↑ 38 pts' }
      ]
    }
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
              Solutions
            </div>
            <h1>
              Built for Your<br />
              <em className="gradient-text" style={{ fontStyle: 'normal' }}>Exact Growth Challenge.</em>
            </h1>
            <p>Whether you're a D2C brand, a retail chain, an app, or an agency — TruVish has a performance reward model designed for you.</p>
          </div>
        </div>
      </section>

      {/* STICKY TABS NAVIGATION */}
      <div style={{ background: 'var(--white)', padding: 0, position: 'sticky', top: '72px', zIndex: 100, borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 0, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {solutions.map((sol) => (
              <button
                key={sol.id}
                onClick={() => scrollToSection(sol.id)}
                className={`sol-tab ${activeTab === sol.id ? 'active-tab' : ''}`}
                style={{
                  padding: '18px 28px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: activeTab === sol.id ? 'var(--teal)' : 'var(--gray-500)',
                  borderBottom: activeTab === sol.id ? '3px solid var(--teal)' : '3px solid transparent',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {sol.icon}
                {sol.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SOLUTION SECTIONS */}
      {solutions.map((sol, idx) => (
        <section
          key={sol.id}
          id={sol.id}
          className="solutions-segment"
          style={{
            padding: '80px 0',
            background: idx % 2 === 0 ? 'var(--white)' : 'var(--bg-light)'
          }}
        >
          <div className="container">
            <div
              className="seg-split"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '72px',
                alignItems: 'center',
                direction: idx === 1 || idx === 3 ? 'rtl' : 'ltr'
              }}
            >
              {/* Content */}
              <div className="seg-content reveal" style={{ direction: 'ltr' }}>
                <div className="section-tag section-tag-teal" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  {sol.icon} {sol.title}
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '20px' }}>
                  <span dangerouslySetInnerHTML={{ __html: sol.heading }} />
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--gray-600)', lineHeight: '1.7', marginBottom: '24px' }}>
                  {sol.description}
                </p>
                <ul className="outcome-list" style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                  {sol.outcomes.map((outcome, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px', fontSize: '0.9rem', color: 'var(--gray-700)' }}>
                      <span style={{ color: 'var(--teal)', marginTop: '2px' }}>✓</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn ${idx === 1 || idx === 3 ? 'btn-dark' : 'btn-primary'}`}
                  style={{ marginTop: '8px' }}
                  onClick={() => showToast(`📞 ${sol.title} demo request received! We'll contact you shortly.`)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  {idx === 1 || idx === 3 ? 'See Retail Demo' : idx === 0 ? 'See D2C Demo' : idx === 2 ? 'See App Demo' : 'Agency Partnership'}
                </button>
              </div>

              {/* Visual / Metrics */}
              <div className="seg-visual reveal reveal-delay-2" style={{ direction: 'ltr' }}>
                <div className="seg-visual-title" style={{ color: 'rgba(169,214,226,0.6)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '24px' }}>
                  {sol.id === 'd2c' ? 'D2C Performance Dashboard' : sol.id === 'retail' ? 'Retail Insights' : sol.id === 'apps' ? 'App Growth Metrics' : 'Agency Dashboard'}
                </div>
                {sol.metrics.map((metric, i) => (
                  <div key={i} className="seg-metric" style={{ marginBottom: '20px', padding: '16px', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-md)' }}>
                    <span className="seg-metric-label" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '8px' }}>
                      {metric.label}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                      <span className="seg-metric-value" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--white)' }}>
                        {metric.value}
                      </span>
                      <span className="seg-metric-badge" style={{ padding: '4px 10px', background: 'rgba(26,176,135,0.15)', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '600', color: 'var(--teal)' }}>
                        {metric.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA SECTION */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <h2 style={{ color: 'var(--dark)', marginBottom: '16px' }}>Which solution fits your team?</h2>
            <p style={{ color: 'var(--gray-500)', maxWidth: '500px', margin: '0 auto 36px' }}>
              Tell us about your growth challenge — we'll show you the exact TruVish setup that gets you results.
            </p>
            <button className="btn btn-primary btn-lg btn-glow" onClick={() => showToast('📞 Talk to a growth expert! We\'ll reach out within 24 hours.')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Talk to a Growth Expert
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;