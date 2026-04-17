import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { useState } from 'react';

export default function Cart() {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } = useShop();
  const [checkingOut, setCheckingOut] = useState(false);

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  if (checkingOut) {
    return (
      <div className="section container" style={{ paddingTop: '12rem', textAlign: 'center' }}>
        <h1 className="heading-hero" style={{ fontSize: '4rem' }}>Merci.</h1>
        <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
          Your order has been received and is being prepared in our Milan atelier.
        </p>
        <Link to="/" className="btn btn-outline">Return To House</Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="section container" style={{ paddingTop: '12rem', textAlign: 'center' }}>
        <h1 className="heading-section">Your Bag is Empty</h1>
        <p className="text-muted" style={{ marginBottom: '3rem' }}>Explore our latest collections to find your masterpiece.</p>
        <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="section container" style={{ paddingTop: '8rem' }}>
      <h1 className="heading-section" style={{ textAlign: 'left', marginBottom: '3rem' }}>Your Bag</h1>
      
      <div className="content-grid-2" style={{ alignItems: 'flex-start' }}>
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem', marginBottom: '2rem' }}>
              <img src={item.img} alt={item.name} style={{ width: '120px', height: '160px', objectFit: 'cover' }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>{item.name}</h3>
                  <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>{item.category}</p>
                  <p className="product-price">{item.price}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-border)', padding: '0.5rem 1rem', width: 'fit-content' }}>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
                    >-</button>
                    <span style={{ margin: '0 1.5rem', fontSize: '0.9rem' }}>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
                    >+</button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--color-text-muted)', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.85rem' }}
                  >Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel" style={{ padding: '2.5rem' }}>
          <h3 style={{fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '2rem'}}>Order Summary</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
            <span className="text-muted">Subtotal</span>
            <span style={{ fontSize: '1.1rem' }}>${cartTotal.toLocaleString()}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
            <span className="text-muted">Shipping</span>
            <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Complimentary</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
            <span style={{ fontWeight: '500', fontSize: '1.2rem' }}>Estimated Total</span>
            <span className="product-price" style={{ fontSize: '1.4rem' }}>${cartTotal.toLocaleString()}</span>
          </div>
          <button 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '1.5rem' }}
            onClick={handleCheckout}
          >Proceed to Checkout</button>
          <p className="text-muted" style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '2rem' }}>
            International duties & taxes calculated at checkout.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem', opacity: 0.5 }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>VISA</span>
            <span style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>AMEX</span>
            <span style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>APPLE PAY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
