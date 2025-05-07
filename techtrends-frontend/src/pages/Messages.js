import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/api/messages')
      .then((res) => setMessages(res.data))
      .catch(() => setMessages([]));
  }, []);

  return (
    <section className="p-10 bg-white min-h-screen">
      <h2 className="text-4xl font-bold text-blue-800 mb-6">Submitted Messages</h2>
      {messages.length === 0 ? (
        <p className="text-gray-600">No messages found.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className="message-card">
              <h3 className="text-xl font-semibold text-blue-700">{msg.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{msg.email}</p>
              <p className="text-gray-700">{msg.message}</p>
              <p className="text-xs text-gray-400 mt-2 text-right">
                {new Date(msg.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>)
}