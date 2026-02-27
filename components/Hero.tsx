'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CITIES = [
  "Lagos",
  "Òṣogbo",
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
    const typeSpeed = isDeleting ? 50 : 150;
    const pauseTime = 2000;

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
      <div className="container">
        <div className="hero-header">
          <h1 className="hero-title">
            Events worth your time <br />
            in <span className="highlight">{displayText}</span><span className="cursor">|</span>.
          </h1>
          <div className="organizer-cta">
            <p>Hosting something? Manage guest lists, tickets, and vibes.</p>
            <a href="/create" className="cta-link">
              Start Free <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="featured-carousel">
          {mockFeaturedEvents.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <div className="featured-card">
                <div className="card-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="card-image"
                  />
                  <div className="card-overlay">
                    <span className="card-date">{event.date}</span>
                    <h3 className="card-title">{event.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: 4rem 0 2rem;
        }
        .hero-header {
          margin-bottom: 3rem;
          text-align: center;
        }
        .hero-title {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          font-family: var(--font-heading);
        }
        .highlight {
          color: var(--accent);
          text-decoration: underline;
          text-decoration-color: var(--accent);
          text-decoration-thickness: 3px;
          text-underline-offset: 8px;
        }
        .cursor {
          display: inline-block;
          font-weight: 100;
          color: var(--accent);
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .organizer-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--secondary);
        }
        .cta-link {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--primary);
          font-weight: 700;
          font-family: var(--font-heading);
          border-bottom: 2px solid var(--primary);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .cta-link:hover {
          color: var(--accent);
          border-color: var(--accent);
        }
        
        .featured-carousel {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 1rem;
        }
        .featured-carousel::-webkit-scrollbar {
          display: none;
        }
        .featured-card {
           position: relative;
           border-radius: 20px;
           overflow: hidden;
           aspect-ratio: 16/9;
           cursor: pointer;
           transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .featured-card:hover {
          transform: scale(1.02);
          box-shadow: 0 12px 32px rgba(0, 0, 210, 0.12);
        }
        .card-image-wrapper {
          width: 100%;
          height: 100%;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          background: linear-gradient(transparent, rgba(0, 0, 128, 0.75));
          color: white;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .card-date {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          background: var(--primary);
          width: fit-content;
          padding: 0.3rem 0.85rem;
          border-radius: 99px;
          font-family: var(--font-heading);
          letter-spacing: 0.03em;
        }
        .card-title {
          font-size: 1.5rem;
          font-family: var(--font-heading);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.25rem;
          }
          .featured-carousel {
            grid-template-columns: 1fr;
          }
          .organizer-cta {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
