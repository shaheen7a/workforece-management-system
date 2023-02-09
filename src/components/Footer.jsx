import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a company dedicated to providing workforce management solutions for businesses of all sizes.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info@workforcemanagement.com</li>
            <li>Phone: (555) 555-5555</li>
            <li>Address: 123 Main St, Anytown, USA 12345</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; Workforce Management 2023
      </div>
    </div>
  )
}

export default Footer