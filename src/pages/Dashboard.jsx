import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="section container" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <h1 className="heading-hero" style={{ marginBottom: '4rem', textAlign: 'center' }}>Account Dashboard</h1>

      <div className="content-grid-2" style={{ gridTemplateColumns: '250px 1fr' }}>
        {/* Sidebar */}
        <div className="glass-panel" style={{ padding: '2rem', height: 'fit-content' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>Welcome, Client</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li>
              <button onClick={() => setActiveTab('orders')} style={{ background: 'none', border: 'none', color: activeTab === 'orders' ? 'var(--color-primary)' : 'var(--color-text)', cursor: 'pointer', fontSize: '1rem', textAlign: 'left', width: '100%' }}>Order History</button>
            </li>
            <li>
              <button onClick={() => setActiveTab('wishlist')} style={{ background: 'none', border: 'none', color: activeTab === 'wishlist' ? 'var(--color-primary)' : 'var(--color-text)', cursor: 'pointer', fontSize: '1rem', textAlign: 'left', width: '100%' }}>Wishlist</button>
            </li>
            <li>
              <button onClick={() => setActiveTab('billing')} style={{ background: 'none', border: 'none', color: activeTab === 'billing' ? 'var(--color-primary)' : 'var(--color-text)', cursor: 'pointer', fontSize: '1rem', textAlign: 'left', width: '100%' }}>Billing Portal</button>
            </li>
            <li>
              <button onClick={() => setActiveTab('settings')} style={{ background: 'none', border: 'none', color: activeTab === 'settings' ? 'var(--color-primary)' : 'var(--color-text)', cursor: 'pointer', fontSize: '1rem', textAlign: 'left', width: '100%' }}>Profile Settings</button>
            </li>
            <li>
              <button onClick={() => setActiveTab('support')} style={{ background: 'none', border: 'none', color: activeTab === 'support' ? 'var(--color-primary)' : 'var(--color-text)', cursor: 'pointer', fontSize: '1rem', textAlign: 'left', width: '100%' }}>Support Tickets</button>
            </li>
            <li style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
              <button style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', fontSize: '1rem', textAlign: 'left', width: '100%' }}>Sign Out</button>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div style={{ padding: '0 2rem' }}>
          {activeTab === 'orders' && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '2rem' }}>Order History</h2>
              <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ color: 'var(--color-primary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>Order #AUR-89234</h4>
                  <p>1x Structured Wool Blazer</p>
                  <p className="text-muted mt-2">Placed: March 12, 2026</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p className="product-price">$1,200.00</p>
                  <span style={{ display: 'inline-block', padding: '0.3rem 0.8rem', background: '#222', color: '#fff', fontSize: '0.8rem', marginTop: '0.5rem' }}>Delivered</span>
                </div>
              </div>
              <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ color: 'var(--color-primary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>Order #AUR-77211</h4>
                  <p>1x Chunky Chelsea Boots</p>
                  <p className="text-muted mt-2">Placed: Jan 04, 2026</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p className="product-price">$780.00</p>
                  <span style={{ display: 'inline-block', padding: '0.3rem 0.8rem', background: '#222', color: '#fff', fontSize: '0.8rem', marginTop: '0.5rem' }}>Delivered</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '2rem' }}>Your Wishlist</h2>
              <p className="text-muted">You have 1 item saved in your wishlist.</p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem' }}>
                <img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80" alt="Bag" style={{ width: '120px', height: '150px', objectFit: 'cover' }} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Geometric Leather Tote</h3>
                  <p className="product-price">$1,850.00</p>
                  <button className="btn btn-outline" style={{ margin: '1rem 0', width: 'fit-content', padding: '0.5rem 1rem' }}>Move to Cart</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
             <div>
               <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '2rem' }}>Billing Portal</h2>
               <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
                 <h4 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Saved Payment Methods</h4>
                 <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid #333' }}>
                    <p>AMEX ending in •••• 1002</p>
                    <button style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', textDecoration: 'underline' }}>Remove</button>
                 </div>
                 <button className="btn btn-outline" style={{ marginTop: '2rem' }}>Add Payment Method</button>
               </div>
               <div className="glass-panel" style={{ padding: '2rem' }}>
                 <h4 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Stored AURA Gift Cards</h4>
                 <p className="text-muted" style={{ marginBottom: '1rem' }}>No active gift card balance.</p>
                 <button className="btn btn-primary">Redeem Gift Card</button>
               </div>
             </div>
          )}

          {activeTab === 'support' && (
             <div>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                 <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Support Tickets</h2>
                 <button className="btn btn-primary" style={{ padding: '0.8rem 1.5rem' }}>Submit New Ticket</button>
               </div>
               <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
                 <p className="text-muted">You have no active support cases open.</p>
               </div>
             </div>
          )}

          {activeTab === 'settings' && (
             <div>
               <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '2rem' }}>Profile Settings</h2>
               <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>First Name</label>
                      <input type="text" value="Premium" readOnly style={{ width: '100%', padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: '#fff', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Last Name</label>
                      <input type="text" value="Client" readOnly style={{ width: '100%', padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: '#fff', outline: 'none' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Email Address</label>
                    <input type="email" value="client@example.com" readOnly style={{ width: '100%', padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: '#fff', outline: 'none' }} />
                  </div>
                  <button type="button" className="btn btn-primary" style={{ width: 'fit-content' }}>Save Changes</button>
               </form>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
