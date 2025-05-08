// src/pages/About.js
import React from 'react';

export default function About() {
  const sectionStyle = {
    padding: '60px 0',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#000',     // pure black
    color: '#F5DEB3'             // wheat text
  };

  const headingStyle = {
    color: '#D2691E',            // chocolate brown
    marginBottom: '20px',
    textAlign: 'center'
  };

  const textStyle = {
    maxWidth: '700px',
    margin: '0 auto 40px',
    lineHeight: 1.6
  };

  const mapWrapper = {
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    marginBottom: '40px',
    height: '400px'
  };

  const features = [
    { icon: 'bi-phone',      text: 'Flagship Smartphones' },
    { icon: 'bi-house-door', text: 'Smart Home Devices' },
    { icon: 'bi-gear',       text: 'On-site Expert Support' },
    { icon: 'bi-truck',      text: 'Fast Local Delivery' }
  ];

  // (Optional) add image filenames here if you want a gallery
  const galleryImages = [
    // e.g. 'stock1.jpg','stock2.jpg','stock3.jpg','stock4.jpg'
  ];

  return (
    <section style={sectionStyle}>
      <div className="container">
        <h2 style={headingStyle}>About TechTrends Ltd</h2>
        <p style={textStyle} className="text-center">
          Located in the heart of Kigali City, TechTrends Ltd specializes in the latest electronic gadgets—
          from flagship smartphones to cutting-edge smart home devices—all supported by a dedicated local expert team.
        </p>

        <div style={mapWrapper} className="mx-auto mb-5">
          <iframe
            title="TechTrends Kigali Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205021.7823261827!2d29.867272605745598!3d-1.9710493332033483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5a587d7a5dd%3A0x732077ad7d5b38b6!2sNyarugenge%2C%20Kigali!5e1!3m2!1sen!2srw!4v1746603362619!5m2!1sen!2srw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
          {features.map((f, i) => (
            <div className="col" key={i}>
              <div
                className="card h-100 text-center p-3"
                style={{
                  backgroundColor: '#111',     // very dark
                  color: '#F5DEB3',
                  border: 'none',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.7)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <i className={`bi ${f.icon} display-4 mb-3`} style={{ color: '#D2691E' }}></i>
                <div className="card-body">
                  <h5 className="card-title">{f.text}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {galleryImages.length > 0 && (
          <div className="row row-cols-1 row-cols-md-4 g-3">
            {galleryImages.map((img, idx) => (
              <div className="col" key={idx}>
                <img
                  src={`/images/${img}`}
                  alt={`Gallery ${idx+1}`}
                  className="img-fluid rounded shadow-sm"
                  style={{ transition: 'transform .3s' }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
