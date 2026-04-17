import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 300, letterSpacing: '2px', marginBottom: '1rem' }}>Maison AURA</h2>
          <p className="text-muted" style={{ maxWidth: '400px', margin: '0 auto', fontSize: '0.9rem', fontStyle: 'italic', letterSpacing: '0.5px' }}>
            Elevating the human form through relentless perfectionism and generational craftsmanship.
          </p>
        </div>
        
        <div className="footer-grid">
          <div>
            <h4 className="footer-title">The Collections</h4>
            <ul className="footer-links">
              <li><Link to="/shop">All Ready-to-Wear</Link></li>
              <li><Link to="/shop?category=dresses">Dresses & Gowns</Link></li>
              <li><Link to="/shop?category=outerwear">Structured Outerwear</Link></li>
              <li><Link to="/shop?category=shoes">Footwear</Link></li>
              <li><Link to="/shop?category=accessories">Fine Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">The House</h4>
            <ul className="footer-links">
              <li><Link to="/about">The Atelier</Link></li>
              <li><Link to="/story">Our Heritage</Link></li>
              <li><Link to="/story?section=sustainability">Sustainability Manifesto</Link></li>
              <li><Link to="/story?section=careers">Careers at AURA</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Client Care</h4>
            <ul className="footer-links">
              <li><Link to="/help">Knowledge Base</Link></li>
              <li><Link to="/contact">Contact Concierge</Link></li>
              <li><Link to="/help?section=returns">Alterations & Returns</Link></li>
              <li><Link to="/help?section=shipping">Global Logistics</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Legal & Terms</h4>
            <ul className="footer-links">
              <li><Link to="/legal">Privacy Policy</Link></li>
              <li><Link to="/legal">Terms of Service</Link></li>
              <li><Link to="/legal">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p style={{ letterSpacing: '4px' }}>&copy; {new Date().getFullYear()} AURA FASHION HOUSE.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>MILAN</span>
            <span>PARIS</span>
            <span>NEW YORK</span>
            <span>TOKYO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
