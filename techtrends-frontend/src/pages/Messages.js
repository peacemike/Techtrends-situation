import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/api/messages')
      .then(res => setMessages(res.data))
      .catch(() => setMessages([]));
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor:'#3E2723' }}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ color:'#F5DEB3' }}>Submitted Messages</h2>
        {messages.length === 0 ? (
          <p className="text-center" style={{ color:'#F5DEB3' }}>No messages found.</p>
        ) : (
          <div className="row g-4">
            {messages.map((msg, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="card h-100" style={{ backgroundColor:'#000', border:'none', color:'#F5DEB3' }}>
                  <div className="card-body">
                    <h5 className="card-title">{msg.name}</h5>
                    <h6 className="card-subtitle mb-2">{msg.email}</h6>
                    <p className="card-text">{msg.message}</p>
                  </div>
                  <div className="card-footer text-end" style={{ backgroundColor:'#111' }}>
                    <small style={{ color:'#aaa' }}>
                      {new Date(msg.createdAt).toLocaleString()}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
