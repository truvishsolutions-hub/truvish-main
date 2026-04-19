// src/pages/Pricing.jsx
import { useState, useEffect } from 'react';
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

  const plans = [
    {
      name: 'Starter',
      monthly: 49,
      annual: 37,
      featured: false,
      desc: 'Perfect for small brands launching their first reward campaigns.',
      features: [
        { text: 'Up to 500 reward codes/month', enabled: true },
        { text: '3 active campaigns', enabled: true },
        { text: 'Basic analytics dashboard', enabled: true },
        { text: 'Link & QR code distribution', enabled: true },
        { text: 'Email support', enabled: true },
        { text: 'White-label branding', enabled: false },
        { text: 'API access', enabled: false },
        { text: 'Multi-brand rewards', enabled: false }
      ]
    },
    {
      name: 'Growth',
      monthly: 149,
      annual: 112,
      featured: true,
      desc: 'For growing brands ready to make rewards their primary growth engine.',
      features: [
        { text: 'Up to 5,000 reward codes/month', enabled: true },
        { text: 'Unlimited active campaigns', enabled: true },
        { text: 'Advanced analytics + ROI tracking', enabled: true },
        { text: 'All distribution channels', enabled: true },
        { text: 'Priority chat support', enabled: true },
        { text: 'White-label branding', enabled: true },
        { text: 'API access (standard)', enabled: true },
        { text: 'Multi-brand rewards', enabled: true }
      ]
    },
    {
      name: 'Enterprise',
      monthly: 'Custom',
      annual: 'Custom',
      featured: false,
      desc: 'For large brands, agencies, and enterprises needing maximum scale and custom infrastructure.',
      features: [
        { text: 'Unlimited reward codes', enabled: true },
        { text: 'Unlimited campaigns', enabled: true },
        { text: 'Custom analytics & reporting', enabled: true },
        { text: 'All distribution channels', enabled: true },
        { text: 'Dedicated account manager', enabled: true },
        { text: 'Full white-label + custom domain', enabled: true },
        { text: 'Full API + webhook access', enabled: true },
        { text: 'SLA + custom integrations', enabled: true }
      ]
    }
  ];

  // Comparison table data
  const comparisonFeatures = [
    ['Reward codes/month', '500', '5,000', 'Unlimited'],
    ['Active campaigns', '3', 'Unlimited', 'Unlimited'],
    ['Analytics', 'Basic', 'Advanced + ROI', 'Custom'],
    ['Distribution channels', 'Link + QR', 'All channels', 'All + Custom'],
    ['White-label branding', '✗', '✓', '✓ + Custom domain'],
    ['API access', '✗', 'Standard', 'Full + Webhooks'],
    ['Multi-brand rewards', '✗', '✓', '✓'],
    ['Support', 'Email', 'Priority Chat', 'Dedicated AM'],
    ['Custom integrations', '✗', '✗', '✓'],
    ['SLA guarantee', '✗', '✗', '✓']
  ];

  // FAQ data
  const faqs = [
    { q: 'Is there a free trial?', a: 'Yes — all plans come with a 14-day free trial. No credit card required to start.' },
    { q: 'What does "pay for outcomes" mean?', a: 'With our performance-based model, your reward budget is only consumed when a customer actually redeems a reward and completes the targeted action (purchase, sign-up, etc.).' },
    { q: 'Do I need technical knowledge to get started?', a: 'Not at all. TruVish is designed for non-technical teams. You can launch your first campaign in under 5 minutes with no code and no integrations required.' },
    { q: 'Can I switch plans anytime?', a: 'Yes — you can upgrade, downgrade, or cancel at any time. No lock-in periods, no cancellation fees.' },
    { q: 'What distribution channels are supported?', a: 'All plans support shareable links and QR codes. Growth and Enterprise plans also support email embedding, SMS, WhatsApp, and in-app delivery.' },
    { q: 'Do you offer white-labeling?', a: 'Yes — Growth and Enterprise plans include white-label options so you can deliver the experience under your own brand.' }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
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
              Pricing
            </div>
            <h1>
              Pay Only When<br />
              <em className="gradient-text" style={{ fontStyle: 'normal' }}>Results Happen.</em>
            </h1>
            <p>Simple. Transparent. Performance-aligned. No setup fees, no long-term contracts, no surprises.</p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="pricing">
        <div className="container">
          {/* Billing toggle */}
          <div className="pricing-toggle reveal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginBottom: '56px' }}>
            <span style={{ fontWeight: '500', color: !isAnnual ? 'var(--teal)' : 'var(--gray-500)' }}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              style={{
                width: '52px',
                height: '28px',
                borderRadius: '999px',
                background: isAnnual ? 'var(--teal)' : 'var(--gray-300)',
                position: 'relative',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
              }}
            >
              <div style={{
                position: 'absolute',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: 'white',
                top: '3px',
                left: isAnnual ? '27px' : '3px',
                transition: 'left 0.3s ease'
              }}></div>
            </button>
            <span style={{ fontWeight: '500', color: isAnnual ? 'var(--teal)' : 'var(--gray-500)' }}>
              Annual <span style={{ background: 'rgba(26,176,135,0.12)', color: 'var(--teal)', padding: '3px 10px', borderRadius: '999px', fontSize: '0.7rem', fontWeight: '600', marginLeft: '6px' }}>Save 25%</span>
            </span>
          </div>

          <div className="pricing-cards">
            {plans.map((plan, idx) => (
              <div key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''} reveal reveal-delay-${idx + 1}`}>
                {plan.featured && <span className="featured-badge">Most Popular</span>}
                <div className="plan-name">{plan.name}</div>

                {/* Monthly Price */}
                <div className="plan-price" style={{ display: !isAnnual && typeof plan.monthly === 'number' ? 'block' : 'none' }}>
                  <span className="currency">$</span>
                  <span className="amount">{plan.monthly}</span>
                  <span className="period">/month</span>
                </div>

                {/* Annual Price */}
                <div className="plan-price" style={{ display: isAnnual && typeof plan.annual === 'number' ? 'block' : 'none' }}>
                  <span className="currency">$</span>
                  <span className="amount">{plan.annual}</span>
                  <span className="period">/month, billed annually</span>
                </div>

                {/* Custom Price for Enterprise */}
                <div className="plan-price" style={{ display: typeof plan.monthly === 'string' ? 'block' : 'none' }}>
                  <span className="amount" style={{ fontSize: '2.2rem', color: plan.featured ? 'var(--white)' : 'var(--dark)' }}>{plan.monthly}</span>
                </div>

                <p className="plan-desc">{plan.desc}</p>
                <div className="plan-divider"></div>

                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={!feature.enabled ? 'disabled' : ''}>
                      <span className="check">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <button
                  className={`btn ${plan.featured ? 'btn-primary btn-glow' : 'btn-dark'}`}
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => {
                    if (plan.name === 'Enterprise') {
                      showToast('📞 Contact sales team! We\'ll reach out within 24 hours.');
                    } else {
                      showToast(`🎉 ${plan.name} plan 14-day free trial started! Check your email.`);
                    }
                  }}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="pricing-footer reveal">
            <p>All plans include a 14-day free trial. No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag section-tag-teal">Full Comparison</div>
            <h2>Everything You Get,<br />Side by Side.</h2>
          </div>
          <div className="reveal" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginTop: '16px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--gray-200)' }}>
                  <th style={{ textAlign: 'left', padding: '16px 20px', color: 'var(--dark)', fontWeight: '700' }}>Feature</th>
                  <th style={{ padding: '16px 20px', color: 'var(--dark)', fontWeight: '700', textAlign: 'center' }}>Starter</th>
                  <th style={{ padding: '16px 20px', color: 'var(--teal)', fontWeight: '700', textAlign: 'center', background: 'rgba(26,176,135,0.04)', borderRadius: '8px' }}>Growth</th>
                  <th style={{ padding: '16px 20px', color: 'var(--dark)', fontWeight: '700', textAlign: 'center' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--gray-200)', background: i % 2 === 0 ? 'transparent' : 'var(--gray-100)' }}>
                    <td style={{ padding: '14px 20px', color: 'var(--dark)', fontWeight: '500' }}>{row[0]}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: 'var(--gray-500)' }}>{row[1]}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: 'var(--teal)', fontWeight: '600', background: 'rgba(26,176,135,0.04)' }}>{row[2]}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: 'var(--gray-500)' }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag section-tag-dark">FAQ</div>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: '720px', margin: '0 auto' }} className="reveal">
            {faqs.map((faq, index) => (
              <div key={index} style={{ borderBottom: '1px solid var(--gray-200)' }}>
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '20px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: 'var(--dark)',
                    gap: '16px'
                  }}
                >
                  {faq.q}
                  <span style={{ color: 'var(--teal)', fontSize: '1.1rem', transition: 'transform 0.3s', flexShrink: 0 }}>
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: openFaq === index ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease'
                  }}
                >
                  <p style={{ paddingBottom: '20px', fontSize: '0.9rem', color: 'var(--gray-700)', lineHeight: '1.7' }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <h2 style={{ color: 'var(--dark)', marginBottom: '16px' }}>Not Sure Which Plan?</h2>
            <p style={{ color: 'var(--gray-500)', maxWidth: '500px', margin: '0 auto 36px' }}>
              Book a quick call and we'll recommend the right plan for your growth stage — no pitch, just advice.
            </p>
            <button className="btn btn-primary btn-lg btn-glow" onClick={() => showToast('📅 Demo booking coming soon! We\'ll contact you shortly.')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <polyline points="9 16 11 18 15 14" />
              </svg>
              Talk to Us Free
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;