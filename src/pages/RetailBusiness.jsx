import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { useCursorGlow } from '../hooks/useCursorGlow';
import '../styles/Pages.css';

const RetailBusinesses = () => {
  useReveal();
  useCursorGlow();

  return (
    <>
      <div className="cursor-glow"></div>

      <section className="page-hero audience-hero audience-hero-retail">
        <div className="mesh-bg"></div>
        <div className="container">
          <div className="audience-hero-inner">
            <div className="audience-copy reveal">
              <div className="section-tag section-tag-white">For Retail Businesses</div>
              <h1>
                Turn walk-ins into
                <br />
                <em className="gradient-text" style={{ fontStyle: 'normal' }}>
                  repeat buyers.
                </em>
              </h1>
              <p>
                Footfall is unpredictable. Loyalty is earned. TruVish helps retail stores
                run reward campaigns that bring customers back — without expensive POS
                integrations or loyalty card programs.
              </p>

              <div className="audience-actions">
                <Link to="/pricing" className="btn btn-primary btn-lg">
                  Sign up Today
                </Link>
              </div>
            </div>

            <div className="audience-panel reveal reveal-delay-2">
              <div className="audience-panel-label">IN-STORE REWARD FLOW</div>

              <div className="audience-step">
                <div className="audience-step-number">1</div>
                <div className="audience-step-text">Generate custom branded TruVish codes</div>
              </div>

              <div className="audience-step">
                <div className="audience-step-number">2</div>
                <div className="audience-step-text">Receives instant reward voucher</div>
              </div>

              <div className="audience-step">
                <div className="audience-step-number">3</div>
                <div className="audience-step-text">Returns, repeats & spends more</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RetailBusinesses;