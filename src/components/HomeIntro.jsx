import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import './HomeIntro.css';

export default function HomeIntro() {
  return (
    <section className="home-intro">
      <div className="container intro-card">
        <div className="intro-copy">
          <h2>About PG Bhangra Roots Academy-</h2>
          <p>
            Founded in 2023, PG Bhangra Roots Academy is dedicated to preserving Punjabi
            culture through dance. Our instructors combine authentic Bhangra techniques with
            modern choreography to help students grow in confidence, teamwork, and rhythm.
          </p>
          <Link className="btn-learn" to="/about" aria-label="Learn more about PG Bhangra Roots Academy">
            Learn More
          </Link>
        </div>
        <div className="intro-visual" aria-hidden="true">
          <img src={logoImg} alt="PG Bhangra Roots logo" />
        </div>
      </div>
    </section>
  );
}
