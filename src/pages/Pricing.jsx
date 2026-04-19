// src/pages/Pricing.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import '../styles/Pages.css';

const Pricing = () => {
  useReveal();
  const [isAnnual, setIsAnnual] = useState(false);

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

  const plans = [
    { name: 'Starter', monthly: 49, annual: 37, featured: false, desc: 'Perfect for small brands launching their first reward campaigns.' },
    { name: 'Growth', monthly: 149, annual: 112, featured: true, desc: 'For growing brands ready to make rewards their primary growth engine.' },
    { name: 'Enterprise', monthly: 'Custom', annual: 'Custom', featured: false, desc: 'For large brands needing maximum scale and custom infrastructure.' }
  ];

  return (
    <>
      <div className="cursor-glow"></div>

      <section className="page-hero">
        <div className="mesh-bg"></div>
        <div className="container">
          <div className="reveal">
            <div className="section-tag section-tag-white">Pricing</div>
            <h1>Pay Only When<br /><em className="gradient-text">Results Happen.</em></h1>
            <p>Simple. Transparent. Performance-aligned. No setup fees, no long-term contracts.</p>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <div className="pricing-toggle" style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 56 }}>
            <span>Monthly</span>
            <button onClick={() => setIsAnnual(!isAnnual)} style={{ width: 52, height: 28, borderRadius: 999, background: isAnnual ? 'var(--teal)' : 'var(--gray-200)', position: 'relative', border: 'none', cursor: 'pointer' }}>
              <div style={{ position: 'absolute', width: 20, height: 20, borderRadius: '50%', background: 'white', top: 4, left: isAnnual ? 28 : 4, transition: 'left 0.3s' }}></div>
            </button>
            <span>Annual <span className="toggle-save" style={{ background: 'rgba(26,176,135,0.12)', color: 'var(--teal)', padding: '3px 10px', borderRadius: 999, fontSize: '0.75rem' }}>Save 25%</span></span>
          </div>

          <div className="pricing-cards">
            {plans.map(plan => (
              <div key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <span className="featured-badge">Most Popular</span>}
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">
                  <span className="amount">
                    {typeof plan.monthly === 'number' ? (isAnnual ? plan.annual : plan.monthly) : plan.monthly}
                  </span>
                  {typeof plan.monthly === 'number' && <span className="period">/month</span>}
                </div>
                <p className="plan-desc">{plan.desc}</p>
                <button className={`btn ${plan.featured ? 'btn-primary' : 'btn-dark'}`} style={{ width: '100%', justifyContent: 'center' }} onClick={() => showToast(`📞 ${plan.name} plan selected! We'll contact you shortly.`)}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;