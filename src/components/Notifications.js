// src/components/Notifications.js
import React from 'react';
import './Notifications.css'; // Import the CSS file for styling

function Notifications() {
  const notifications = [
    { id: 1, message: 'Your mentor has responded to your inquiry.', timestamp: '2024-09-26 10:00 AM' },
    { id: 2, message: 'New resources have been added to the Research Hub.', timestamp: '2024-09-25 03:00 PM' },
    { id: 3, message: 'Your booking has been confirmed for September 30th.', timestamp: '2024-09-24 01:00 PM' },
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <div className="notification-list">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div key={notification.id} className="notification-item">
              <p>{notification.message}</p>
              <span className="timestamp">{notification.timestamp}</span>
            </div>
          ))
        ) : (
          <p>No notifications available.</p>
        )}
      </div>
    </div>
  );
}

export default Notifications;
