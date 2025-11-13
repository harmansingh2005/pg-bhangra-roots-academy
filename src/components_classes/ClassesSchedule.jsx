import React from 'react';
import './ClassesSchedule.css';

export default function ClassesSchedule() {
  return (
    <section className="classes-schedule container" aria-labelledby="schedule-title">
      <h2 id="schedule-title" className="schedule-heading">Class Schedule Highlights</h2>
      <ul className="schedule-list" role="list">
        <li><strong>Weekdays:</strong> Mon–Thu evenings</li>
        <li><strong>Weekends:</strong> Sat mornings</li>
        <li><strong>Monthly:</strong> Special events and workshops</li>
      </ul>
      <p className="schedule-note">Exact times and locations are shared after registration.</p>
    </section>
  );
}