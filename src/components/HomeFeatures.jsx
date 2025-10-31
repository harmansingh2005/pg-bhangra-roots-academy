import React from 'react';
import './HomeFeatures.css';

const FEATURES = [
  { icon: '🎶', label: 'Fun, Structured Classes' },
  { icon: '👨‍🏫', label: 'Experienced Instructors' },
  { icon: '🏆', label: 'Performance Opportunities' },
  { icon: '🌏', label: 'Cultural Connection' },
];

export default function HomeFeatures() {
  return (
    <section className="home-features" aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title" className="features-title">Why Families Choose Us</h2>
        <ul className="features-grid">
          {FEATURES.map((f, i) => (
            <li key={i} className="feature">
              <span className="icon" role="img" aria-label={f.label}>{f.icon}</span>
              <h3>{f.label}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
