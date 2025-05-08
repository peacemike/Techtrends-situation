import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [status, setStatus] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit       = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/messages', form);
      setStatus('✅ Message sent successfully!');
      setForm({ name:'', email:'', message:'' });
    } catch {
      setStatus('❌ Submission failed. Please try again.');
    }
  };

  return (
    <section className="py-5" style={{ backgroundColor:'#f1f5f9' }}>
      <div className="container">
        <h2 className="text-center text-primary mb-4">Contact Us</h2>
        <form onSubmit={submit} className="row g-4 mx-auto" style={{ maxWidth:'600px' }}>
          <div className="col-md-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="form-control form-control-lg"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="form-control form-control-lg"
              required
            />
          </div>
          <div className="col-12">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="form-control form-control-lg"
              required
            />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary btn-lg px-5">
              Send Message
            </button>
          </div>
          {status && (
            <div className="col-12 text-center">
              <div className={`alert ${status.startsWith('✅') ? 'alert-success':'alert-danger'} mt-3`}>
                {status}
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
