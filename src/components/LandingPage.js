// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Include your own styles if needed

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Mentor Connect</h1>
      <p>Your journey to connect with mentors starts here.</p>
      <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
}

export default LandingPage;
