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
import LoginSignup from "./components/LoginSignup";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css';

function App() {
  const videoToken = "YOUR_TWILIO_VIDEO_TOKEN"; 
  const roomName = "my-room"; 

  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Mentor Connect</h1>
          <nav>
            <ul className="app-nav">
              {[
                { path: "/", label: "Home" },
                { path: "/dashboard", label: "Dashboard" },
                { path: "/profile", label: "Profile" },
                { path: "/booking", label: "Booking" },
                { path: "/chat", label: "Chat" },
                { path: "/video-call", label: "Video Call" },
                { path: "/research-hub", label: "Research Hub" },
                { path: "/notifications", label: "Notifications" },
                { path: "/help-support", label: "Help & Support" },
              ].map(({ path, label }) => (
                <li key={path}>
                  <a href={path}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login-signup" element={<LoginSignup />} />
            {[
              { path: "/dashboard", element: <Dashboard /> },
              { path: "/profile", element: <Profile /> },
              { path: "/booking", element: <Booking /> },
              { path: "/chat", element: <Chat /> },
              { path: "/research-hub", element: <ResearchHub /> },
              { path: "/notifications", element: <Notifications /> },
              { path: "/help-support", element: <HelpSupport /> },
              {
                path: "/video-call",
                element: <VideoCall token={videoToken} roomName={roomName} />,
              },
            ].map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={<ProtectedRoute>{element}</ProtectedRoute>}
              />
            ))}
          </Routes>
        </main>
        <footer className="app-footer">
          <p>© 2025 Mentor Connect. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
