import Button from "./UI/Button";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <section id="contact" className="contactUs-container">
      <div className="cotactUs-title">Be Part of the Evolution:</div>
      <div className="cotactUs-subtitle">
        voltLink isn't just a product; it's a promise. A promise to build a
        future where clean energy is accessible to all. Discover the power of
        voltLink and be part of the electric vehicle revolution.
      </div>
      <div className="contactUs-button">
        <a href="mailto:stefano@aetlas.xyz" target="_blank" rel="noreferrer">
          <Button>Contact Us</Button>
        </a>
      </div>
    </section>
  );
}
