import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Shop() {
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = category === 'all' 
      ? [...products] 
      : products.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));

    if (sort === 'price-low') {
      result.sort((a, b) => {
        const pA = parseFloat(a.price.replace('$', '').replace(',', ''));
        const pB = parseFloat(b.price.replace('$', '').replace(',', ''));
        return pA - pB;
      });
    } else if (sort === 'price-high') {
      result.sort((a, b) => {
        const pA = parseFloat(a.price.replace('$', '').replace(',', ''));
        const pB = parseFloat(b.price.replace('$', '').replace(',', ''));
        return pB - pA;
      });
    } else if (sort === 'new') {
      result.reverse();
    }

    return result;
  }, [category, sort]);

  return (
    <div>
      <div className="page-header" style={{ height: '60vh' }}>
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80" 
          alt="Shop Header" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, opacity: 0.3 }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="heading-hero" style={{ animation: 'fadeInUp 1s ease-out' }}>The Collection</h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', animation: 'fadeInUp 1.2s ease-out' }}>
            Curated garments for the discerning individual. Experience the pinnacle of haute couture and modern architectural tailoring.
          </p>
        </div>
      </div>

      <section className="section container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>Showing {filteredProducts.length} Products</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <select 
               value={category}
               onChange={(e) => setCategory(e.target.value)}
               style={{ background: 'transparent', color: '#fff', border: '1px solid var(--color-border)', padding: '0.8rem 1.2rem', outline: 'none' }}
             >
                <option value="all">All Categories</option>
                <option value="dresses">Dresses</option>
                <option value="outerwear">Outerwear</option>
                <option value="tops">Tops & Knitwear</option>
                <option value="pants">Trousers & Skirts</option>
             </select>
             <select 
               value={sort}
               onChange={(e) => setSort(e.target.value)}
               style={{ background: 'transparent', color: '#fff', border: '1px solid var(--color-border)', padding: '0.8rem 1.2rem', outline: 'none' }}
             >
                <option value="featured">Featured</option>
                <option value="new">New Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
             </select>
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="product-img-wrapper" style={{ height: '600px' }}>
                <img src={product.img} alt={product.name} className="product-img" />
              </div>
              <div style={{ padding: '1rem 0' }}>
                <p className="text-muted" style={{ fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '1px' }}>{product.category}</p>
                <h3 className="product-title" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>{product.name}</h3>
                <p className="product-price" style={{ color: 'var(--color-primary)' }}>{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
