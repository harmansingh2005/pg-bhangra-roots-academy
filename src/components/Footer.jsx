import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      {/* Top section */}
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-col">
            <h3>Prince George, BC</h3>
            <address>
              3730 Romanin Pl,<br />
              Prince George, BC V2N 4Z9, Canada
            </address>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <a className="contact-link" href="tel:+16473901159">+1 (647) 390-1159</a>
            <a className="contact-link" href="mailto:pgbhangraroots@gmail.com">pgbhangraroots@gmail.com</a>
            <p className="tagline">Authentic Punjabi Folk Dance!</p>
          </div>

          <div className="footer-col">
            <h3>Connect</h3>
            <div className="socials">
              <a
                href="https://www.instagram.com/pg_bhangra_roots_/?igsh=MTBpOXJsbzFjdjF3&utm_source=qr#"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7m5 3a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 2.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6M18.5 6.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/nanni.singh.96/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path fill="currentColor" d="M22 12.06C22 6.49 17.52 2 11.94 2 6.36 2 1.88 6.49 1.88 12.06 1.88 17.1 5.54 21.2 10.32 22v-7.02H7.72v-2.9h2.6V9.73c0-2.57 1.54-3.99 3.9-3.99 1.13 0 2.32.2 2.32.2v2.56h-1.31c-1.29 0-1.69.8-1.69 1.62v1.95h2.87l-.46 2.9h-2.41V22c4.78-.8 8.44-4.9 8.44-9.94Z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p>Copyright © {year}, PG Bhangra Roots Academy</p>
          <p>Design and SEO by Harmanpreet Sidhu</p>
        </div>
      </div>
    </footer>
  );
}
