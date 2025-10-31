import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Left: logo */}
        <div className="brand">
          <Link to="/" className="logo" aria-label="PG Bhangra Roots home">
            <img src={logoImg} alt="PG Bhangra Roots logo" />
          </Link>
          <Link to="/" className="brand-name">PG Bhangra Roots</Link>
        </div>

        {/* Center: links */}
        <ul className="nav-links" role="menubar">
          <li role="none">
            <NavLink to="/" role="menuitem" end>
              Home
            </NavLink>
          </li>
          <li role="none">
            <NavLink to="/about" role="menuitem">
              About
            </NavLink>
          </li>
          <li role="none">
            <NavLink to="/classes" role="menuitem">
              Classes
            </NavLink>
          </li>
          <li role="none">
            <NavLink to="/contact" role="menuitem">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right: actions */}
        <div className="actions">
          <Link to="/register" className="btn-register">Register</Link>
        </div>

        {/* Mobile burger (shown via CSS) */}
        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="mobile-panel" role="dialog" aria-label="Navigation">
          <ul className="mobile-links" onClick={closeMenu}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/classes">Classes</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      )}
    </header>
  );
}
