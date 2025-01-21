// src/components/LoginSignup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css'; // Add styling for this component

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Here you would add your logic for validating credentials
    if (email === "test@test.com" && password === "password") {
      // Set user information in localStorage (or sessionStorage/cookie)
      localStorage.setItem('user', JSON.stringify({ name: "Test User", email }));
      localStorage.setItem('isAuthenticated', 'true');
      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      alert("Invalid login credentials");
    }
  };

  const handleSignup = () => {
    // Here you would add logic for signing up a user (API call, etc.)
    // For now, we'll simply store user data locally
    if (name && email && password) {
      localStorage.setItem('user', JSON.stringify({ name, email }));
      localStorage.setItem('isAuthenticated', 'true');
      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      alert("Please fill all fields for signup");
    }
  };

  return (
    <div className="login-signup-container">
      <h2>{isLogin ? "Login" : "Signup"}</h2>
      {!isLogin && (
        <input 
          type="text" 
          placeholder="Full Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      )}
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={isLogin ? handleLogin : handleSignup}>
        {isLogin ? "Login" : "Signup"}
      </button>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
      </p>
    </div>
  );
}

export default LoginSignup;
