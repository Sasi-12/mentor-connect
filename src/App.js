// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Booking from "./components/Booking";
import Chat from "./components/Chat";
import ResearchHub from "./components/ResearchHub";
import Notifications from "./components/Notifications";
import VideoCall from "./components/VideoCall";
import HelpSupport from "./components/HelpSupport";
import LoginSignup from "./components/LoginSignup"; // Login/Signup Component
import ProtectedRoute from "./components/ProtectedRoute"; // New Protected Route
import './App.css'; // Import the CSS file for styling

function App() {
  const videoToken = "YOUR_TWILIO_VIDEO_TOKEN"; // Replace with actual token
  const roomName = "my-room"; // Replace with actual room name
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Mentor Connect</h1>
          <nav className="app-nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/profile">Profile</a></li>
              <li><a href="/booking">Booking</a></li>
              <li><a href="/chat">Chat</a></li>
              <li><a href="/video-call">Video Call</a></li>
              <li><a href="/research-hub">Research Hub</a></li>
              <li><a href="/notifications">Notifications</a></li>
              <li><a href="/help-support">Help & Support</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login-signup" element={<LoginSignup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Protected routes */}
            <Route 
              path="/dashboard" 
              element={<ProtectedRoute><Dashboard /></ProtectedRoute>} 
            />
            <Route 
              path="/profile" 
              element={<ProtectedRoute><Profile /></ProtectedRoute>} 
            />
            <Route 
              path="/booking" 
              element={<ProtectedRoute><Booking /></ProtectedRoute>} 
            />
            <Route 
              path="/chat" 
              element={<ProtectedRoute><Chat /></ProtectedRoute>} 
            />
            <Route 
              path="/research-hub" 
              element={<ProtectedRoute><ResearchHub /></ProtectedRoute>} 
            />
            <Route 
              path="/notifications" 
              element={<ProtectedRoute><Notifications /></ProtectedRoute>} 
            />
            <Route 
              path="/help-support" 
              element={<ProtectedRoute><HelpSupport /></ProtectedRoute>} 
            />
            <Route 
              path="/video-call" 
              element={<ProtectedRoute><VideoCall token={videoToken} roomName={roomName} /></ProtectedRoute>} 
            />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>© 2024 Mentor Connect. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
