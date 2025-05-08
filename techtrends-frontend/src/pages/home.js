import React from 'react';
import './Home.css';

export default function Home() {
  const hours = new Date().getHours();
  const greeting =
    hours < 12 ? 'Good morning' :
    hours < 18 ? 'Good afternoon' : 'Good evening';

  const heroStyle = {
    position: 'relative',
    height: '100vh', // Full screen height
    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor: '#000' // fallback background
  };

  const videoStyle = {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain', // shows full video without cropping
    zIndex: 0
  };

  const heroContent = {
    position: 'relative',
    zIndex: 1,
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '0 1rem',
    color: '#fff',
    textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
  };

  const heroHeading = { fontSize: '3rem', marginBottom: '1rem' };
  const heroText = { fontSize: '1.25rem' };

  const gallerySection = {
    padding: '4rem 0',
    backgroundColor: '#f9fafb',
    textAlign: 'center'
  };

  const galleryIntro = {
    maxWidth: '700px',
    margin: '0 auto 2rem',
    color: '#495057',
    fontSize: '1.25rem'
  };

  const cardStyle = {
    height: '100%',
    border: 'none',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s'
  };

  const imgStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover'
  };

  const captionStyle = {
    padding: '0.5rem 0',
    fontSize: '1rem',
    backgroundColor: '#fff'
  };

  const images = [
    { file: 'phone.jpg',    label: 'Smartphone X1' },
    { file: '234.jpg',      label: 'Ultra Sound Mic' },
    { file: 'aasd.jpg',     label: 'Noise-Canceling Buds' },
    { file: 'micro.jpg',    label: 'Pro Microphone' },
    { file: 'remote.jpg',   label: 'Smart Remote' },
    { file: 'buds.jpg',     label: 'Wireless Earbuds' }
  ];

  return (
    <div>
      {/* Hero Section with full video */}
      <section style={heroStyle}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={videoStyle}
          src="/videos/tech-bg.mp4"
        />
        <div style={heroContent} className="container">
          <h1 style={heroHeading}>{greeting}, welcome to TechTrends Ltd!</h1>
          <p style={heroText}>
            We deliver the latest electronic gadgets—from smartphones to smart home devices—
            backed by dedicated local support.
          </p>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section style={gallerySection}>
        <div className="container">
          <h2 className="mb-3">Our Products</h2>
          <p style={galleryIntro}>
            Explore our featured gadgets, handpicked for quality, innovation, and performance.
          </p>
          <div className="row g-4">
            {images.map((img, idx) => (
              <div className="col-12 col-md-4" key={idx}>
                <div
                  className="card"
                  style={cardStyle}
                  onMouseOver={e => e.currentTarget.style.transform = 'translateY(-8px)'}
                  onMouseOut={e => e.currentTarget.style.transform = ''}
                >
                  <img
                    src={`/images/${img.file}`}
                    alt={img.label}
                    style={imgStyle}
                  />
                  <div style={captionStyle}>{img.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
