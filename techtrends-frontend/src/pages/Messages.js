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
    <section className="py-5">
      <div className="container">
        <h2 className="text-center text-primary mb-4">Submitted Messages</h2>
        {messages.length === 0 ? (
          <p className="text-center text-muted">No messages found.</p>
        ) : (
          <div className="row g-4">
            {messages.map((msg, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">{msg.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{msg.email}</h6>
                    <p className="card-text">{msg.message}</p>
                  </div>
                  <div className="card-footer text-end">
                    <small className="text-muted">
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
