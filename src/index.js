import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18+
import { BrowserRouter as Router } from 'react-router-dom'; // Router included
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
    </Router>
);
