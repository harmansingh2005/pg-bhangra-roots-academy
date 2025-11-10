import React from 'react';
import './AboutInstructor.css';
import instructorImg from '../assets/about_img/about_hero.png'; // Placeholder – replace with actual instructor image when added

export default function AboutInstructor() {
  return (
    <section className="about-instructor container" aria-labelledby="instructor-title">
      <div className="instructor-layout">
        {/* Heading first on mobile, positioned alongside content on desktop via grid areas */}
        <div className="instructor-heading-wrap">
          <h2 id="instructor-title" className="instructor-heading">Meet the Instructor</h2>
        </div>
        {/* Image second on mobile */}
        <figure className="instructor-figure">
          <img src={instructorImg} alt="Lead Bhangra Instructor" className="instructor-img" />
          <figcaption className="instructor-caption">Narinder Saggu — Lead Instructor, PG Bhangra Roots Academy</figcaption>
        </figure>
        {/* Info after image */}
        <div className="instructor-content">
          <div className="instructor-intro">
            <h3 className="section-subheading">My Bhangra Journey</h3>
            <p>
              I started Bhangra at 10, and it quickly became my bridge to Punjabi culture and a lifelong passion.
              It shaped my confidence and discipline, filled my life with energy and purpose, and helped me find my voice.
              Through this art, I discovered joy, strength, and a deeper connection to my heritage and the world around me.
            </p>
          </div>
          <div className="instructor-teach">
            <h3 className="section-subheading">Why I Teach</h3>
            <p>
              I teach to pass on the confidence, happiness, and cultural pride Bhangra gave me.
              My classes are safe, positive, and uplifting for all ages, focused on learning and growth at your pace.
              It’s more than choreography—it’s about community, culture, and creating a space where everyone feels proud of who they are.
            </p>
          </div>
          <div className="instructor-achievements" aria-labelledby="achievements-title">
            <h3 id="achievements-title" className="section-subheading">Achievements & Highlights</h3>
            <p>
              I earned bronze, silver, and gold medals at Youth Fest competitions (2014–2019) and performed in Singapore, Egypt, Germany, Russia,
              and Dubai—experiences that showed me Bhangra’s universal power. Today I lead workshops for kids, teens, and adults, and many of my
              students perform proudly across Prince George as part of our welcoming PG Bhangra Roots community.
            </p>
            <ul className="achievement-grid" role="list">
              <li className="achievement-card">
                <span className="ach-icon" aria-hidden="true">★</span>
                <div>
                  <h4>2014–2019 Medals</h4>
                  <p className="ach-desc">Bronze, silver & gold across Youth Fest levels.</p>
                </div>
              </li>
              <li className="achievement-card">
                <span className="ach-icon" aria-hidden="true">★</span>
                <div>
                  <h4>Global Performances</h4>
                  <p className="ach-desc">Showcased Punjabi culture in 5+ countries.</p>
                </div>
              </li>
              <li className="achievement-card">
                <span className="ach-icon" aria-hidden="true">★</span>
                <div>
                  <h4>Inclusive Workshops</h4>
                  <p className="ach-desc">Teaching kids, teens & adults with cultural pride.</p>
                </div>
              </li>
              <li className="achievement-card">
                <span className="ach-icon" aria-hidden="true">★</span>
                <div>
                  <h4>Community Impact</h4>
                  <p className="ach-desc">Students performing confidently across PG events.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}