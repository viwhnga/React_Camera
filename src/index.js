// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './component/App/App';
import reportWebVitals from './reportWebVitals';

// Chỉ sử dụng createRoot một lần
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: đo hiệu năng
reportWebVitals();
