'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="glass sticky-nav">
      <div className="container nav-content">
        <div className="nav-left">
          <Link href="/" className="logo">
            IBLOOV
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
          height: 64px;
          display: flex;
          align-items: center;
        }
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .logo {
          font-weight: 900;
          font-size: 1.5rem;
          letter-spacing: -0.05em;
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
          background: #f3f3f3;
          border-radius: 9999px;
          padding: 0.5rem 1rem;
          width: 100%;
          transition: background 0.2s ease;
        }
        .search-bar:focus-within {
          background: #eeeeee;
        }
        .search-icon {
          color: #666;
          margin-right: 0.5rem;
        }
        .search-input {
          background: transparent;
          border: none;
          outline: none;
          width: 100%;
          font-size: 0.9rem;
          color: var(--foreground);
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--secondary);
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: var(--foreground);
        }
        
        @media (max-width: 768px) {
          .nav-center {
            display: none; /* Hide search on mobile, or move to drawer */
          }
          .logo {
            font-size: 1.25rem;
          }
          .nav-right {
            gap: 1rem;
          }
        }
      `}</style>
    </nav>
  );
}
