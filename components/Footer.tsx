'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="logo">IBLOOV</h2>
            <p>Better events, simpler ticketing.</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Ecosystem</h4>
              <Link href="/hub">Hire Staff (Ibloov Hub)</Link>
              <Link href="/place">Book a Venue (Ibloov Place)</Link>
              <Link href="/learning">Get Certified (Ibloov Learning)</Link>
            </div>

            <div className="link-group">
              <h4>Platform</h4>
              <Link href="/about">About Us</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/support">Support</Link>
            </div>

            <div className="link-group">
              <h4>Legal</h4>
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Ibloov Events. Lagos, Nigeria.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 6rem 0 3rem;
          border-top: 1px solid var(--border);
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4rem;
          flex-wrap: wrap;
          gap: 3rem;
        }
        .footer-brand h2 {
          font-weight: 900;
          letter-spacing: -0.05em;
          margin-bottom: 1rem;
        }
        .footer-brand p {
          color: var(--secondary);
        }
        .footer-links {
          display: flex;
          gap: 4rem;
          flex-wrap: wrap;
        }
        .link-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .link-group h4 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }
        .link-groupLink, .link-group a {
          font-size: 0.95rem;
          color: var(--foreground);
          transition: opacity 0.2s ease;
        }
        .link-group a:hover {
          opacity: 0.6;
        }
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid #f3f3f3;
          color: var(--secondary);
          font-size: 0.85rem;
        }

        @media (max-width: 640px) {
          .footer-content {
            flex-direction: column;
          }
          .footer-links {
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
}
