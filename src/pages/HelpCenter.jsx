import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  const [activeTab, setActiveTab] = useState('faq');

  return (
    <div className="section container" style={{ paddingTop: '8rem' }}>
      <h1 className="heading-hero" style={{ textAlign: 'center', marginBottom: '1rem' }}>Client Care</h1>
      <p className="text-muted" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.2rem' }}>
        How may we assist you today? Our comprehensive knowledge base and dedicated styling team are at your service.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
        <button 
          onClick={() => setActiveTab('faq')}
          style={{ background: 'none', border: 'none', color: activeTab === 'faq' ? 'var(--color-primary)' : 'var(--color-text-muted)', fontSize: '1.1rem', cursor: 'pointer', fontFamily: 'var(--font-serif)' }}
        >
          FAQ & Sizing
        </button>
        <button 
          onClick={() => setActiveTab('returns')}
          style={{ background: 'none', border: 'none', color: activeTab === 'returns' ? 'var(--color-primary)' : 'var(--color-text-muted)', fontSize: '1.1rem', cursor: 'pointer', fontFamily: 'var(--font-serif)' }}
        >
          Returns & Alterations
        </button>
        <button 
          onClick={() => setActiveTab('tracking')}
          style={{ background: 'none', border: 'none', color: activeTab === 'tracking' ? 'var(--color-primary)' : 'var(--color-text-muted)', fontSize: '1.1rem', cursor: 'pointer', fontFamily: 'var(--font-serif)' }}
        >
          Order Tracking
        </button>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {activeTab === 'faq' && (
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Do you offer custom tailoring?</h4>
              <p className="text-muted">Yes. For clients visiting our flagship boutiques, we offer complimentary precise measurements and alterations. For online purchases, standard sizing applies.</p>
            </div>
            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Do you offer international shipping?</h4>
              <p className="text-muted">We currently ship via express courier to over 60 countries globally. International duties are calculated at checkout so there are no hidden fees upon delivery.</p>
            </div>
            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>How do your sizes run?</h4>
              <p className="text-muted">Our garments are tailored to European standards and generally fit true to size. Please refer to the specific Size Guide on each product page for exact dimensions.</p>
            </div>
          </div>
        )}

        {activeTab === 'returns' && (
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '2rem' }}>Returns & Alterations</h2>
            <p className="text-muted mb-4">
              We want you to be entirely satisfied with your AURA purchase. We accept returns of unworn garments with original tags attached within 14 days of receipt.
            </p>
            <p className="text-muted mb-4">
              <strong>To initiate a return:</strong><br/>
              1. Log into your Account Dashboard.<br/>
              2. Select "Order History" and click "Initiate Return".<br/>
              3. A complimentary premium shipping label will be generated for you.
            </p>
            <p className="text-muted">
              Refunds will be credited to the original form of payment within 5-7 business days of our atelier receiving the returned items.
            </p>
          </div>
        )}

        {activeTab === 'tracking' && (
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>Track Your Order</h2>
            <p className="text-muted mb-8">Enter your order details below to view real-time VIP tracking logistics.</p>
            <input type="text" placeholder="Order Number (e.g. AUR-100234)" style={{ width: '100%', maxWidth: '400px', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', color: '#fff', marginBottom: '1rem', outline: 'none' }} />
            <br />
            <input type="email" placeholder="Email Address" style={{ width: '100%', maxWidth: '400px', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', color: '#fff', marginBottom: '2rem', outline: 'none' }} />
            <br />
            <button className="btn btn-primary" style={{ width: '100%', maxWidth: '400px' }}>Locate Parcel</button>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p className="text-muted mb-4">Cannot find the answer you seek?</p>
          <Link to="/contact" className="btn btn-outline">Contact Concierge</Link>
        </div>
      </div>
    </div>
  );
}
