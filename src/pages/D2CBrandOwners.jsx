import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { useCursorGlow } from '../hooks/useCursorGlow';
import '../styles/Pages.css';

const D2CBusinessOwners = () => {
  useReveal();
  useCursorGlow();

  return (
    <>
      <div className="cursor-glow"></div>

      <section className="page-hero audience-hero audience-hero-d2c">
        <div className="mesh-bg"></div>
        <div className="container">
          <div className="audience-hero-inner">
            <div className="audience-copy reveal">
              <div className="section-tag section-tag-white">For D2C Business Owners</div>
              <h1>
                Build retention,
                <br />
                <em className="gradient-text" style={{ fontStyle: 'normal' }}>
                  not just rewards.
                </em>
              </h1>
              <p>
                Acquisition is expensive. Repeat purchases are where margin lives.
                TruVish closes the loop with rewards that pull customers back.
              </p>

              <div className="audience-actions">
                <Link to="/pricing" className="btn btn-primary btn-lg">
                  Sign up Today
                </Link>
              </div>
            </div>

            <div className="audience-panel reveal reveal-delay-2">
              <div className="audience-panel-label">THE REWARD LOOP</div>

              <div className="audience-step">
                <div className="audience-step-number">1</div>
                <div className="audience-step-text">Customer purchases</div>
              </div>

              <div className="audience-step">
                <div className="audience-step-number">2</div>
                <div className="audience-step-text">Receive TruVish reward codes</div>
              </div>

              <div className="audience-step">
                <div className="audience-step-number">3</div>
                <div className="audience-step-text">Returns & repeats</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default D2CBusinessOwners;