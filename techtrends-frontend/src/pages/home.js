import React from 'react';

export default function Home() {
  const hours = new Date().getHours();
  const greeting = hours < 12 ? 'Good morning' : hours < 18 ? 'Good afternoon' : 'Good evening';

  // Inline styles
  const sectionStyle = {
    padding: '50px',
    backgroundColor: '#F9FAFB',
    minHeight: '100vh',
    textAlign: 'center',
    fontFamily: 'Verdana, sans-serif',
  };

  const headingStyle = {
    fontSize: '3.5rem',
    color: '#1E3A8A',
    marginBottom: '15px',
    lineHeight: '1.2',
  };

  const subheadingStyle = {
    fontSize: '1.25rem',
    color: '#4B5563',
    maxWidth: '700px',
    margin: '0 auto 30px auto',
    lineHeight: '1.6',
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '600px',
    maxHeight: '400px',  // Reduced maximum height
    objectFit: 'cover',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    border: '5px solid #E5E7EB',
  };

  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>{greeting}, welcome to TechTrends Ltd!</h1>
      <p style={subheadingStyle}>
        We provide cutting-edge electronic gadgets with unmatched quality and dedicated local support.
      </p>
      <div style={imageContainerStyle}>
        {/* Ensure your image is in public/images/dag.jpg */}
        <img
          src="/images/dag.jpg"
          alt="Gadgets display"
          style={imageStyle}
        />
      </div>
        </section>
      );
    }