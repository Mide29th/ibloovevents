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
              alt="iBLOOV Logo"
              width={40}
              height={40}
              className="logo-img"
              priority
            />
            <span className="nav-beta-badge">BETA</span>
          </Link>
        </div>

        <div className="nav-center">
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search concerts, parties, workshops..."
              className="search-input"
            />
          </div>
        </div>

        <div className="nav-right">
          <Link href="/dashboard" className="nav-link">
            My Events
          </Link>
          <Link href="/signin" className="nav-link">
            Sign In
          </Link>
          <Link href="/create" className="button button-primary">
            Create Event
          </Link>
        </div>
      </div>

      <style jsx>{`
        .sticky-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          height: 68px;
          display: flex;
          align-items: center;
        }
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo-img {
          height: 32px;
          width: auto;
        }
        .nav-beta-badge {
          background: var(--accent);
          color: var(--foreground);
          font-size: 0.55rem;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          letter-spacing: 0.08em;
          font-family: var(--font-heading);
        }
        .nav-center {
          flex: 1;
          display: flex;
          justify-content: center;
          max-width: 500px;
          margin: 0 2rem;
        }
        .search-bar {
          display: flex;
          align-items: center;
          background: var(--muted);
          border: 1px solid var(--border);
          border-radius: 9999px;
          padding: 0.55rem 1.25rem;
          width: 100%;
          transition: all 0.25s ease;
        }
        .search-bar:focus-within {
          background: #ffffff;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(0, 0, 210, 0.08);
        }
        .search-icon {
          color: var(--secondary);
          margin-right: 0.5rem;
        }
        .search-input {
          background: transparent;
          border: none;
          outline: none;
          width: 100%;
          font-size: 0.9rem;
          font-family: var(--font-body);
          color: var(--foreground);
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nav-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--foreground);
          font-family: var(--font-heading);
          transition: color 0.2s ease;
          position: relative;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        
        @media (max-width: 768px) {
          .nav-center {
            display: none;
          }
          .logo-img {
            height: 32px;
            width: 32px;
          }
          .nav-right {
            gap: 1rem;
          }
        }
      `}</style>
    </nav>
  );
}
