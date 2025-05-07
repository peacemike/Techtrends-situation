import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/messages', form);
      setStatus('✅ Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('❌ Submission failed. Please try again.');
    }
  };

  return (
    <section className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">Contact Us</h2>
      <form onSubmit={submit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
        {['name', 'email', 'message'].map((field) => (
          field !== 'message' ? (
            <input
              key={field}
              name={field}
              type={field === 'email' ? 'email' : 'text'}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              className="w-full mb-4 p-3 border border-gray-300 rounded focus:border-blue-500"
              required
            />
          ) : (
            <textarea
              key={field}
              name={field}
              placeholder="Message"
              value={form[field]}
              onChange={handleChange}
              className="w-full mb-4 p-3 border border-gray-300 rounded focus:border-blue-500 h-32"
              required
            />
          )
        ))}
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
        {status && <p className="mt-4 text-center text-green-600">{status}</p>}
      </form>
    </section>
  );
}