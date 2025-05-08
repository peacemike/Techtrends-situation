import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home     from './pages/home';
import About    from './pages/About';
import Contact  from './pages/Contact';
import Messages from './pages/Messages';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
