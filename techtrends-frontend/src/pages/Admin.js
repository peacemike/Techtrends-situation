import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Admin() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/messages')
      .then(res => setMessages(res.data))
      .catch(() => alert('Failed to load messages.'));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Submitted Messages</h2>
      <div className="space-y-4">
        {messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className="border p-4 rounded shadow">
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p className="text-sm text-gray-500">{new Date(msg.createdAt).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
