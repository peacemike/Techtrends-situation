import React from 'react';

export default function About() {
  const sectionStyle = {
    padding: '40px',
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '36px',
    color: '#1e40af',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    color: '#374151',
    marginBottom: '24px',
    maxWidth: '700px',
    lineHeight: '1.6',
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    marginBottom: '20px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const iframeStyle = {
    width: '100%',
    height: '100%',
    border: '0',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>About TechTrends Ltd</h2>
      <p style={paragraphStyle}>
        Located in the heart of Kigali City, TechTrends Ltd specializes in delivering the latest electronic gadgets,
        from smartphones to smart home devices, all backed by a dedicated local support team.
      </p>
      <div style={mapContainerStyle}>
        <iframe
          style={iframeStyle}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205021.7823261827!2d29.867272605745598!3d-1.9710493332033483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5a587d7a5dd%3A0x732077ad7d5b38b6!2sNyarugenge%2C%20Kigali!5e1!3m2!1sen!2srw!4v1746603362619!5m2!1sen!2srw"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
