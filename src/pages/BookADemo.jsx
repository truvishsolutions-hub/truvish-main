import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookADemo.css';

const initialErrors = {
  name: '',
  email: '',
  phone: '',
  api: '',
};

const initialForm = {
  name: '',
  email: '',
  phone: '',
};

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://truvish-backend-production.up.railway.app';

const BookADemo = () => {

  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] =
    useState(initialErrors);

  const [submitted, setSubmitted] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  // =========================================================
  // VALIDATE
  // =========================================================

  const validate = () => {

    const nextErrors = {
      ...initialErrors,
    };

    if (!form.name.trim()) {

      nextErrors.name =
        'Please enter your name.';
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(form.email.trim())
    ) {

      nextErrors.email =
        'Please enter a valid email address.';
    }

    if (
      !/^[\d\s+\-()]{7,15}$/
        .test(form.phone.trim())
    ) {

      nextErrors.phone =
        'Please enter a valid phone number.';
    }

    setErrors(nextErrors);

    return (
      !nextErrors.name &&
      !nextErrors.email &&
      !nextErrors.phone
    );
  };

  // =========================================================
  // HANDLE CHANGE
  // =========================================================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
      api: '',
    }));
  };

  // =========================================================
  // SUBMIT
  // =========================================================

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setErrors(initialErrors);

    try {

      const response = await fetch(
        `${API_BASE_URL}/api/book-demo`,
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json',
          },

          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {

        throw new Error(
          data?.message ||
          'Failed to submit request'
        );
      }

      // SUCCESS

      setSubmitted(true);

      setForm(initialForm);

    } catch (error) {

      console.error(
        'Demo Submit Error:',
        error
      );

      setErrors((prev) => ({
        ...prev,
        api:
          error.message ||
          'Unable to connect to backend.',
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

            {/* LEFT */}

            <div className="demo-copy">

              <div className="demo-pill">
                Free · No Commitment
              </div>

              <h1>
                Let&apos;s show you
                <br />
                <span>
                  TruVish in action.
                </span>
              </h1>

              <p>
                A quick 20-minute walkthrough
                tailored to your business.
              </p>

            </div>

            {/* RIGHT */}

            <div className="demo-card">

              {!submitted ? (

                <div>

                  <p className="demo-card-title">
                    Book your free demo
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                  >

                    {/* NAME */}

                    <div className="form-group">

                      <label>
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        className={
                          errors.name
                            ? 'error'
                            : ''
                        }
                      />

                      {errors.name && (
                        <span className="field-error">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* EMAIL */}

                    <div className="form-group">

                      <label>
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        placeholder="name@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className={
                          errors.email
                            ? 'error'
                            : ''
                        }
                      />

                      {errors.email && (
                        <span className="field-error">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    {/* PHONE */}

                    <div className="form-group">

                      <label>
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 9876543210"
                        value={form.phone}
                        onChange={handleChange}
                        className={
                          errors.phone
                            ? 'error'
                            : ''
                        }
                      />

                      {errors.phone && (
                        <span className="field-error">
                          {errors.phone}
                        </span>
                      )}
                    </div>

                    {/* API ERROR */}

                    {errors.api && (

                      <div className="api-error-message">
                        {errors.api}
                      </div>
                    )}

                    {/* BUTTON */}

                    <button
                      type="submit"
                      disabled={loading}
                      className="demo-submit"
                    >

                      {loading
                        ? 'Submitting...'
                        : 'Book My Demo'}

                    </button>

                  </form>

                </div>

              ) : (

                <div className="thankyou-state show">

                  <div className="thankyou-icon">
                    ✓
                  </div>

                  <h2>
                    You&apos;re all set! 🎉
                  </h2>

                  <p>
                    Our team will contact you
                    within 24 hours.
                  </p>

                  <Link
                    to="/"
                    className="thankyou-back"
                  >
                    Back to Home
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
