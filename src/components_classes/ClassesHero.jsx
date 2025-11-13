import React from 'react';
import './ClassesHero.css';

export default function ClassesHero() {
  return (
    <section className="classes-hero" aria-labelledby="classes-hero-title">
      <div className="classes-hero-inner container">
        <h1 id="classes-hero-title" className="classes-hero-heading">Classes We Offer</h1>
        <p className="classes-hero-sub">Find the perfect class that matches your schedule, energy, and goals.</p>
      </div>
    </section>
  );
}