// src/Router/MyRouter.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Router/Home';
import About from './Router/About';
import Contact from './Router/Contact';
import NoPage from './Router/NoPage';

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NoPage />} /> {/* route cho trang không tồn tại */}
    </Routes>
  );
}

export default MyRouter;
