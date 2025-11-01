import './Pricing.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';

function Pricing() {
  return (
    <>
      <Header />
        <Title titleName="Pricing"/>
        {/* <h1 className="pricing-title">Pricing</h1> */}
        <main className="pricing-container">
        <p className="pricing-subtitle">Quality nail care for every style and budget.</p>
        
        <div className="pricing-cards">
          <div className="pricing-card">
            <h2>Classic Manicure</h2>
            <p className="price">$30</p>
            <p>Includes nail shaping, cuticle care & polish application.</p>
          </div>

          <div className="pricing-card">
            <h2>Gel Manicure</h2>
            <p className="price">$45</p>
            <p>Long-lasting gel polish with a high gloss finish.</p>
          </div>

          <div className="pricing-card">
            <h2>Acrylic Nails</h2>
            <p className="price">$60</p>
            <p>Durable acrylic extensions & custom designs.</p>
          </div>

          <div className="pricing-card">
            <h2>Custom Nail Art</h2>
            <p className="price">From $10</p>
            <p>Beautiful hand-painted designs to express yourself.</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Pricing;
