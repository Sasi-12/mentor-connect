// src/components/Dashboard.js
import React from 'react';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user ? user.name : "User"}!</h2>
      <p>Email: {user ? user.email : ""}</p>
      {/* Other dashboard details */}
    </div>
  );
}

export default Dashboard;
