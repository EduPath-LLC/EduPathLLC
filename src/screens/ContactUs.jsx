import React from 'react';
import Navbar from "../components/Navbar";
import '../styles/ContactUs.css';

function ContactUs() {
  return (
    <div className="total">
      <Navbar />
      <div className='contact-container-column'>
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">Have a question or feedback? We'd love to hear from you!</p>
      
      <form
        action="https://formsubmit.co/team@edupathllc.com"
        method="POST"
        className="contact-form"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://edupathllc.com/" />

        <label>School Name:</label>
        <input type="text" name="schoolName" required />

        <label>Address:</label>
        <input type="text" name="address" required />

        <label>Full Name:</label>
        <input type="text" name="fullName" required />

        <label>Email:</label>
        <input type="email" name="email" required />

        <label>Questions / Concerns:</label>
        <textarea name="questionsConcerns" rows="5" required></textarea>

        <button type="submit">Send</button>
      </form>
      </div>
    </div>
  );
}

export default ContactUs;
