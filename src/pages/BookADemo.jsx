import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookADemo.css';

const initialErrors = { name: '', email: '', phone: '', api: '' };

const BookADemo = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const nextErrors = { ...initialErrors };

    if (!form.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!/^[\d\s+\-()]{7,15}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    setErrors(nextErrors);
    return !nextErrors.name && !nextErrors.email && !nextErrors.phone;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '', api: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setErrors((prev) => ({ ...prev, api: '' }));

    try {
      const response = await fetch('http://localhost:8080/api/demo-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        if (data?.errors) {
          setErrors((prev) => ({
            ...prev,
            name: data.errors.name || '',
            email: data.errors.email || '',
            phone: data.errors.phone || '',
            api: data.message || 'Failed to submit demo request.',
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            api: data?.message || 'Failed to submit demo request.',
          }));
        }
        return;
      }

      setSubmitted(true);
      setForm({ name: '', email: '', phone: '' });
      setErrors(initialErrors);
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        api: 'Unable to connect to backend. Please make sure Spring Boot is running on port 8080.',
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="cursor-glow"></div>

      <main className="demo-page">
        <div className="container">
          <div className="demo-container">
            <div className="demo-copy">
              <div className="demo-pill">Free · No Commitment</div>

              <h1>
                Let&apos;s show you
                <br />
                <span>TruVish in action.</span>
              </h1>

              <p>
                A quick 20-minute walkthrough tailored to your business. See exactly
                how reward campaigns work — from setup to redemption to revenue
                attribution.
              </p>

              <div className="demo-trust">
                <div className="demo-trust-item">
                  <div className="demo-trust-icon">⏱️</div>
                  20-minute focused demo
                </div>

                <div className="demo-trust-item">
                  <div className="demo-trust-icon">✓</div>
                  Tailored to your use case
                </div>

                <div className="demo-trust-item">
                  <div className="demo-trust-icon">🔒</div>
                  No credit card required
                </div>

                <div className="demo-trust-item">
                  <div className="demo-trust-icon">📞</div>
                  We&apos;ll call you within 24 hours
                </div>
              </div>
            </div>

            <div className="demo-card">
              {!submitted ? (
                <div>
                  <p className="demo-card-title">Book your free demo</p>
                  <p className="demo-card-sub">
                    Fill in your details and we&apos;ll be in touch shortly.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                      <label htmlFor="demoName">Full Name</label>
                      <input
                        id="demoName"
                        type="text"
                        name="name"
                        placeholder="e.g. Your Name"
                        value={form.name}
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                      />
                      {errors.name ? (
                        <span className="field-error">{errors.name}</span>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <label htmlFor="demoEmail">Email Address</label>
                      <input
                        id="demoEmail"
                        type="email"
                        name="email"
                        placeholder="e.g. name@yourbrand.com"
                        value={form.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                      />
                      {errors.email ? (
                        <span className="field-error">{errors.email}</span>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <label htmlFor="demoPhone">Phone Number</label>
                      <input
                        id="demoPhone"
                        type="tel"
                        name="phone"
                        placeholder="e.g. +91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        className={errors.phone ? 'error' : ''}
                      />
                      {errors.phone ? (
                        <span className="field-error">{errors.phone}</span>
                      ) : null}
                    </div>

                    {errors.api ? (
                      <div className="api-error-message">{errors.api}</div>
                    ) : null}

                    <button
                      type="submit"
                      className={`demo-submit ${loading ? 'loading' : ''}`}
                      disabled={loading}
                    >
                      {loading ? 'Submitting…' : 'Book My Demo'}
                      <span className="demo-submit-arrow">→</span>
                    </button>
                  </form>

                  <p className="demo-privacy">
                    🔐 Your information is safe with us. No spam, ever.
                  </p>
                </div>
              ) : (
                <div className="thankyou-state show">
                  <div className="thankyou-icon">✓</div>

                  <h2 className="thankyou-title">You&apos;re all set! 🎉</h2>

                  <p className="thankyou-msg">
                    Thanks for reaching out. Our team will contact you within{' '}
                    <strong>24 hours</strong> to schedule your personalised
                    TruVish demo.
                  </p>

                  <Link to="/" className="thankyou-back">
                    Back to Home
                    <span>→</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookADemo;