'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="glass sticky-nav">
      <div className="container nav-content">
        <div className="nav-left">
          <Link href="/" className="logo-link">
            <Image
              src="/image/mainlogo.png"
              alt="iBLOOV"
              width={90}
              height={28}
              style={{ objectFit: 'contain' }}
              priority
            />
            <span className="beta-badge">BETA</span>
          </Link>
          <div className="nav-links desktop-only">
            <Link href="/" className="nav-link active">Explore</Link>
            <Link href="/dashboard" className="nav-link">Organize</Link>
          </div>
        </div>

        <div className="nav-center desktop-only">
          <div className="search-pill">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search experiences..."
              className="search-input"
            />
          </div>
        </div>

        <div className="nav-right">
          <Link href="/signin" className="login-link desktop-only">Sign In</Link>
          <Link href="/create" className="button button-primary nav-cta">
            Create Event
          </Link>
          <button className="mobile-menu mobile-only">
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .sticky-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 72px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .nav-left {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }
        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .beta-badge {
          background: var(--accent-glow);
          color: var(--accent);
          font-size: 0.6rem;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--foreground-muted);
          transition: color 0.2s ease;
          font-family: var(--font-heading);
        }
        .nav-link:hover, .nav-link.active {
          color: var(--primary);
        }
        
        .nav-center {
          flex: 1;
          display: flex;
          justify-content: center;
          max-width: 400px;
        }
        .search-pill {
          display: flex;
          align-items: center;
          background: var(--muted);
          border: 1px solid var(--border);
          border-radius: 99px;
          padding: 0.4rem 1rem;
          width: 100%;
          transition: all 0.3s ease;
        }
        .search-pill:focus-within {
          background: white;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px var(--primary-glow);
        }
        .search-icon {
          color: var(--foreground-muted);
          margin-right: 0.5rem;
        }
        .search-input {
          background: transparent;
          border: none;
          outline: none;
          width: 100%;
          font-size: 0.9rem;
          color: var(--foreground);
          font-family: var(--font-body);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .login-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--foreground);
          font-family: var(--font-heading);
        }
        .nav-cta {
          padding: 0.6rem 1.25rem;
          font-size: 0.9rem;
        }

        .mobile-menu {
           display: none;
           flex-direction: column;
           gap: 6px;
           background: transparent;
           border: none;
           cursor: pointer;
           padding: 4px;
        }
        .burger-line {
           width: 24px;
           height: 2px;
           background: var(--foreground);
           border-radius: 2px;
        }

        .desktop-only { display: flex; }
        .mobile-only { display: none; }

        @media (max-width: 1024px) {
          .nav-center, .nav-links, .login-link {
            display: none;
          }
          .mobile-menu, .mobile-only {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}
