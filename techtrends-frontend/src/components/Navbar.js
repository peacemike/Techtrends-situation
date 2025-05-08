import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#3E2723' }}>
      <div className="container">
        <Link className="navbar-brand text-warning" to="/">TechTrends</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            {['Home','About','Contact','Messages'].map(name => (
              <li className="nav-item" key={name}>
                <NavLink
                  to={name === 'Home' ? '/' : `/${name.toLowerCase()}`}
                  className="nav-link text-light"
                  end
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
