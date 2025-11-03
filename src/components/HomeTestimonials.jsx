import React from 'react';
import './HomeTestimonials.css';

const TESTIMONIALS = [
  {
    quote: 'My daughter loves every class! The teachers make learning fun.',
    author: 'Parent of Amrit, Age 7',
    icon: '👩‍👧'
  },
  {
    quote: 'Great balance of discipline and joy — my son can’t wait for each session.',
    author: 'Parent of Arjun, Age 9',
    icon: '🧑‍🦱'
  },
  {
    quote: 'Authentic bhangra with a welcoming community. Highly recommend!',
    author: 'Jaspreet, Alumni',
    icon: '✨'
  }
];

export default function HomeTestimonials() {
  return (
    <section className="home-testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className="testimonials-title">What Families Say</h2>
        <ul className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <li key={i} className="testimonial">
              <span className="avatar" role="img" aria-label="avatar">{t.icon}</span>
              <blockquote>“{t.quote}”</blockquote>
              <cite>— {t.author}</cite>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
