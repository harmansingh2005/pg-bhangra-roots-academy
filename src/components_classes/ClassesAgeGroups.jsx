import React from 'react';
import './ClassesAgeGroups.css';

const groups = [
  { title: 'Kids (Ages 5–9)', icon: '🧒', text: 'Fun intro to rhythm, coordination, and confidence.' },
  { title: 'Juniors (Ages 10–15)', icon: '🧑‍🎓', text: 'Team-based routines, formations, and performance training.' },
  { title: 'Adults (16+)', icon: '💪', text: 'Fitness, confidence, and joyful movement in a welcoming group.' },
];

export default function ClassesAgeGroups() {
  return (
    <section className="classes-groups container" aria-labelledby="groups-title">
      <h2 id="groups-title" className="groups-heading">Age Groups</h2>
      <div className="groups-grid">
        {groups.map((g, i) => (
          <div className="group-card" key={i}>
            <div className="group-icon" aria-hidden="true">{g.icon}</div>
            <h3 className="group-title">{g.title}</h3>
            <p className="group-text">{g.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}