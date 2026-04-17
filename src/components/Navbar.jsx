import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cartItems } = useShop();

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-brand">AURA</Link>
        <div className="nav-links">
          <Link to="/shop" className="nav-link" style={{ color: location.pathname === '/shop' ? 'var(--color-primary)' : '' }}>Collections</Link>
          <Link to="/about" className="nav-link" style={{ color: location.pathname === '/about' ? 'var(--color-primary)' : '' }}>Atelier</Link>
          <Link to="/story" className="nav-link" style={{ color: location.pathname === '/story' ? 'var(--color-primary)' : '' }}>Heritage</Link>
          <Link to="/contact" className="nav-link" style={{ color: location.pathname === '/contact' ? 'var(--color-primary)' : '' }}>Concierge</Link>
        </div>
        <div className="nav-icons" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Search size={22} style={{ cursor: 'pointer', strokeWidth: 1.5 }} />
          <Link to="/dashboard" style={{ color: location.pathname === '/dashboard' ? 'var(--color-primary)' : 'inherit' }}>
            <User size={22} style={{ cursor: 'pointer', strokeWidth: 1.5 }} />
          </Link>
          <Link to="/cart" style={{ color: location.pathname === '/cart' ? 'var(--color-primary)' : 'inherit', display: 'flex', alignItems: 'center', position: 'relative' }}>
            <ShoppingBag size={22} style={{ strokeWidth: 1.5 }} />
            {cartCount > 0 && (
              <span style={{ 
                position: 'absolute', 
                top: '-8px', 
                right: '-10px', 
                background: 'var(--color-primary)', 
                color: '#fff', 
                fontSize: '0.65rem', 
                padding: '2px 6px', 
                borderRadius: '10px',
                fontWeight: '600'
              }}>
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
