import React, { useState } from 'react';
import './AboutFAQ.css';

const FAQS = [
  {
    q: 'Do I need any dance experience to join?',
    a: 'Not at all! Our Bhangra classes are open to everyone — from complete beginners to experienced dancers. Each session starts with basic moves and gradually builds up to full routines. Our instructors make sure every student, no matter their skill level, feels comfortable, supported, and challenged in a fun environment.'
  },
  {
    q: 'Do I need a partner to learn?',
    a: 'No partner is required. All routines are designed for individuals or small groups. We often teach synchronized choreography where students dance side-by-side in formations. So whether you come alone or with friends, you’ll fit right in and quickly become part of the team.'
  },
  {
    q: 'What should I wear to class?',
    a: 'We recommend comfortable athletic clothing that allows movement — leggings, track pants, t-shirts, or sweatshirts. Sneakers or running shoes are perfect for class. Traditional Punjabi outfits (like kurtas or suits) are only required for stage performances or photo sessions. Bring a water bottle, because Bhangra is a great workout!'
  },
  {
    q: 'What ages do you teach?',
    a: 'We have classes for kids (5–9 years), juniors (10–15 years), and adults (16 and above). Each group learns choreography suited to their age and energy level. Our youngest students focus on rhythm, coordination, and basic steps, while older groups work on stage presence, formations, and cultural storytelling through dance.'
  },
  {
    q: 'How long are the classes?',
    a: 'Most classes are about 60 minutes long. Each session includes a warm-up, step practice, choreography, and cool-down. For younger students, we keep things energetic yet structured, ensuring they stay focused while having fun. Adult sessions may include a short stretch or cardio segment for stamina.'
  },
  {
    q: 'When do new sessions start?',
    a: 'Our classes run year-round, and you can join at any time! We divide the year into flexible learning sessions, so new students are always welcome. Instructors help new members catch up at their own pace. You can register anytime using our online form or by visiting us in person.'
  },
  {
    q: 'Do you offer private lessons or workshops?',
    a: 'Yes! We offer private lessons, wedding choreography, and corporate workshops on request. Private sessions are perfect for students who want personal attention, couples preparing for special events, or teams planning cultural performances. Just reach out to us for customized schedules and pricing.'
  },
  {
    q: 'Do students perform on stage?',
    a: 'Absolutely! We love giving our students real-world opportunities to perform. PG Bhangra Roots students have showcased their talent at local festivals, parades, and cultural events. Performing helps students gain confidence, stage experience, and teamwork skills — and it’s always a proud moment for families.'
  },
  {
    q: 'Is performing mandatory?',
    a: 'No, it’s completely optional. Some students prefer learning for fun or fitness, while others love the excitement of performing. We encourage participation because it builds confidence and celebrates growth, but you can choose whichever path you’re comfortable with.'
  },
  {
    q: 'How do I register for classes?',
    a: 'You can register online by clicking the “Register” button at the top of our website, or visit the studio in person to sign up. Once registered, you’ll receive details about your class schedule, attire, and instructor. It’s quick, easy, and designed to help you get started right away.'
  },
  {
    q: 'What is your refund or makeup policy?',
    a: 'If you miss a class, we allow make-up sessions within the same month (based on availability). Refunds are typically not provided after the session begins, but we do our best to accommodate unforeseen circumstances. Our main goal is to ensure every student gets the full experience of learning and performing.'
  },
  {
    q: 'What makes PG Bhangra Roots different?',
    a: 'PG Bhangra Roots Academy combines traditional Punjabi culture with modern teaching methods. Our focus isn’t just on choreography — we emphasize teamwork, discipline, cultural understanding, and self-expression. We create a welcoming environment where every dancer feels part of a family and learns the deeper meaning behind each movement.'
  },
  {
    q: 'Is Bhangra a good form of exercise?',
    a: 'Definitely! Bhangra is one of the most energetic and joyful full-body workouts. It strengthens the legs, improves cardiovascular endurance, and boosts coordination. The rhythmic footwork and shoulder movements help burn calories while uplifting your mood. Many students say it’s the most fun workout they’ve ever done!'
  },
  {
    q: 'Do you offer online classes?',
    a: 'Yes, we occasionally host online Bhangra sessions for students outside our local area or those who prefer virtual learning. Online classes are held over Zoom with live feedback from instructors, so you can learn from home while staying connected to our community.'
  },
  {
    q: 'Can parents watch the class?',
    a: 'We have special observation days throughout the year where parents are invited to watch their children dance. On regular days, we focus on keeping students engaged and confident independently — but parents are always welcome to connect with instructors afterward for updates or feedback.'
  }
];

export default function AboutFAQ() {
  const [open, setOpen] = useState(() => new Set());

  const toggle = (idx) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx); else next.add(idx);
      return next;
    });
  };

  return (
    <section id="faq" className="about-faq container" aria-labelledby="faq-title">
      <h2 id="faq-title" className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {FAQS.map((item, i) => {
          const isOpen = open.has(i);
          return (
            <div className={`faq-item ${isOpen ? 'open' : ''}`} key={i}>
              <button
                id={`faq-q-${i}`}
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => toggle(i)}
              >
                <span className="q-text">{item.q}</span>
                <svg className="chev" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                id={`faq-panel-${i}`}
                className={`faq-panel ${isOpen ? 'open' : ''}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
              >
                <div className="faq-content">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
