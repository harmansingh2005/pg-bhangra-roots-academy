import React from 'react';
import './AboutStory.css';

export default function AboutStory() {
  return (
    <section className="about-story container" aria-labelledby="story-title">
      <div className="story-grid">
        <div className="story-main">
          <h2 id="story-title">Our Journey</h2>
          <p>
            In 2024, we opened <strong>PG Bhangra Roots Academy</strong> in Prince George, Canada. Within just one and a half years, we have
            successfully organized and performed in over <strong>12 events</strong> across the city. Our team has proudly represented Punjabi culture at community
            celebrations such as <strong>Canada Day, Diwali, Vaisakhi, Holi</strong>, and events for <strong>Aim High</strong>.
          </p>
          <p>
            We’ve also had the privilege to perform with famous Punjabi singers — <strong>Kulbir Jhinjer</strong> at the Civic Centre and <strong>Ranjit Bawa</strong> at the CN Centre — both unforgettable milestones for our academy.
          </p>
          <p>
            Additionally, we were invited to conduct a <strong>Bhangra workshop</strong> at the <strong>ArtsWells Festival</strong>, sharing the energy and joy of Punjabi folk dance with people from diverse cultures and backgrounds.
          </p>
          <p>
            At PG Bhangra Roots Academy, our mission is to spread the passion, discipline, and positivity of Bhangra while bringing communities together through the rhythm of Punjabi culture.
          </p>
        </div>
        <aside className="story-aside" aria-label="Highlights">
          <div className="aside-card">
            <h3>Highlights</h3>
            <ul role="list" className="highlight-list">
              <li>Established 2024</li>
              <li>12+ public cultural performances</li>
              <li>Collaborations with renowned Punjabi artists</li>
              <li>Community & festival workshops</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
