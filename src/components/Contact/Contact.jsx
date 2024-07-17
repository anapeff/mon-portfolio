import React, { useState } from 'react';
import './_contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <form 
        action="https://formspree.io/f/meojokza" // Form id du site "formspree"
        method="POST"
        className="contact-form"
      >
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nom *"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Objet"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            placeholder="Message *"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
