export default function Legal() {
  return (
    <div className="section container" style={{ paddingTop: '8rem', maxWidth: '800px' }}>
      <h1 className="heading-hero" style={{ textAlign: 'center', marginBottom: '4rem' }}>Legal Policies</h1>

      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Privacy Policy</h2>
        <p className="text-muted mb-4">Last Updated: April 2026</p>
        <p className="text-muted mb-4">
          AURA Fashion House ("we," "our," or "us") respects your privacy and is committed to protecting your personal data globally, in compliance with GDPR, CCPA, and applicable luxury retail data standards.
        </p>
        <h4 style={{ color: '#fff', margin: '1.5rem 0 0.5rem' }}>1. Data We Collect</h4>
        <p className="text-muted">
          We collect personal data you explicitly provide during account creation, checkout, or client care interactions. This includes identity data (name, email), financial data (secure tokenized payment info), and profile data (purchase history, sizing preferences).
        </p>
        <h4 style={{ color: '#fff', margin: '1.5rem 0 0.5rem' }}>2. How We Use Your Data</h4>
        <p className="text-muted">
          Your data is exclusively used to process luxury transactions, provide bespoke styling recommendations, and communicate private event invitations. We do not sell your personal data to third-party marketing agencies.
        </p>
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Terms & Conditions</h2>
        <p className="text-muted mb-4">
          By accessing and utilizing aura-fashion.demo, you agree to comply with the following elite service terms.
        </p>
        <h4 style={{ color: '#fff', margin: '1.5rem 0 0.5rem' }}>1. Intellectual Property</h4>
        <p className="text-muted">
          All content, including imagery, typographic structures, audio, and visual interfaces, are the exclusive property of AURA Fashion S.p.A. Unauthorized reproduction is strictly prohibited.
        </p>
        <h4 style={{ color: '#fff', margin: '1.5rem 0 0.5rem' }}>2. Pricing and Availability</h4>
        <p className="text-muted">
          As our garments rely on rare textile yields, product availability may fluctuate. We reserve the right to alter pricing and limit quantities of exclusives without prior notice.
        </p>
      </div>

      <div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Cookie Policy</h2>
        <p className="text-muted mb-4">
          We utilize strictly necessary micro-data (cookies) to facilitate core site functionality (such as preserving your shopping bag) and analytical data to optimize the aesthetic experience of the boutique. You may manage these preferences via your browser settings.
        </p>
      </div>
    </div>
  );
}
