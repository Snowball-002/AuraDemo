import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Home() {
  const featured = products;

  return (
    <div style={{ perspective: '2000px' }}>
      {/* 3D Hero Section with Logo Integration */}
      <section className="hero" style={{ transformStyle: 'preserve-3d' }}>
        <img 
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80" 
          alt="High Fashion Model Editorial" 
          className="hero-bg"
          style={{ transform: 'scale(1.05) translateZ(-100px)', transition: 'transform 10s linear', opacity: 0.8 }}
        />
        <div className="hero-overlay" style={{ background: 'linear-gradient(to top, rgba(5,5,5,1) 5%, rgba(5,5,5,0.1) 100%)' }}></div>
        
        {/* Giant Logo Overlapping Model */}
        <div style={{ position: 'absolute', top: '25%', left: '0', width: '100%', textAlign: 'center', zIndex: 0, opacity: 0.3, transform: 'translateZ(-50px)' }}>
          <svg viewBox="0 0 800 200" style={{ width: '90%', maxWidth: '1200px' }}>
             <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="var(--font-serif)" fontSize="200px" fontWeight="600" letterSpacing="15px">AURA</text>
          </svg>
        </div>

        <div className="container" style={{ zIndex: 1, position: 'relative', textAlign: 'center', transform: 'translateZ(50px)' }}>
          <h1 className="heading-hero" style={{ animation: 'fadeInUp 1s ease-out' }}>
            <i>Haute Couture</i><br/>Redefined
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem', color: '#e0e0e0', animation: 'fadeInUp 1.2s ease-out', letterSpacing: '1px' }}>
            Experience the zenith of editorial fashion. Exclusively featuring master-tailored garments draped over the world's leading supermodels.
          </p>
          <div style={{ animation: 'fadeInUp 1.4s ease-out' }}>
             <Link to="/shop" className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1rem' }}>Enter The Collection</Link>
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section style={{ background: '#050505', padding: '1.5rem 0', overflow: 'hidden', whiteSpace: 'nowrap', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ display: 'inline-block', animation: 'marquee 40s linear infinite', fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text)', fontStyle: 'italic', fontWeight: 600 }}>
          <span style={{ margin: '0 3rem' }}>Pinnacle of Craftsmanship</span> • 
          <span style={{ margin: '0 3rem' }}>Avant-Garde Architecture</span> • 
          <span style={{ margin: '0 3rem' }}>Generational Tailoring</span> • 
          <span style={{ margin: '0 3rem', color: 'var(--color-primary)' }}>Maison AURA</span> • 
          <span style={{ margin: '0 3rem' }}>Pinnacle of Craftsmanship</span> • 
          <span style={{ margin: '0 3rem' }}>Avant-Garde Architecture</span> • 
          <span style={{ margin: '0 3rem' }}>Generational Tailoring</span> • 
          <span style={{ margin: '0 3rem', color: 'var(--color-primary)' }}>Maison AURA</span>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}} />
      </section>

      {/* Featured Products */}
      <section className="section container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5rem' }}>
           <span className="text-caption">Current Season</span>
           <h2 className="heading-section" style={{ marginBottom: '1rem' }}>The Iconics</h2>
           <Link to="/shop" className="text-muted" style={{ textDecoration: 'underline', fontStyle: 'italic', fontSize: '1.2rem' }}>View the runway catalogue</Link>
        </div>
        
        {/* 3D Model Card Grid */}
        <div className="product-grid">
          {featured.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card">
              <div className="product-img-wrapper" style={{ height: '700px' }}>
                <img src={product.img} alt={product.name} className="product-img" />
              </div>
              <p className="text-caption" style={{ marginBottom: '0.3rem', fontSize: '0.8rem' }}>{product.category}</p>
              <h3 className="product-title" style={{ fontSize: '2rem' }}>{product.name}</h3>
              <p className="product-price" style={{ fontSize: '1.2rem' }}>{product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Editorial Quote & Massive Typography overlay */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '12rem 0', textAlign: 'center', backgroundColor: '#020202', position: 'relative', overflow: 'hidden' }}>
         <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '30vw', opacity: 0.03, whiteSpace: 'nowrap', zIndex: 0 }}>VOGUE</h1>
         <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: 'var(--font-serif)', maxWidth: '900px', margin: '0 auto', lineHeight: '1.3', fontWeight: 600, fontStyle: 'italic', textShadow: '2px 2px 20px rgba(0,0,0,1)' }}>
              "AURA has achieved the impossible: redefining architectural tailoring with weightless fluidity."
            </h2>
            <span className="text-caption" style={{ marginTop: '4rem', display: 'block', fontSize: '1rem', letterSpacing: '5px' }}>Vogue Paris Couture Week</span>
         </div>
      </section>

      {/* Immersive 3D Parallax Model Image */}
      <section style={{ height: '100vh', position: 'relative', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url('https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80')`, transformStyle: 'preserve-3d' }}>
         <div className="hero-overlay" style={{ opacity: 0.6, background: 'linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0.4) 100%)' }}></div>
         
         <div className="container" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', transform: 'translateZ(100px)' }}>
            <div className="glass-panel" style={{ padding: '5rem 3rem', maxWidth: '800px', borderRadius: '4px' }}>
               <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontFamily: 'var(--font-serif)', color: '#fff', marginBottom: '1.5rem', fontWeight: 600 }}>The Art of Draping</h2>
               <p style={{ color: '#ccc', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '2' }}>
                 Witness the harmony of master seamstresses and world-renowned supermodels. Our pieces are strictly tailored to elevate the human form with dramatic lighting and meticulous attention to structure.
               </p>
               <button className="btn btn-outline" style={{ marginTop: '3rem' }}>Book a Fitting</button>
            </div>
         </div>
      </section>

      {/* The Runway Lookbook / Extra Photos */}
      <section className="section" style={{ overflow: 'hidden', padding: '6rem 0' }}>
         <div className="container" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span className="text-caption">The Lookbook</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>Runway Archives</h2>
         </div>
         {/* Sliding horizontal gallery track */}
         <div style={{ display: 'flex', gap: '2rem', padding: '0 5%', overflowX: 'auto', paddingBottom: '2rem', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <img src="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&q=80" alt="Runway 1" style={{ height: '600px', width: 'auto', objectFit: 'cover', transformStyle: 'preserve-3d', transition: 'transform 0.5s', ':hover': { transform: 'scale(1.05)' } }} />
            <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80" alt="Runway 2" style={{ height: '600px', width: 'auto', objectFit: 'cover', transformStyle: 'preserve-3d', transition: 'transform 0.5s', ':hover': { transform: 'scale(1.05)' } }} />
            <img src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&q=80" alt="Runway 3" style={{ height: '600px', width: 'auto', objectFit: 'cover', transformStyle: 'preserve-3d', transition: 'transform 0.5s', ':hover': { transform: 'scale(1.05)' } }} />
            <img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80" alt="Runway 4" style={{ height: '600px', width: 'auto', objectFit: 'cover', transformStyle: 'preserve-3d', transition: 'transform 0.5s', ':hover': { transform: 'scale(1.05)' } }} />
            <img src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80" alt="Runway 5" style={{ height: '600px', width: 'auto', objectFit: 'cover', transformStyle: 'preserve-3d', transition: 'transform 0.5s', ':hover': { transform: 'scale(1.05)' } }} />
            <img src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80" alt="Runway 6" style={{ height: '600px', width: 'auto', objectFit: 'cover', transformStyle: 'preserve-3d', transition: 'transform 0.5s', ':hover': { transform: 'scale(1.05)' } }} />
            <img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80" alt="Runway 7" style={{ height: '600px', width: 'auto', objectFit: 'cover', transformStyle: 'preserve-3d', transition: 'transform 0.5s', ':hover': { transform: 'scale(1.05)' } }} />
            <img src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?auto=format&fit=crop&q=80" alt="Runway 8" style={{ height: '600px', width: 'auto', objectFit: 'cover', transformStyle: 'preserve-3d', transition: 'transform 0.5s', ':hover': { transform: 'scale(1.05)' } }} />
            <img src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80" alt="Runway 9" style={{ height: '600px', width: 'auto', objectFit: 'cover', transformStyle: 'preserve-3d', transition: 'transform 0.5s', ':hover': { transform: 'scale(1.05)' } }} />
            <img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80" alt="Runway 10" style={{ height: '600px', width: 'auto', objectFit: 'cover', transformStyle: 'preserve-3d', transition: 'transform 0.5s', ':hover': { transform: 'scale(1.05)' } }} />
         </div>
      </section>

      {/* The Atelier Section with Model Side-by-Side */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container content-grid-2">
          <div style={{ paddingRight: '2rem' }}>
            <span className="text-caption">Behind The Seams</span>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '2rem', fontFamily: 'var(--font-serif)', fontWeight: 600, lineHeight: 1.1 }}>
              <i>Precision</i><br/>Tailoring
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '1.2rem', lineHeight: 2 }}>
              Every garment is a tribute to the editorial perfection of runway models. Woven in Milan ateliers and styled exclusively on internationally recognized faces, providing an unparalleled aesthetic experience.
            </p>
            <p className="text-muted mb-8" style={{ fontSize: '1.2rem', lineHeight: 2 }}>
              We source our cashmere exclusively from Mongolia, our silks from Como, and finish every piece under the blinding intensity of studio strobe lights to ensure perfection.
            </p>
            <Link to="/about" className="btn btn-outline" style={{ padding: '1.5rem 3rem' }}>Enter The House</Link>
          </div>
          <div className="glass-panel" style={{ height: '800px', padding: '0', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80" 
              alt="Editorial Model" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)', transition: 'transform 3s ease', transform: 'scale(1.02)' }} 
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1.02)'}
            />
          </div>
        </div>
      </section>

    </div>
  );
}
