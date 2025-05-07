import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-center bg-blue-800 text-white py-4 shadow">
      {['Home', 'About', 'Contact', 'Messages'].map((item) => (
        <Link
          key={item}
          to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
          className="mx-4 hover:text-blue-200 transition"
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}