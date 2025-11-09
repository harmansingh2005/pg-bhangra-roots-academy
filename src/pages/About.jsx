import React from 'react';
import './About.css';
import AboutHero from '../components_about/AboutHero';
import AboutStory from '../components_about/AboutStory';
import AboutMission from '../components_about/AboutMission';
import AboutFAQ from '../components_about/AboutFAQ';

export default function About() {
  return (
    <main className="about-page" aria-labelledby="about-title">
      <AboutHero />
      <AboutStory />
      <AboutFAQ />
      <AboutMission />
    </main>
  );
}
