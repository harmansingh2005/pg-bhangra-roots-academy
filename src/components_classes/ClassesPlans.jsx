import React from 'react';
import './ClassesPlans.css';
import img1 from '../assets/home_img/img_home_1.jpg';
import img2 from '../assets/home_img/img_home_2.jpg';
import img3 from '../assets/home_img/img_home_3.jpg';

const plans = [
  {
    title: '8 Classes / Month',
    img: img1,
    price: '$90 / mo',
    blurb: 'A consistent weekly schedule to build fundamentals and fitness.',
    details: 'Perfect for beginners or busy schedules. Learn core Bhangra steps, posture, and timing while improving stamina each week. Includes warmups, technique drills, and choreography segments designed to build confidence steadily.'
  },
  {
    title: '12 Classes / Month',
    img: img2,
    price: '$100 / mo',
    blurb: 'Extra practice for faster progress, confidence, and stamina.',
    details: 'Best for motivated learners who want momentum. More reps, performance practice, and conditioning to increase precision and stage presence. Ideal if you’re preparing for shows or want quicker results.'
  },
  {
    title: 'Drop-In',
    img: img3,
    price: '$25 / class',
    blurb: 'Join a single session to try Bhangra or keep your skills sharp.',
    details: 'Great for travelers and alumni. Refresh your steps, get a solid workout, and learn a short piece of choreography. No commitment—just bring your energy and dance!'
  }
];

export default function ClassesPlans() {
  return (
    <section className="classes-plans container" aria-labelledby="plans-title">
      <h2 id="plans-title" className="plans-heading">Choose Your Plan -</h2>
      <div className="plan-list">
        {plans.map((p, i) => (
          <article className="plan-row" key={i}>
            <div className="plan-row-media" aria-hidden="true">
              <img src={p.img} alt="" className="plan-row-img" />
            </div>
            <div className="plan-row-body">
              <div className="plan-row-head">
                <h3 className="plan-title">{p.title}</h3>
                <span className="plan-price" aria-label={`price for ${p.title}`}>{p.price}</span>
              </div>
              <p className="plan-blurb">{p.blurb}</p>
              <p className="plan-details">{p.details}</p>
            </div>
            <div className="plan-row-cta">
              <a href="/register" className="btn btn-primary">Join Now</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}