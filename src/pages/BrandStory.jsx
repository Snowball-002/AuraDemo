import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function BrandStory() {
  const location = useLocation();

  useEffect(() => {
    if (location.search.includes('sustainability')) {
      const el = document.getElementById('sustainability');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      <div className="page-header">
        <img 
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80" 
          alt="Brand Story" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, opacity: 0.3 }}
        />
        <div className="container">
          <h1 className="heading-hero">Our Heritage</h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
            The relentless pursuit of aesthetic perfection.
          </p>
        </div>
      </div>

      <section className="section container">
        <div className="content-grid-2">
          <div>
            <h2 className="heading-section" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>The Genesis</h2>
            <p className="text-muted mb-4">
              Before AURA, the luxury fashion industry demanded compromise between traditional techniques and modern wearability. 
            </p>
            <p className="text-muted">
              In a private atelier in Milan, master tailor Alessandro Rossi partnered with contemporary designer Elena Marino to shatter this paradigm. Over five years, they developed a unique method of structural garment design—merging the rigid discipline of Savile Row with the fluid, ethereal sensibilities of modern Italian haute couture.
            </p>
          </div>
          <div className="glass-panel" style={{ height: '400px' }}>
             <img 
               src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80" 
               alt="Tailor at work" 
               style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
             />
          </div>
        </div>
      </section>

      <section id="sustainability" className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <h2 className="heading-section">A Commitment to the Earth</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p className="text-muted mb-8" style={{ fontSize: '1.1rem' }}>
              True luxury does not extract; it replenishes. Our commitments are foundational, not promotional.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
             <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
               <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.2rem' }}>Ethical Sourcing</h4>
               <p className="text-muted">We partner exclusively with historic European mills and fair-trade artisans to source our silks and wools.</p>
             </div>
             <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
               <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.2rem' }}>Zero Trace Packaging</h4>
               <p className="text-muted">By 2026, 100% of our primary packaging is constructed from recycled heavyweight paper and organic cotton bags.</p>
             </div>
             <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
               <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.2rem' }}>Slow Fashion</h4>
               <p className="text-muted">Our pieces are designed to last generations, subverting the harmful trend of seasonal disposable fashion.</p>
             </div>
          </div>
        </div>
      </section>
      
      <section className="section container">
        <h2 className="heading-section">Media & Press</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.7 }}>
           <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', letterSpacing: '2px' }}>VOGUE</h3>
           <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', letterSpacing: '2px' }}>GQ</h3>
           <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', letterSpacing: '2px' }}>HARPER'S BAZAAR</h3>
           <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', letterSpacing: '2px' }}>WWD</h3>
        </div>
        <p className="text-muted" style={{ textAlign: 'center', marginTop: '2rem', fontStyle: 'italic' }}>
          "AURA has achieved the impossible: redefining architectural tailoring with weightless fluidity."
        </p>
      </section>
    </div>
  );
}
