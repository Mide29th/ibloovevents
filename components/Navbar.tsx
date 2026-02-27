import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, Menu } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <button
            className="mobile-menu mobile-only"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Tray */}
      <div className={`mobile-tray glass ${isMenuOpen ? 'open' : ''}`}>
        <div className="tray-content">
          <Link href="/" className="tray-link active" onClick={() => setIsMenuOpen(false)}>Explore</Link>
          <Link href="/dashboard" className="tray-link" onClick={() => setIsMenuOpen(false)}>Organize</Link>
          <Link href="/signin" className="tray-link" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
          <div className="tray-divider"></div>
          <Link href="/create" className="button button-primary tray-cta" onClick={() => setIsMenuOpen(false)}>
            Create Your First Event
          </Link>
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
           background: transparent;
           border: none;
           cursor: pointer;
           padding: 4px;
           color: var(--foreground);
           z-index: 1001;
        }

        .mobile-tray {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          height: calc(100vh - 72px);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-tray.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }
        .tray-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .tray-link {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--foreground);
          text-decoration: none;
          font-family: var(--font-heading);
          transition: color 0.2s ease;
        }
        .tray-link:hover, .tray-link.active {
          color: var(--primary);
        }
        .tray-divider {
          height: 1px;
          background: var(--border);
          margin: 1rem 0;
        }
        .tray-cta {
          padding: 1rem;
          text-align: center;
          font-size: 1rem;
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
