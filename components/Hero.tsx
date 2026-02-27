'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CITIES = [
  "Lagos",
  "Òsogbo",
  "Port Harcourt",
  "Abuja",
  "Ibadan",
  "Ilorin",
  "Uyo",
  "Enugu",
  "London",
  "New York",
  "Dubai",
  "Accra",
  "Johannesburg",
  "Paris",
  "Toronto"
];

const mockFeaturedEvents = [
  {
    id: 1,
    title: "Lagos Beach Festival 2026",
    location: "Landmark Beach, Lagos",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
    date: "OCT 12"
  },
  {
    id: 2,
    title: "Afrobeat Night Out",
    location: "Eko Hotel, Lagos",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    date: "NOV 05"
  },
  {
    id: 3,
    title: "Art & Dine: Rooftop",
    location: "VI, Lagos",
    image: "https://images.unsplash.com/photo-1514525253361-9f9a866f824c?auto=format&fit=crop&q=80&w=1000",
    date: "DEC 20"
  }
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [cityIndex, setCityIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentCity = CITIES[cityIndex];
    const typeSpeed = isDeleting ? 40 : 100;
    const pauseTime = 2500;

    const initialTimeout = setTimeout(() => {
      if (!isDeleting && displayText === currentCity) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCityIndex((prev) => (prev + 1) % CITIES.length);
      } else {
        const nextText = isDeleting
          ? currentCity.substring(0, displayText.length - 1)
          : currentCity.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }
    }, typeSpeed);

    return () => clearTimeout(initialTimeout);
  }, [displayText, cityIndex, isDeleting]);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            The #1 Event Platform in Africa
          </div>

          <h1 className="hero-title">
            Delightful events <br />
            <span>start </span>
            <span className="text-amber">{displayText}</span>
            <span className="cursor">|</span>
          </h1>

          <p className="hero-description">
            Set up an event page, invite friends and sell tickets.
            Host a memorable event today with iBLOOV.
          </p>

          <div className="hero-actions">
            <Link href="/create" className="button button-primary">
              Create Your First Event
            </Link>
            <Link href="/signin" className="button button-outline">
              Sign In
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <strong>50k+</strong>
              <span>Tickets Sold</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <strong>1200+</strong>
              <span>Organizers</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card main-card">
            <div className="card-mock-img"></div>
            <div className="card-mock-content">
              <div className="mock-title">Afrobeat Night Out</div>
              <div className="mock-details">Eko Hotel • Dec 20, 2026</div>
            </div>
          </div>
          <div className="visual-card secondary-card card-1"></div>
          <div className="visual-card secondary-card card-2"></div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          padding: 8rem 0 6rem;
          overflow: hidden;
          background: var(--grad-surface);
        }
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          opacity: 0.6;
        }
        .blob {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(80px);
          animation: float 20s infinite alternate;
        }
        .blob-1 {
          background: var(--primary-glow);
          top: -100px;
          left: -100px;
        }
        .blob-2 {
          background: var(--accent-glow);
          bottom: -150px;
          right: -100px;
          animation-delay: -5s;
        }
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(100px, 50px) scale(1.1); }
        }

        .hero-container {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-content {
          text-align: left;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: white;
          padding: 0.5rem 1rem;
          border-radius: 99px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          margin-bottom: 2rem;
          color: var(--foreground-muted);
        }
        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary);
        }
        .hero-title {
          font-size: clamp(3rem, 5vw, 4.5rem);
          line-height: 1.05;
          margin-bottom: 1.5rem;
          font-weight: 800;
          color: var(--foreground);
        }
        .text-amber {
          color: var(--accent);
          text-shadow: 0 0 20px var(--accent-glow);
        }
        .cursor {
          display: inline-block;
          color: var(--accent);
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .hero-description {
          font-size: 1.25rem;
          color: var(--foreground-muted);
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 540px;
          font-family: var(--font-body);
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        .stat-item strong {
          font-size: 1.5rem;
          font-family: var(--font-heading);
          color: var(--foreground);
        }
        .stat-item span {
          font-size: 0.9rem;
          color: var(--foreground-muted);
        }
        .stat-divider {
          width: 1px;
          height: 32px;
          background: var(--border);
        }

        .hero-visual {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .visual-card {
          background: white;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-premium);
          border: 1px solid var(--border);
          position: absolute;
          overflow: hidden;
        }
        .main-card {
          width: 320px;
          height: 420px;
          z-index: 3;
          transform: rotate(-2deg);
          transition: all 0.5s ease;
        }
        .main-card:hover {
          transform: rotate(0deg) scale(1.02);
        }
        .card-mock-img {
          height: 70%;
          background: var(--grad-primary);
          opacity: 0.9;
          position: relative;
        }
        .card-mock-img::after {
          content: '★';
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: white;
          opacity: 0.2;
        }
        .card-mock-content {
          padding: 1.5rem;
        }
        .mock-title {
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .mock-details {
          font-size: 0.9rem;
          color: var(--foreground-muted);
        }
        .secondary-card {
          width: 280px;
          height: 360px;
          opacity: 0.5;
          filter: blur(1px);
        }
        .card-1 {
          z-index: 2;
          transform: translate(60px, -40px) rotate(4deg);
          background: #f1f5f9;
        }
        .card-2 {
          z-index: 1;
          transform: translate(-80px, 40px) rotate(-8deg);
          background: #fffbeb;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 4rem;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-visual {
            height: 400px;
            width: 100%;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-stats {
            justify-content: center;
          }
        }
        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.75rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .main-card {
            width: 260px;
            height: 340px;
          }
          .secondary-card {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
