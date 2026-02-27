'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-card">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo-group">
                <Image
                  src="/image/mainlogo.png"
                  alt="iBLOOV"
                  width={80}
                  height={24}
                  style={{ objectFit: 'contain' }}
                />
                <span className="beta-badge">BETA</span>
              </div>
              <p className="footer-tagline">
                Technology that makes<br />Africa smile.
              </p>
              <div className="social-group">
                <div className="social-icon">X</div>
                <div className="social-icon">IG</div>
                <div className="social-icon">LI</div>
                <div className="social-icon">TK</div>
              </div>
              <div className="status-pill">
                <span className="status-dot"></span>
                Platform Is Live
              </div>
            </div>

            <div className="footer-nav">
              <div className="footer-col">
                <h4>PRODUCTS</h4>
                <Link href="#">Ibloov Learning</Link>
                <Link href="#">Ibloov Events</Link>
                <Link href="#">Ibloov Flex-it</Link>
              </div>
              <div className="footer-col">
                <h4>COMPANY</h4>
                <Link href="#">About Ibloov</Link>
                <Link href="#">Careers</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Campus Ambassadors</Link>
              </div>
              <div className="footer-col">
                <h4>COMMUNITY</h4>
                <Link href="#">Join Community</Link>
                <Link href="#">Discord</Link>
                <Link href="#">Twitter / X</Link>
                <Link href="#">Instagram</Link>
              </div>
              <div className="footer-col">
                <h4>SUPPORT</h4>
                <Link href="#">Contact Us</Link>
                <Link href="#">FAQs</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="copyright">© 2026 Ibloov Africa — Technology that makes you smile.</span>
          <div className="footer-bottom-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Code of Conduct</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-wrap {
          padding: 4rem 0 2rem;
          background: #f8fafc;
        }
        .footer-card {
          background: white;
          border-radius: 24px;
          padding: 4rem;
          box-shadow: 0 4px 60px rgba(0, 0, 0, 0.03);
          margin-bottom: 2rem;
          border: 1px solid rgba(0, 0, 0, 0.02);
        }
        .footer-top {
          display: flex;
          gap: 4rem;
        }
        .footer-brand {
          flex: 0 0 240px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .logo-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .beta-badge {
          background: #F1A000;
          color: white;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          letter-spacing: 0.02em;
        }
        .footer-tagline {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.5;
          font-family: var(--font-body);
        }
        .social-group {
          display: flex;
          gap: 0.75rem;
        }
        .social-icon {
          width: 36px;
          height: 36px;
          background: #f1f5f9;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 800;
          color: #475569;
          transition: all 0.2s ease;
        }
        .social-icon:hover {
          background: #e2e8f0;
          color: var(--primary);
        }
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #f1f5f9;
          padding: 0.5rem 1rem;
          border-radius: 99px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #475569;
          width: fit-content;
        }
        .status-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
        }

        .footer-nav {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-col h4 {
          font-size: 0.85rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
          font-family: var(--font-heading);
        }
        .footer-col :global(a) {
          color: #64748b;
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.2s ease;
          font-family: var(--font-body);
        }
        .footer-col :global(a:hover) {
          color: var(--primary);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          padding: 0 1rem;
          color: #94a3b8;
          font-size: 0.85rem;
        }
        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }
        .footer-bottom-links :global(a) {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-bottom-links :global(a:hover) {
          color: #64748b;
        }

        @media (max-width: 1024px) {
          .footer-top {
            flex-direction: column;
            gap: 3rem;
          }
          .footer-nav {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
        }
        @media (max-width: 640px) {
          .footer-card {
            padding: 2.5rem 1.5rem;
          }
          .footer-nav {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
          .footer-bottom-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
