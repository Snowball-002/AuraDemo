import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="section container" style={{ paddingTop: '12rem', textAlign: 'center' }}>
        <h1 className="heading-hero" style={{ fontSize: '4rem' }}>Received.</h1>
        <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
          Your message has been delivered to our concierge team. We will respond shortly.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn btn-outline">Back To Concierge</button>
      </div>
    );
  }

  return (
    <div className="section container" style={{ paddingTop: '8rem' }}>
      <h1 className="heading-hero" style={{ textAlign: 'center', marginBottom: '1rem' }}>Contact Us</h1>
      <p className="text-muted" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.2rem' }}>
        Our concierge is available across the globe to assist you with elevated service and styling advice.
      </p>

      <div className="content-grid-2">
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Full Name</label>
              <input required type="text" style={{ width: '100%', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', color: '#fff', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Email Address</label>
              <input required type="email" style={{ width: '100%', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', color: '#fff', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Inquiry Subject</label>
              <select style={{ width: '100%', padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: '#fff', outline: 'none' }}>
                <option>Order & Tracking</option>
                <option>Product Guidance</option>
                <option>Press & Media</option>
                <option>Concierge</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Message</label>
              <textarea required rows="5" style={{ width: '100%', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', color: '#fff', outline: 'none' }}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Send Inquiry</button>
          </form>
        </div>

        <div>
          <h3 style={{fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1.5rem'}}>Global Offices</h3>
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Paris (HQ)</h4>
            <p className="text-muted">Avenue Montaigne, 75008 Paris, France<br/>+33 1 40 00 00 00</p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>New York</h4>
            <p className="text-muted">Fifth Avenue, New York, NY 10022<br/>+1 212 555 0199</p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Tokyo</h4>
            <p className="text-muted">Ginza, Chuo City, Tokyo 104-0061<br/>+81 3 0000 0000</p>
          </div>
          
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem' }}>Concierge Hours</h4>
            <p className="text-muted">Monday - Saturday: 9:00 AM - 8:00 PM (CET)<br/>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
