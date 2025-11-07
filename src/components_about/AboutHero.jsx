import React from 'react';
import './AboutHero.css';

export default function AboutHero() {
  const stats = [
    { label: 'Events Performed', value: '12+' },
    { label: 'Years Active', value: '1.5' },
    { label: 'Festival Workshops', value: 'ArtsWells' },
  ];

  return (
    <section className="about-hero">
      <div className="about-hero-inner container">
        <h1 id="about-title" className="about-heading">
          Celebrating Punjabi Culture in Prince George
        </h1>
        <p className="about-tagline">
          Spreading the passion, discipline, and positivity of Bhangra. Building unity through rhythm.
        </p>
        <ul className="about-stats" role="list">
          {stats.map((s, i) => (
            <li key={i} className="about-stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
