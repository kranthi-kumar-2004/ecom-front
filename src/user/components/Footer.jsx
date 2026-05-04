import { NavLink } from "react-router-dom";
import "./css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO + DESC */}
        <div className="footer-section">
          <h3 className="footer-logo">SmartCart</h3>
          <p className="footer-desc">
            A modern full-stack e-commerce platform designed for
            secure shopping, real-time cart management, and seamless
            user experience.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/orders">Orders</NavLink>
        </div>

        {/* LEGAL (IMPORTANT FOR RAZORPAY) */}
        <div className="footer-section">
          <h4>Policies</h4>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/refund-policy">Refund Policy</NavLink>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/terms">Terms & Conditions</NavLink>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: sarvepallikranthikumar@gmail.com</p>
          <p>Phone: +91 6304145316</p>
          <p>
            Address: Nellore, Andhra Pradesh, India - 524314
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} SmartCart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
