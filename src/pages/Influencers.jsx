import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { useCursorGlow } from '../hooks/useCursorGlow';
import '../styles/Pages.css';

const Influencers = () => {
  useReveal();
  useCursorGlow();

  return (
    <>
      <div className="cursor-glow"></div>

      <section className="page-hero audience-hero audience-hero-influencer">
        <div className="mesh-bg"></div>
        <div className="container">
          <div className="audience-hero-inner">
            <div className="audience-copy reveal">
              <div className="section-tag section-tag-white">For Influencers</div>
              <h1>
                Turn followers into loyal
                <br />
                <em className="gradient-text" style={{ fontStyle: 'normal' }}>
                  communities.
                </em>
              </h1>
              <p>
                A like is cheap. A reward is memorable. TruVish lets you give back to the
                people who actually engage — without sponsorship complexity.
              </p>

              <div className="audience-actions">
                <Link to="/pricing" className="btn btn-primary btn-lg">
                  Sign up Today
                </Link>
              </div>
            </div>

            <div className="audience-panel reveal reveal-delay-2">
              <div className="audience-panel-label">EXAMPLE FLOW</div>

              <div className="audience-step">
                <div className="audience-step-number">1</div>
                <div className="audience-step-text">Run a livestream giveaway</div>
              </div>

              <div className="audience-step">
                <div className="audience-step-number">2</div>
                <div className="audience-step-text">Send TruVish reward codes to top 50 fans</div>
              </div>

              <div className="audience-step">
                <div className="audience-step-number">3</div>
                <div className="audience-step-text">Engagement & loyalty spike</div>
              </div>

              <Link to="/for-d2c-brand-owners" className="audience-next-link">
                <span className="link-text">Explore next use cases</span>
                <span className="link-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Influencers;