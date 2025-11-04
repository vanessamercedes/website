import './Contact.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';

function Contact() {
  return (
    <>
      <Header />
      <Title titleName="Contact" />
      <main className="contact-container">
        <p className="contact-subtitle">
          For bookings, availability, or questions, please get in touch via the details below.
        </p>

        <div className="contact-details">
          {/* <p><strong>Email:</strong> vanessa.nails@example.com</p> */}
          {/* <p><strong>Phone:</strong> +64 210 807 7763</p> */}
          <p><strong>Instagram:</strong>
            <a 
              href="https://instagram.com/nessalonverse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="insta-link"
            >
              @nessalonverse
            </a>
          </p>
          <p><strong>Location:</strong> Manukau, Auckland, NZ</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
