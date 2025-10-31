import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeCarousel.css';

import img1 from '../assets/home_img/img_home_1.jpg';
import img2 from '../assets/home_img/img_home_2.jpg';
import img3 from '../assets/home_img/img_home_3.jpg';

const SLIDE_MS = 5500;

export default function HomeCarousel() {
  const images = useMemo(() => [img1, img2, img3], []);
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(next, SLIDE_MS);
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [images.length]);

  // Reset timer on manual nav so it doesn't immediately jump
  const handleManual = (dir) => {
    if (timerRef.current) clearInterval(timerRef.current);
    dir === 'next' ? next() : prev();
    timerRef.current = setInterval(next, SLIDE_MS);
  };

  return (
    <section className="home-hero">
      <div className="carousel-frame container">
        <button className="nav nav-prev" aria-label="Previous slide" onClick={() => handleManual('prev')}>
          ‹
        </button>

        <div className="slides">
          {images.map((src, i) => (
            <figure
              key={i}
              className={`slide ${i === index ? 'is-active' : ''}`}
              aria-hidden={i !== index}
            >
              <img src={src} alt="Bhangra class" loading={i === 0 ? 'eager' : 'lazy'} />
              {/* CTA overlay */}
              <figcaption className="overlay">
                <h2>Back to the Roots</h2>
                <Link to="/register" className="cta">Join Now</Link>
              </figcaption>
            </figure>
          ))}
        </div>

        <button className="nav nav-next" aria-label="Next slide" onClick={() => handleManual('next')}>
          ›
        </button>
      </div>

      <div className="dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'is-active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              if (timerRef.current) clearInterval(timerRef.current);
              setIndex(i);
              timerRef.current = setInterval(next, SLIDE_MS);
            }}
          />
        ))}
      </div>
    </section>
  );
}
