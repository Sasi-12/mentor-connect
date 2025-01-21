// src/components/HelpSupport.js
import React, { useState } from 'react';
import './HelpSupport.css'; // Import the CSS file for styling

function HelpSupport() {
  const [query, setQuery] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Inquiry submitted: \nContact Info: ${contactInfo}\nQuery: ${query}`);
    // Here, you would typically send this data to your backend for processing
    setQuery('');
    setContactInfo('');
  };

  return (
    <div className="help-support">
      <h2>Help and Support</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="contact-info">Your Contact Info:</label>
          <input
            type="text"
            id="contact-info"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="query">Your Inquiry:</label>
          <textarea
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows="4"
            required
          />
        </div>
        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
}

export default HelpSupport;
