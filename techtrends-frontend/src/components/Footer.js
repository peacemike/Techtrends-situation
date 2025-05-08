// src/components/Footer.js
import React from 'react';

export default function Footer() {
  const footerStyle = {
    backgroundColor: '#3E2723',   // dark brown
    color: '#F5DEB3',             // wheat
    padding: '1rem 0',
    textAlign: 'center',
    marginTop: 'auto'
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} TechTrends Ltd.</p>
        <small>All rights reserved.</small>
      </div>
    </footer>
  );
}
