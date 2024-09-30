// src/components/Booking.js
import React, { useState } from 'react';
import './Booking.css'; // Import the CSS file for styling

function Booking() {
  const [mentor, setMentor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${mentor} on ${date} at ${time}`);
    // Here, you would typically send this data to your backend for processing
  };

  return (
    <div className="booking">
      <h2>Book a Session with a Mentor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="mentor">Select Mentor:</label>
          <select
            id="mentor"
            value={mentor}
            onChange={(e) => setMentor(e.target.value)}
            required
          >
            <option value="">Choose a mentor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Prof. Johnson">Prof. Johnson</option>
            <option value="Ms. Lee">Ms. Lee</option>
            {/* Add more mentors as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Select Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Select Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Session</button>
      </form>
    </div>
  );
}

export default Booking;
