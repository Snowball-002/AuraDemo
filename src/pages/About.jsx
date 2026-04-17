import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="page-header" style={{ height: '70vh' }}>
        <img 
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80" 
          alt="About Us Header" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, opacity: 0.4 }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="heading-hero">The House of AURA</h1>
          <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.4rem' }}>
            We are more than a brand. We are a sanctuary for uncompromising craftsmanship, bridging the gap between classical tailoring and future-forward 3D architectural design.
          </p>
        </div>
      </div>

      <section className="section container">
        <div className="content-grid-2">
          <div>
            <h2 className="heading-section" style={{ textAlign: 'left', fontSize: '2.5rem' }}>The Sartorial Vision</h2>
            <p className="text-muted mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              Founded by master tailor Alessandro Rossi, AURA was born from a singular desire: to marry the rigorous discipline of classic European tailoring with avant-garde modern silhouettes and computational fabric mapping. 
            </p>
            <p className="text-muted mb-8" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              Our garments are not merely assembled; they are sculpted. Utilizing advanced 3D simulations before cutting rare textiles allows us to eliminate waste while achieving fits that border on the impossible. We believe true luxury means never having to choose between striking aesthetics and enduring quality.
            </p>
            <Link to="/story" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}>Read Our Heritage</Link>
          </div>
          <div className="glass-panel" style={{ padding: '3rem' }}>
            <h3 style={{fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '2rem'}}>Core Pillars</h3>
            <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <li>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#fff' }}>Masterful Tailoring</h4>
                <p className="text-muted" style={{ fontSize: '1.1rem' }}>Every seam is precision-engineered for the perfect drape and movement, ensuring the garment breathes with the wearer.</p>
              </li>
              <li>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#fff' }}>Finest Textiles</h4>
                <p className="text-muted" style={{ fontSize: '1.1rem' }}>Sourcing only premium silks, pure Mongolian cashmere, and ethical leathers from historic generational mills in Italy and Scotland.</p>
              </li>
              <li>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#fff' }}>Slow Fashion Paradigm</h4>
                <p className="text-muted" style={{ fontSize: '1.1rem' }}>Producing strictly in limited drops and made-to-order bespoke phases to eliminate global waste and preserve utter exclusivity.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Meet the founders section */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
         <div className="container content-grid-2">
            <div style={{ order: 2 }}>
               <h2 className="heading-section" style={{ textAlign: 'left', fontSize: '2.5rem' }}>Leadership & Team</h2>
               <p className="text-muted mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                 Helmed by a diverse consortium of tech-entrepreneurs, digital 3D artists, and third-generation seamstresses. Our creative director, Elena Marino, previously spearheaded digital innovation for LVMH, bringing computational fluid dynamics into fabric draping.
               </p>
               <p className="text-muted" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                 Every individual who works at AURA—from the flagship concierge to the pattern cutters in Milan—is considered an artisan.
               </p>
            </div>
            <div style={{ order: 1 }}>
               <img src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?auto=format&fit=crop&q=80" alt="Abstract Team Leadership" style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '4px' }} />
            </div>
         </div>
      </section>
    </div>
  );
}
