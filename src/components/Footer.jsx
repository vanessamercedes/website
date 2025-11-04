import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section brand">
        <h3>Nessalonverse</h3>
        <p>Professional nail care, quality service, and stunning designs.</p>
      </div>

      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/website/">Home</a></li>
          <li><a href="/website/bookings">Bookings</a></li>
          <li><a href="/website/pricing">Pricing</a></li>
          {/* <li><a href="/website/location">Location</a></li> */}
          <li><a href="/website/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section social">
        <h3>Connect</h3>
        <p>Follow on Instagram:</p>
        <a 
          href="https://instagram.com/nessalonverse" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          @nessalonverse
        </a>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nessalonverse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
