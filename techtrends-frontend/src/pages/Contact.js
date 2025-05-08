// src/pages/Contact.js
import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form,setForm]=useState({name:'',email:'',message:''});
  const [status,setStatus]=useState('');

  const handleChange=e=>setForm({...form,[e.target.name]:e.target.value});
  const submit=async e=>{
    e.preventDefault();
    try {
      await axios.post('/api/messages',form);
      setStatus('✅ Message sent!');
      setForm({name:'',email:'',message:''});
    } catch {
      setStatus('❌ Submission failed.');
    }
  };

  const inputStyle = {
    backgroundColor:'#111',
    color:'#F5DEB3',
    border:'1px solid #3E2723'
  };

  return (
    <section className="py-5" style={{ backgroundColor:'#000' }}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ color:'#D2691E' }}>Contact Us</h2>
        <form onSubmit={submit} className="row g-4 mx-auto" style={{ maxWidth:'600px' }}>
          {['name','email'].map(field=>(
            <div className="col-md-6" key={field}>
              <input
                name={field}
                type={field==='email'?'email':'text'}
                placeholder={field.charAt(0).toUpperCase()+field.slice(1)}
                value={form[field]}
                onChange={handleChange}
                className="form-control form-control-lg"
                style={inputStyle}
              />
            </div>
          ))}
          <div className="col-12">
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="form-control form-control-lg"
              style={inputStyle}
            />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn" style={{backgroundColor:'#D2691E',color:'#000',fontSize:'1.1rem',padding:'0.75rem 2rem'}}>
              Send Message
            </button>
          </div>
          {status && (
            <div className="col-12 text-center mt-3">
              <small style={{ color: status.startsWith('✅')?'#ADFF2F':'#FF4500' }}>{status}</small>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
