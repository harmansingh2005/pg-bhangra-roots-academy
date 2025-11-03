import React from 'react';
import { Link } from 'react-router-dom';
import './HomeClasses.css';

import img1 from '../assets/classes/img_classes_1.jpg';
import img2 from '../assets/classes/img_classes_2.jpg';
import img3 from '../assets/classes/img_classes_3.jpg';

const CLASSES = [
  {
    img: img1,
    title: '8 Classes / Month',
    desc: 'A consistent weekly schedule to build fundamentals and fitness.',
  },
  {
    img: img2,
    title: '12 Classes / Month',
    desc: 'Extra practice for faster progress, confidence, and stamina.',
  },
  {
    img: img3,
    title: 'Drop–In',
    desc: 'Join a single session to try Bhangra or keep your skills sharp.',
  },
];

export default function HomeClasses() {
  return (
    <section className="home-classes" aria-labelledby="classes-title">
      <div className="container">
        <h2 id="classes-title" className="classes-title">Lessons We Offer</h2>
        <ul className="class-grid" role="list">
          {CLASSES.map((c, i) => (
            <li key={i} className="class-card">
              <article className="card">
                <figure className="card-media">
                  <img src={c.img} alt={c.title} />
                </figure>

                <div className="title-bar">
                  <h3 className="card-title" aria-level={3} role="heading">
                    {c.title}
                  </h3>
                </div>

                <div className="card-body">
                  <p className="desc">{c.desc}</p>
                  <Link to="/classes" className="btn" aria-label={`Lesson info for ${c.title}`}>
                    Lesson Info
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
