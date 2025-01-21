// src/components/Chat.js
import React, { useState } from 'react';
import './Chat.css'; // Import the CSS file for styling

function Chat() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChatHistory([...chatHistory, { text: message, sender: 'You' }]);
      setMessage('');
      
      // Simulate receiving a response from the mentor
      setTimeout(() => {
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { text: "This is a response from your mentor.", sender: 'Mentor' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chat">
      <h2>Chat with Your Mentor</h2>
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`chat-message ${chat.sender}`}>
            <strong>{chat.sender}:</strong> {chat.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="chat-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
