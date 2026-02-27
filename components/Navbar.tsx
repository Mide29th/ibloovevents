'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, Menu } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky-nav">
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
            <div className="nav-links">
              <Link href="/" className="nav-link active">Explore</Link>
              <Link href="/dashboard" className="nav-link">Organize</Link>
            </div>
          </div>

          <div className="nav-center">
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
            <Link href="/signin" className="login-link">Sign In</Link>
            <Link href="/create" className="button button-primary nav-cta">
              Create Event
            </Link>
            <button
              className="mobile-burger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile Menu Tray */}
      <div className={`mobile-tray ${isMenuOpen ? 'open' : ''}`}>
        <div className="tray-search">
          <Search size={16} className="tray-search-icon" />
          <input
            type="text"
            placeholder="Search experiences..."
            className="tray-search-input"
          />
        </div>

        <div className="tray-links">
          <Link href="/" className="tray-link active" onClick={() => setIsMenuOpen(false)}>
            Explore
          </Link>
          <Link href="/dashboard" className="tray-link" onClick={() => setIsMenuOpen(false)}>
            Organize
          </Link>
          <Link href="/signin" className="tray-link" onClick={() => setIsMenuOpen(false)}>
            Sign In
          </Link>
        </div>

        <div className="tray-bottom">
          <Link
            href="/create"
            className="button button-primary tray-cta"
            onClick={() => setIsMenuOpen(false)}
          >
            Create Your First Event
          </Link>
        </div>
      </div>

      <style jsx>{`
        /* ===== NAVBAR BAR ===== */
        .sticky-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 64px;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
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
          gap: 0.6rem;
          text-decoration: none;
        }
        .beta-badge {
          background: #FFF3D6;
          color: #D4880F;
          font-size: 0.55rem;
          font-weight: 800;
          padding: 2px 5px;
          border-radius: 3px;
          letter-spacing: 0.04em;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: #64748b;
          transition: color 0.2s ease;
          font-family: var(--font-heading);
          text-decoration: none;
        }
        :global(.nav-link:hover), :global(.nav-link.active) {
          color: var(--primary);
        }

        /* ===== SEARCH ===== */
        .nav-center {
          flex: 1;
          display: flex;
          justify-content: center;
          max-width: 360px;
          margin: 0 2rem;
        }
        .search-pill {
          display: flex;
          align-items: center;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 99px;
          padding: 0.4rem 1rem;
          width: 100%;
          transition: all 0.3s ease;
        }
        .search-pill:focus-within {
          background: white;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(0, 0, 210, 0.08);
        }
        :global(.search-icon) {
          color: #94a3b8;
          margin-right: 0.5rem;
          flex-shrink: 0;
        }
        .search-input {
          background: transparent;
          border: none;
          outline: none;
          width: 100%;
          font-size: 0.85rem;
          color: #1e293b;
          font-family: var(--font-body);
        }

        /* ===== NAV RIGHT ===== */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .login-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: #1e293b;
          font-family: var(--font-heading);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .login-link:hover {
          color: var(--primary);
        }
        .nav-cta {
          padding: 0.55rem 1.15rem;
          font-size: 0.85rem;
          white-space: nowrap;
        }

        /* ===== BURGER (hidden by default, shown on mobile) ===== */
        .mobile-burger {
          display: none;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 6px;
          color: #1e293b;
          border-radius: 8px;
          transition: background 0.2s ease;
        }
        .mobile-burger:hover {
          background: #f1f5f9;
        }

        /* ===== MOBILE OVERLAY ===== */
        :global(.mobile-overlay) {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 998;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* ===== MOBILE TRAY ===== */
        .mobile-tray {
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          background: white;
          z-index: 999;
          display: none;
          flex-direction: column;
          padding: 1.5rem 1.25rem 2rem;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
          transform: translateY(-8px);
          opacity: 0;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-tray.open {
          transform: translateY(0);
          opacity: 1;
        }

        .tray-search {
          display: flex;
          align-items: center;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.7rem 1rem;
          margin-bottom: 1.5rem;
        }
        :global(.tray-search-icon) {
          color: #94a3b8;
          margin-right: 0.6rem;
          flex-shrink: 0;
        }
        .tray-search-input {
          background: transparent;
          border: none;
          outline: none;
          width: 100%;
          font-size: 0.95rem;
          color: #1e293b;
          font-family: var(--font-body);
        }

        .tray-links {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        :global(.tray-link) {
          font-size: 1.05rem;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          font-family: var(--font-heading);
          padding: 0.85rem 0;
          border-bottom: 1px solid #f1f5f9;
          transition: color 0.2s ease;
        }
        :global(.tray-link:last-child) {
          border-bottom: none;
        }
        :global(.tray-link:hover), :global(.tray-link.active) {
          color: var(--primary);
        }

        .tray-bottom {
          margin-top: 1.5rem;
        }
        :global(.tray-cta) {
          display: block;
          width: 100%;
          padding: 0.85rem;
          text-align: center;
          font-size: 0.95rem;
          border-radius: 12px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .nav-links,
          .nav-center,
          .login-link,
          .nav-cta {
            display: none !important;
          }
          .mobile-burger {
            display: flex;
          }
          .mobile-tray {
            display: flex;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-center {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
