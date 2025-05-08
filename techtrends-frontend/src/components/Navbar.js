import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">TechTrends</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            {[
              { name: 'Home',    path: '/' },
              { name: 'About',   path: '/about' },
              { name: 'Contact', path: '/contact' },
              { name: 'Messages',path: '/messages' }
            ].map(item => (
              <li className="nav-item" key={item.name}>
                <NavLink className="nav-link" to={item.path} end>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
