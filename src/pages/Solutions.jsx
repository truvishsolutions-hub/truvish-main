// src/pages/Solutions.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import '../styles/Pages.css';

const Solutions = () => {
  useReveal();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.sol-tab').forEach(tab => tab.classList.remove('active-tab'));
          const tab = document.querySelector(`.sol-tab[data-section="${entry.target.id}"]`);
          if (tab) tab.classList.add('active-tab');
        }
      });
    }, { threshold: 0.4 });

    ['d2c', 'retail', 'apps', 'agencies'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
            <div className="section-tag section-tag-white">Solutions</div>
            <h1>Built for Your<br /><em className="gradient-text">Exact Growth Challenge.</em></h1>
            <p>Whether you're a D2C brand, retail chain, app, or agency — TruVish has a performance reward model for you.</p>
          </div>
        </div>
      </section>

      <div style={{ background: 'var(--white)', position: 'sticky', top: 72, zIndex: 100, borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 0, overflowX: 'auto' }}>
            {['d2c', 'retail', 'apps', 'agencies'].map(s => (
              <a key={s} href={`#${s}`} data-section={s} className="sol-tab" style={{ padding: '18px 28px', fontSize: '0.88rem', fontWeight: 600, color: 'var(--gray-500)', textDecoration: 'none', borderBottom: '3px solid transparent' }}>{s.toUpperCase()}</a>
            ))}
          </div>
        </div>
      </div>

      {[
        { id: 'd2c', title: 'Acquire More. Retain Longer. Spend Less.', desc: 'D2C brands face the brutal reality of rising CAC. TruVish lets you reward actions — not eyeballs.', bg: 'white', icon: '🛍️' },
        { id: 'retail', title: 'Turn Foot Traffic into Loyal Customers.', desc: 'Retail is fighting digital on one side and margin pressure on the other. TruVish gives stores a modern reward system.', bg: 'var(--bg-light)', icon: '🏪' },
        { id: 'apps', title: 'Reduce Churn. Drive Activation. Grow DAU.', desc: 'App growth teams fight churn every sprint. TruVish connects reward triggers to in-app actions.', bg: 'white', icon: '📱' },
        { id: 'agencies', title: 'Add Performance Rewards to Every Client\'s Stack.', desc: 'Agencies can now offer performance-based reward infrastructure as a managed service.', bg: 'var(--bg-light)', icon: '🤝' }
      ].map(seg => (
        <section key={seg.id} id={seg.id} style={{ padding: '80px 0', background: seg.bg }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
              <div className="seg-content reveal">
                <div className="section-tag section-tag-teal" style={{ display: 'inline-flex' }}>{seg.icon} {seg.id.toUpperCase()}</div>
                <h2>{seg.title}</h2>
                <p>{seg.desc}</p>
                <button className="btn btn-primary" style={{ marginTop: 32 }} onClick={() => showToast(`📞 ${seg.id.toUpperCase()} demo request received!`)}>See Demo →</button>
              </div>
              <div className="seg-visual" style={{ background: 'var(--gradient-dark)', borderRadius: 'var(--radius-xl)', padding: 40 }}>
                <div style={{ color: 'rgba(169,214,226,0.6)', fontSize: '0.78rem' }}>Performance Dashboard</div>
                <div style={{ marginTop: 20, padding: 16, background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}><span>ROAS</span><span>4.8x ↑</span></div>
                </div>
                <div style={{ marginTop: 12, padding: 16, background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}><span>Conversion Lift</span><span>+156%</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Solutions;