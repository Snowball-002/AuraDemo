import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import { useState } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useShop();
  const [added, setAdded] = useState(false);
  
  const product = products.find(p => p.id === parseInt(id)) || products[0];

  const handleAdd = () => {
    addToCart(product.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="section container" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="content-grid-2" style={{ alignItems: 'flex-start' }}>
        <div style={{ position: 'sticky', top: '100px' }}>
          <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
            <img 
               src={product.img} 
               alt={product.name} 
               style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }} 
               onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
               onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
            <img src={product.img} alt="thumb" style={{ width: '100px', height: '120px', objectFit: 'cover', cursor: 'pointer', border: '1px solid var(--color-primary)' }}/>
            <img src={`${product.img}&w=100`} alt="thumb" style={{ width: '100px', height: '120px', objectFit: 'cover', cursor: 'pointer', opacity: 0.6 }}/>
            <img src={`${product.img}&w=150`} alt="thumb" style={{ width: '100px', height: '120px', objectFit: 'cover', cursor: 'pointer', opacity: 0.6 }}/>
          </div>
        </div>
        
        <div style={{ padding: '0 2rem' }}>
          <nav style={{ marginBottom: '2rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <Link to="/" className="text-muted hover:text-white">Home</Link> &gt; <Link to="/shop" className="text-muted hover:text-white">{product.category}</Link> &gt; <span style={{color: 'var(--color-primary)'}}>{product.name}</span>
          </nav>

          <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', lineHeight: 1.1 }}>{product.name}</h1>
          <p className="product-price" style={{ fontSize: '1.8rem', marginBottom: '2.5rem', color: 'var(--color-text)' }}>{product.price}</p>
          
          <p className="text-muted mb-8" style={{ lineHeight: '1.9', fontSize: '1.1rem' }}>{product.description}</p>
          
          <div style={{ marginBottom: '2.5rem' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
               <label style={{ color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Size</label>
               <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'underline', cursor: 'pointer' }}>View Size Guide</span>
             </div>
             <select style={{ width: '100%', padding: '1.2rem', background: 'transparent', border: '1px solid var(--color-border)', color: '#fff', outline: 'none', marginBottom: '1rem', fontSize: '1rem' }}>
                <option>US 2 / IT 38</option>
                <option>US 4 / IT 40</option>
                <option>US 6 / IT 42</option>
                <option>US 8 / IT 44</option>
             </select>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
             <button 
               className="btn btn-primary" 
               style={{ flex: 1, padding: '1.2rem', fontSize: '1rem', backgroundColor: added ? 'var(--color-primary)' : '' }}
               onClick={handleAdd}
             >
               {added ? 'Added to Bag' : 'Add To Bag'}
             </button>
             <button className="btn btn-outline" style={{ padding: '0 2rem' }}>
               ♡ Wishlist
             </button>
          </div>

          <div style={{ marginTop: '2rem', borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
            <details style={{ cursor: 'pointer' }}>
              <summary style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', padding: '0.5rem 0' }}>Size Guide & Fit</summary>
              <div style={{ paddingBottom: '1.5rem' }}>
                 <p className="text-muted mt-2" style={{ lineHeight: 1.6 }}>{product.sizing}</p>
                 <table style={{ width: '100%', marginTop: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', textAlign: 'left', borderCollapse: 'collapse' }}>
                   <thead>
                     <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                       <th style={{ padding: '0.8rem 0' }}>US</th>
                       <th style={{ padding: '0.8rem 0' }}>IT</th>
                       <th style={{ padding: '0.8rem 0' }}>FR</th>
                       <th style={{ padding: '0.8rem 0' }}>Bust</th>
                       <th style={{ padding: '0.8rem 0' }}>Waist</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr style={{ borderBottom: '1px solid #222' }}><td style={{ padding: '0.8rem 0' }}>2</td><td>38</td><td>34</td><td>32"</td><td>24"</td></tr>
                     <tr style={{ borderBottom: '1px solid #222' }}><td style={{ padding: '0.8rem 0' }}>4</td><td>40</td><td>36</td><td>34"</td><td>26"</td></tr>
                     <tr style={{ borderBottom: '1px solid #222' }}><td style={{ padding: '0.8rem 0' }}>6</td><td>42</td><td>38</td><td>36"</td><td>28"</td></tr>
                     <tr><td style={{ padding: '0.8rem 0' }}>8</td><td>44</td><td>40</td><td>38"</td><td>30"</td></tr>
                   </tbody>
                 </table>
              </div>
            </details>

            <details style={{ cursor: 'pointer', borderTop: '1px solid var(--color-border)' }}>
              <summary style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', padding: '1.5rem 0 1rem' }}>Materials & Care</summary>
              <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0 1.5rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                {product.benefits.map((benefit, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{benefit}</li>
                ))}
              </ul>
            </details>

            <details style={{ cursor: 'pointer', borderTop: '1px solid var(--color-border)' }}>
              <summary style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', padding: '1.5rem 0 1rem' }}>Shipping & Returns</summary>
              <p className="text-muted mt-2 mb-4" style={{ lineHeight: 1.6 }}>Items are dispatched within 24 hours. Enjoy complimentary international express delivery on this item.</p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.6 }}>Unworn items with original tags may be returned within 14 days of receipt for a full refund or exchange.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
