// HomeInstagram.jsx
import React, { useEffect } from 'react';
import './HomeInstagram.css';

const INSTAGRAM_ACCOUNT = 'https://www.instagram.com/pg_bhangra_roots_/';

// Clean public permalinks (no utm params, no /embed here)
const POSTS = [
  'https://www.instagram.com/reel/DOryPZNkhaR/',
  'https://www.instagram.com/reel/DMEj1LqR202/',
  'https://www.instagram.com/reel/DQsqMA2Edmw/',
];

function useInstagramEmbed(deps = []) {
  useEffect(() => {
    const src = 'https://www.instagram.com/embed.js';
    let script = document.querySelector(`script[src="${src}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => window.instgrm?.Embeds?.process();
      document.body.appendChild(script);
    } else {
      window.instgrm?.Embeds?.process();
    }
  }, deps);
}

function InstagramPost({ permalink }) {
  useInstagramEmbed([permalink]);
  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={permalink}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: 12,
        width: '100%',
        maxWidth: 540,
        minWidth: 326,
        margin: '0 auto'
      }}
    />
  );
}

export default function HomeInstagram() {
  return (
    <section className="home-instagram" aria-labelledby="ig-title">
      <div className="ig-container">
        <header className="ig-header">
          <h2 id="ig-title">Keep up with us on Instagram</h2>
          <p className="ig-subtext">See our latest performances and class moments.</p>
        </header>

        <ul className="ig-grid" role="list">
          {POSTS.map((link, i) => (
            <li key={i} className="ig-tile">
              <InstagramPost permalink={link} />
            </li>
          ))}
        </ul>

        <div className="ig-cta-wrap">
          <a className="ig-btn" href={INSTAGRAM_ACCOUNT} target="_blank" rel="noreferrer noopener">
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
