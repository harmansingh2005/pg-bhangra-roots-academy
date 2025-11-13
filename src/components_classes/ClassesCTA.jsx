import React from 'react';
import './ClassesCTA.css';

export default function ClassesCTA() {
  return (
    <section className="classes-cta" aria-labelledby="cta-title">
      <div className="cta-inner container">
        <h2 id="cta-title" className="cta-heading">Ready to Dance?</h2>
        <p className="cta-sub">Join the PG Bhangra Roots family and bring energy, culture, and joy into your routine.</p>
        <div className="cta-actions">
          <a href="/register" className="btn btn-cta-primary">Register Now</a>
          <a href="/contact" className="btn btn-cta-secondary">Contact Us</a>
        </div>
      </div>
    </section>
  );
}